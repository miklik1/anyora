"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";

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
          <nav>
            <ul className="px-1 flex">
              <li>
                <Link
                  href="/poradenstvi"
                  className={`${
                    pathname.startsWith("/poradenstvi") ? "font-semibold" : ""
                  } mr-8`}
                >
                  Nutriční poradenství
                </Link>
              </li>
              <li>
                <a href="https://d66a07-f0.myshopify.com/" target="_blank">
                  <div className="flex">
                    E-Shop
                    <Image
                      className="ml-2"
                      src="/icons/outside-link.svg"
                      alt="outside link icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBarMain;
