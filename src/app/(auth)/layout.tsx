"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState("")
  const pathname = usePathname();

  return (
    <div>
      
      <div className="m-4 bg-amber-100 w-48 text-black">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>

      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            key={link.name}
            href={link.href}
            className={isActive ? "text-blue-500 mr-4" : "font-bold mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
