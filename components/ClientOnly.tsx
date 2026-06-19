"use client";

import { useEffect, useState } from "react";

/**
 * ClientOnly
 * -----------
 * Renders children only after the component has mounted in the
 * browser. This is the App-Router-safe way to skip SSR for a
 * specific subtree without needing next/dynamic inside a Server
 * Component like layout.tsx.
 */
export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return <>{children}</>;
}
