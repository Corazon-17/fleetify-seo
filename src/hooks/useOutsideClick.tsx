import { useRef, useEffect } from "react";

/**
 * Usage: similar to useRef()
 */
export const useOutsideClick = (callback: () => void, exceptionRefs?: any[]) => {
  const ref = useRef<any>();

  useEffect(() => {
    const handleClick = (e: any) => {
      const isExceptionElementClicked = exceptionRefs?.some((ref) =>
        ref.current.contains(e.target)
      );

      if (ref.current && !ref.current.contains(e.target) && !isExceptionElementClicked) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, exceptionRefs, callback]);

  return ref;
};
