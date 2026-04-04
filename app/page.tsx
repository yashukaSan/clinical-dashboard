"use client";

import MobileView from "./assets/devices/mobile";
import { useState, useEffect } from "react";

export default function Home() {
  const [width, setWidth] = useState<number>(0);
  const [mobileDisplay, setMobileDisplay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);
      // Updated logic: checking the value directly here ensures it's accurate
      setMobileDisplay(currentWidth < 600);
    };

    // Set initial state on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Wrapped in a Fragment (<> </>) to return a single parent element
  return (
    <>
      {mobileDisplay && <MobileView />}
    </>
  );
}
