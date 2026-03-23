type Listener<T> = (state: T, prevState: T) => void;
export declare class Store<T extends object> {
    private state;
    private listeners;
    private _notifying;
    private _pendingState;
    constructor(initialState: T);
    getState(): T;
    setState(partial: Partial<T>): void;
    subscribe(listener: Listener<T>): () => void;
    destroy(): void;
}
export {};
//# sourceMappingURL=store.d.ts.map