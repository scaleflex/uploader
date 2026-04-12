import { PublicEvents } from './public-events';

describe('PublicEvents', () => {
  it('exports 21 event constants', () => {
    expect(Object.keys(PublicEvents).length).toBe(21);
  });

  it('all values are prefixed with "sfx-"', () => {
    for (const value of Object.values(PublicEvents)) {
      expect(value).toMatch(/^sfx-/);
    }
  });

  it('contains expected core events', () => {
    expect(PublicEvents.FILE_ADDED).toBe('sfx-file-added');
    expect(PublicEvents.FILE_REMOVED).toBe('sfx-file-removed');
    expect(PublicEvents.FILE_REJECTED).toBe('sfx-file-rejected');
    expect(PublicEvents.UPLOAD_STARTED).toBe('sfx-upload-started');
    expect(PublicEvents.UPLOAD_PROGRESS).toBe('sfx-upload-progress');
    expect(PublicEvents.UPLOAD_COMPLETE).toBe('sfx-upload-complete');
    expect(PublicEvents.UPLOAD_ERROR).toBe('sfx-upload-error');
    expect(PublicEvents.ALL_COMPLETE).toBe('sfx-all-complete');
    expect(PublicEvents.OPEN).toBe('sfx-open');
    expect(PublicEvents.CLOSE).toBe('sfx-close');
    expect(PublicEvents.CANCEL).toBe('sfx-cancel');
  });

  it('values are unique', () => {
    const values = Object.values(PublicEvents);
    expect(new Set(values).size).toBe(values.length);
  });
});
