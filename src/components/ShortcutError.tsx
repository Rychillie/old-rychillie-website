import { useState, useEffect } from "react";
import Link from "next/link";

export default function ShortcutError() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return (
        <Link href="/">
          <a>Tap to go home →</a>
        </Link>
      );
    }

    return (
      <Link href="/">
        <a>
          Press <kbd>G</kbd> <kbd>H</kbd> to go home →
        </a>
      </Link>
    );
  }

  return <div />;
}
