import { ReactiveController, ReactiveControllerHost } from 'lit';
import { Store } from '../store/store';
import { UploaderState } from '../store/store.types';
export declare class StoreController implements ReactiveController {
    private host;
    private store;
    private unsubscribe?;
    constructor(host: ReactiveControllerHost, store: Store<UploaderState>);
    get state(): UploaderState;
    setState(partial: Partial<UploaderState>): void;
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=store.controller.d.ts.map