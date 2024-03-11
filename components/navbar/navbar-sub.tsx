"use client";

import React, { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Domů", href: "#domu" },
  { name: "Služby", href: "#sluzby" },
  { name: "O Mně", href: "#omne" },
  { name: "Reference", href: "#reference" },
  { name: "Kontakt", href: "#kontakt" },
];
const NavbarSub = () => {
  const [active, setActive] = useState("Domů");

  return (
    <div className="sticky top-20 z-50 flex justify-start lg:justify-center px-3 lg:py-2">
      <div className="flex max-w-xs rounded-full glass py-0 shadow-2xl outline outline-base-content/5 backdrop-blur md:max-w-4xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu dropdown-content menu-md z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 shadow">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center mx-10 hidden lg:flex">
          {navigation.map((item, index) => (
            <nav key={index} className="menu menu-horizontal px-1">
              <Link
                href={item.href}
                className={`btn btn-ghost rounded-full  text-sm font-light ${
                  active === item.name ? "bg-base-100" : ""
                }`}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </Link>
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarSub;
