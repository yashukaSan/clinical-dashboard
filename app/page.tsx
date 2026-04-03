"use client";

import {useState, useEffect} from 'react';

export default function Home() {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Clean up listener on unmount
      console.log(width);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
    </div>
  );
}
