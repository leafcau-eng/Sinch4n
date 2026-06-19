"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }

    function handleHoverCheck(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        'a, button, [data-cursor-hover="true"]'
      );
      setIsHoveringInteractive(isInteractive);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleHoverCheck);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleHoverCheck);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#00f5ff",
          boxShadow: "0 0 15px #00f5ff, 0 0 30px #00f5ff",
          mixBlendMode: "screen",
        }}
      />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHoveringInteractive ? 60 : 40,
          height: isHoveringInteractive ? 60 : 40,
          borderColor: isHoveringInteractive
            ? "rgba(0,245,255,0.8)"
            : "rgba(0,245,255,0.4)",
        }}
        transition={{ width: { duration: 0.3 }, height: { duration: 0.3 } }}
      />
    </>
  );
}
