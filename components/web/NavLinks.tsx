"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Auth - Blog",
    href: "/blog",
  },
  {
    name: "Auth - Dashboard",
    href: "/dashboard",
  },
  {
    name: "Auth - About",
    href: "/about",
  },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4 font-medium text-lg">
      {items.map((item) => (
        <Link
          className={`${pathname === item.href ? "text-blue-500" : ""}`}
          key={item.name}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
