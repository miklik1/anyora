"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const NavBarMain = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 shadow-lg">
      <div className="navbar bg-white flex justify-center">
        <div className="container flex justify-between">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Anyora
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/poradenstvi"
                className={`${pathname.startsWith("/poradenstvi") ? "underline" : ""}`}
              >
                Nutriční poradenství
              </Link>
            </li>
          </ul>

        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarMain;
