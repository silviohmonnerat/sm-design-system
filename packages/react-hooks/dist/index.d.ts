declare function useIsMobile(): boolean;

declare function useMediaQuery(query: string): boolean;

declare function useDebounce<T>(value: T, delay?: number): T;

export { useDebounce, useIsMobile, useMediaQuery };
