"use client";

import { useEffect, useState } from "react";

/**
 * useWebGLSupport
 * -----------------
 * Tries to create a throwaway WebGL context on a detached canvas.
 * If the browser/device can't do it (old hardware, WebGL disabled,
 * certain in-app browsers), we get `false` back and the caller can
 * render a CSS-only fallback instead of crashing on a blank Canvas.
 */
export function useWebGLSupport() {
  const [isSupported, setIsSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setIsSupported(!!gl);
    } catch {
      setIsSupported(false);
    }
  }, []);

  return isSupported; // null while checking, then true/false
}
