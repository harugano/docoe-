"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trash2, Leaf, BarChart2, Info, ShoppingBag, BookOpen } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "ホーム" },
  { href: "/record/waste", icon: Trash2, label: "ごみ" },
  { href: "/record/eco", icon: Leaf, label: "エコ" },
  { href: "/record/purchase", icon: ShoppingBag, label: "買い物" },
  { href: "/budget", icon: BookOpen, label: "家計簿" },
  { href: "/history", icon: BarChart2, label: "履歴" },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#ede8dc] shadow-[0_-2px_12px_rgba(26,71,49,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="max-w-md mx-auto flex">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = href === "/"
            ? pathname === "/"
            : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 text-[9px] font-medium transition-colors min-h-[52px] ${
                active ? "text-[#2d6a4f]" : "text-[#8aaa8a] hover:text-[#52b788]"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={active ? 2.2 : 1.6}
                className={active ? "text-[#2d6a4f]" : ""}
              />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
