---
name: update-translations
description: Extract all translation keys from the uploader source and submit them to the Wordplex TMS grid. Run this after adding new t('key', 'default') calls to the codebase.
user_invocable: true
metadata:
  category: i18n
  tags:
  - i18n
  - translations
  - wordplex
  - tms
  status: ready
  version: 1
---

# Update Translations

## What This Skill Does

1. Runs `node scripts/extract-i18n-keys.mjs --save` to statically scan all `t('key', 'default')` calls in `src/` and write `up-keys.json`
2. POSTs `up-keys.json` to the Wordplex TMS API to register any new keys in the grid
3. Deletes `up-keys.json` (it contains no secrets, but it's a build artifact)

## Steps

Run the following commands in order from the project root (`/Users/Phil/Work/Projects/uploader`):

```bash
node scripts/extract-i18n-keys.mjs --save
```

Then submit to TMS:

```bash
curl 'https://neo.wordplex.io/api/import/request-translations' \
  -H 'Content-Type: application/json' \
  -d @up-keys.json
```

Then clean up:

```bash
rm up-keys.json
```

## Notes

- The TMS grid UUID is `f7b2366e-fcb6-4f1a-8f23-8de48422989a`
- Keys already in the grid are ignored — only new keys are added
- After submitting, translators will add French, German, and other language translations in Wordplex
- The CDN (`https://i18n-fastly.ultrafast.io`) serves the translations once published
