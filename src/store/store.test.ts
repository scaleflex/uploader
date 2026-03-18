import { Store } from './store';

describe('Store', () => {
  it('initializes with the given state', () => {
    const store = new Store({ count: 0 });
    expect(store.getState()).toEqual({ count: 0 });
  });

  it('updates state with setState', () => {
    const store = new Store({ a: 1, b: 2 });
    store.setState({ a: 10 });
    expect(store.getState()).toEqual({ a: 10, b: 2 });
  });

  it('notifies subscribers on setState', () => {
    const store = new Store({ count: 0 });
    const listener = vi.fn();
    store.subscribe(listener);

    store.setState({ count: 1 });
    expect(listener).toHaveBeenCalledWith({ count: 1 }, { count: 0 });
  });

  it('supports multiple subscribers', () => {
    const store = new Store({ x: 0 });
    const a = vi.fn();
    const b = vi.fn();
    store.subscribe(a);
    store.subscribe(b);

    store.setState({ x: 5 });
    expect(a).toHaveBeenCalledOnce();
    expect(b).toHaveBeenCalledOnce();
  });

  it('unsubscribes via returned function', () => {
    const store = new Store({ x: 0 });
    const listener = vi.fn();
    const unsub = store.subscribe(listener);

    unsub();
    store.setState({ x: 1 });
    expect(listener).not.toHaveBeenCalled();
  });

  it('handles re-entrant setState by batching', () => {
    const store = new Store({ a: 0, b: 0 });
    const calls: Array<{ a: number; b: number }> = [];

    store.subscribe((state) => {
      calls.push({ ...state });
      // Re-entrant call during notification
      if (state.a === 1 && state.b === 0) {
        store.setState({ b: 10 });
      }
    });

    store.setState({ a: 1 });

    // First notification: a=1, b=0
    // Second notification (from batched re-entrant): a=1, b=10
    expect(calls).toEqual([
      { a: 1, b: 0 },
      { a: 1, b: 10 },
    ]);
    expect(store.getState()).toEqual({ a: 1, b: 10 });
  });

  it('merges multiple re-entrant setStates', () => {
    const store = new Store({ a: 0, b: 0, c: 0 });

    store.subscribe((state) => {
      if (state.a === 1 && state.b === 0) {
        store.setState({ b: 2 });
        store.setState({ c: 3 });
      }
    });

    store.setState({ a: 1 });
    expect(store.getState()).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('destroy clears all listeners', () => {
    const store = new Store({ x: 0 });
    const listener = vi.fn();
    store.subscribe(listener);

    store.destroy();
    store.setState({ x: 1 });
    expect(listener).not.toHaveBeenCalled();
  });
});
