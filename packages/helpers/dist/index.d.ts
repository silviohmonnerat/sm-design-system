declare function isDefined<T>(value: T | null | undefined): value is T;
declare function sleep(ms: number): Promise<void>;

export { isDefined, sleep };
