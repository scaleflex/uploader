import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { Store } from '../store/store';
import type { UploaderState } from '../store/store.types';

export class StoreController implements ReactiveController {
  private host: ReactiveControllerHost;
  private store: Store<UploaderState>;
  private unsubscribe?: () => void;

  constructor(host: ReactiveControllerHost, store: Store<UploaderState>) {
    this.host = host;
    this.store = store;
    host.addController(this);
  }

  get state(): UploaderState {
    return this.store.getState();
  }

  setState(partial: Partial<UploaderState>): void {
    this.store.setState(partial);
  }

  hostConnected(): void {
    this.unsubscribe = this.store.subscribe(() => {
      this.host.requestUpdate();
    });
  }

  hostDisconnected(): void {
    this.unsubscribe?.();
  }
}
