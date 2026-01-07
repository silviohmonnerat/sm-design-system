// src/use-mobile.ts
import * as React from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    void 0
  );
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/use-media-query.ts
import { useEffect as useEffect2, useState as useState2 } from "react";
function useMediaQuery(query) {
  const [value, setValue] = useState2(false);
  useEffect2(() => {
    function onChange(event) {
      setValue(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  return value;
}

// src/use-debounce.ts
import { useEffect as useEffect3, useState as useState3 } from "react";
function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState3(value);
  useEffect3(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
export {
  useDebounce,
  useIsMobile,
  useMediaQuery
};
