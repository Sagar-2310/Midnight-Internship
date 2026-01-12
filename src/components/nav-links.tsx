// src/components/nav-links.tsx

import Link from "next/link";

export const NavLinks = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};