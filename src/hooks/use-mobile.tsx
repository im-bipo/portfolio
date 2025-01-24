"use client";
import * as React from "react";

export function useCurrentWidth() {
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}
