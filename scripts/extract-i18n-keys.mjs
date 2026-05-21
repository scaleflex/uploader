/**
 * Statically extracts all translation keys from source TypeScript files:
 *   - t('key', 'default') calls
 *   - t('key', { defaultValue_one: '...', defaultValue_other: '...' }) calls
 *   - labelKey: 'key', label: 'Default' pairs from constants (same or nearby lines)
 *
 * Usage:
 *   node scripts/extract-i18n-keys.mjs              # print to stdout
 *   node scripts/extract-i18n-keys.mjs --save       # write to up-keys.json
 *   node scripts/extract-i18n-keys.mjs --curl       # print ready-to-run curl command
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

// Keep in sync with src/i18n/constants.ts → I18N_GRID_UUID
const GRID_UUID = 'f7b2366e-fcb6-4f1a-8f23-8de48422989a';
const TMS_URL = 'https://neo.wordplex.io/api/import/request-translations';
const SRC_DIR = new URL('../src', import.meta.url).pathname;

function walkFiles(dir, exts = ['.ts']) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.') || entry === 'node_modules') continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkFiles(full, exts));
    } else if (exts.includes(extname(entry))) {
      results.push(full);
    }
  }
  return results;
}

const keys = new Map(); // key -> defaultValue string

function addKey(key, defaultVal) {
  if (key && defaultVal !== undefined && defaultVal !== '' && !keys.has(key)) {
    keys.set(key, defaultVal);
  }
}

/**
 * Extract content of a JS object literal starting right after the opening {.
 * Handles nested braces and quoted strings (including {{ }} template vars).
 */
function extractObjectBody(src, startIdx) {
  let depth = 1;
  let i = startIdx;
  let inStr = false;
  let strChar = '';
  while (i < src.length && depth > 0) {
    const ch = src[i];
    if (inStr) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === strChar) inStr = false;
    } else {
      if (ch === '"' || ch === "'" || ch === '`') { inStr = true; strChar = ch; }
      else if (ch === '{') depth++;
      else if (ch === '}') { depth--; if (depth === 0) break; }
    }
    i++;
  }
  return src.slice(startIdx, i);
}

for (const file of walkFiles(SRC_DIR)) {
  const src = readFileSync(file, 'utf8');

  // --- 1. Find t('key', ...) calls ---
  // Match the opening: t( followed by a quoted key
  const tCallRe = /\bt\(\s*(['"])([^'"]+)\1\s*,\s*/g;
  let m;
  while ((m = tCallRe.exec(src)) !== null) {
    const key = m[2];
    const afterComma = src.slice(m.index + m[0].length);

    // Is the second arg a single/double-quoted string?
    const strArgM = afterComma.match(/^(['"])([^'"]+)\1/);
    if (strArgM) {
      addKey(key, strArgM[2]);
      continue;
    }

    // Is the second arg a backtick template literal?
    // Replace ${...} with {{count}} to get the i18next template form
    const tplArgM = afterComma.match(/^`([^`]+)`/);
    if (tplArgM) {
      const def = tplArgM[1].replace(/\$\{[^}]+\}/g, '{{count}}');
      addKey(key, def);
      continue;
    }

    // Is the second arg an object?
    if (afterComma.trimStart().startsWith('{')) {
      const objStart = afterComma.indexOf('{') + 1;
      const body = extractObjectBody(afterComma, objStart);

      const oneM = body.match(/defaultValue_one\s*:\s*['"`]([^'"`]+)['"`]/);
      const otherM = body.match(/defaultValue_other\s*:\s*['"`]([^'"`]+)['"`]/);
      if (oneM && otherM) {
        addKey(`${key}_one`, oneM[1]);
        addKey(`${key}_other`, otherM[1]);
      }
    }
  }

  // --- 2. labelKey constants: extract { labelKey: 'key', label/labelDefault: 'Default' } ---
  // Scan for labelKey: 'key' and look within ±5 lines for label/labelDefault: 'Default'
  const lines = src.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const lkM = lines[i].match(/labelKey\s*:\s*'([^']+)'/);
    if (!lkM) continue;
    const labelKey = lkM[1];
    if (keys.has(labelKey)) continue;

    // Prefer same line, then search nearby ±5 lines for label/labelDefault: 'Default'
    const sameLine = lines[i];
    const sameLineM = sameLine.match(/\blabelDefault\s*:\s*'([^']+)'/) || sameLine.match(/(?<!\w)label\s*:\s*'([^']+)'/);
    if (sameLineM) {
      addKey(labelKey, sameLineM[1]);
    } else {
      const window = lines.slice(Math.max(0, i - 5), Math.min(lines.length, i + 6)).join('\n');
      const labelM = window.match(/\blabelDefault\s*:\s*'([^']+)'/) || window.match(/\blabel\s*:\s*'([^']+)'/);
      if (labelM) {
        addKey(labelKey, labelM[1]);
      }
    }
  }
}

const requests = Array.from(keys.entries())
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, def]) => ({
    key,
    lang: 'en',
    default: def,
  }));

const args = process.argv.slice(2);

if (args.includes('--curl')) {
  const payload = JSON.stringify({ grid_uuid: GRID_UUID, translations_requests: requests });
  const escaped = payload.replaceAll("'", "'\\''");
  console.log(`curl '${TMS_URL}' \\`);
  console.log(`  -H 'Content-Type: application/json' \\`);
  console.log(`  --data-raw '${escaped}'`);
} else if (args.includes('--save')) {
  const out = JSON.stringify({ grid_uuid: GRID_UUID, translations_requests: requests }, null, 2);
  writeFileSync('up-keys.json', out, 'utf8');
  console.log(`Saved ${requests.length} keys to up-keys.json`);
  console.log(`Submit with: curl '${TMS_URL}' -H 'Content-Type: application/json' -d @up-keys.json`);
} else {
  console.log(JSON.stringify({ grid_uuid: GRID_UUID, translations_requests: requests }, null, 2));
  console.log(`\nTotal: ${requests.length} keys`);
}
