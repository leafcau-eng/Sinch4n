"use client";

import { useEffect, useState } from "react";

export function useMouseParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x: normalizedX, y: normalizedY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mouse;
}
