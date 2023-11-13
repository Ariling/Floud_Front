import { useState, useEffect } from "react";

export function useLoadingTime(delay) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
}
