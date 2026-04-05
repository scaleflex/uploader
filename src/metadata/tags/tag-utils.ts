import type { TagOption } from '../schema/schema.types';

export function isSameTag(a: TagOption, b: TagOption): boolean {
  return a.label?.trim().toLowerCase() === b.label?.trim().toLowerCase();
}

export function normalizeLabel(label: string): string {
  return label.trim().replace(/\s+/g, ' ');
}

export function normalizeValue(label: string): string {
  return normalizeLabel(label).replace(/\s/g, '-');
}

export function createTag(label: string): TagOption {
  return { label: normalizeLabel(label), value: normalizeValue(label) };
}
