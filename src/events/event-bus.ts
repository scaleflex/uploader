type Handler<T = unknown> = (payload: T) => void;

export class EventBus<EventMap extends {} = Record<string, unknown>> {
  private handlers = new Map<keyof EventMap, Set<Handler<any>>>();

  on<K extends keyof EventMap>(event: K, handler: Handler<EventMap[K]>): void {
    let set = this.handlers.get(event);
    if (!set) {
      set = new Set();
      this.handlers.set(event, set);
    }
    set.add(handler);
  }

  off<K extends keyof EventMap>(event: K, handler: Handler<EventMap[K]>): void {
    this.handlers.get(event)?.delete(handler);
  }

  emit<K extends keyof EventMap>(event: K, payload: EventMap[K]): void {
    this.handlers.get(event)?.forEach((handler) => handler(payload));
  }

  destroy(): void {
    this.handlers.clear();
  }
}

// Internal event names and payload map (spec §13.3)
export interface InternalEventMap {
  'drop-zone-enter': void;
  'drop-zone-leave': void;
  'drop-zone-drop': { files: File[] };
  'file-item-remove': { fileId: string };
  'file-item-retry': { fileId: string };
  'source-pill-click': { source: string };
  'upload-more': void;
  'clear-all': void;
}

export const InternalEvents = {
  DROP_ZONE_ENTER: 'drop-zone-enter',
  DROP_ZONE_LEAVE: 'drop-zone-leave',
  DROP_ZONE_DROP: 'drop-zone-drop',
  FILE_ITEM_REMOVE: 'file-item-remove',
  FILE_ITEM_RETRY: 'file-item-retry',
  SOURCE_PILL_CLICK: 'source-pill-click',
  UPLOAD_MORE: 'upload-more',
  CLEAR_ALL: 'clear-all',
} as const satisfies Record<string, keyof InternalEventMap>;
