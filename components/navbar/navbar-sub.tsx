"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavLink } from "./navlink-sub";
const navigation = [
  { name: "Domů", href: "#domu", sectionId: "domu" },
  { name: "Služby", href: "#sluzby", sectionId: "sluzby" },
  { name: "O Mně", href: "#omne", sectionId: "omne" },
  { name: "Reference", href: "#reference", sectionId: "reference" },
  { name: "Kontakt", href: "#kontakt", sectionId: "kontakt" },
];
const NavbarSub = ({ activeSection }) => {
  const [active, setActive] = useState("Domů");

  return (
    <div className="sticky top-20 z-50 flex justify-center lg:justify-center px-3 lg:py-2">
      <div className="flex max-w-xs rounded-full glass py-0 shadow-2xl border-2 backdrop-blur md:max-w-4xl">
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
            <div className="menu  menu-md z-[999] navbar-center mx-10">
              {navigation.map((item, index) => (
                <nav key={index} className="menu menu-horizontal px-1">
                  {/* <Link
                href={item.href}
                className={`btn btn-ghost rounded-full  text-sm font-light ${
                  active === item.name ? "bg-yellow-500" : ""
                }`}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </Link> */}
                  <NavLink
                    key={index}
                    href={item.href}
                    text={item.name}
                    sectionId={item.sectionId}
                    activeSection={activeSection}
                  />
                </nav>
              ))}
            </div>
            {/* <nav className="flex flex-col menu dropdown-content menu-md z-[20] mt-3 w-52 gap-2 rounded-box p-2 shadow bg-neutral-50">
              {navigation.map((item, index) => (
                // <Link
                //   key={index}
                //   href={item.href}
                //   className={`text-sm font-light p-2 pl-4  rounded-badge ${
                //     active === item.name ? "bg-yellow-500" : ""
                //   }`}
                //   onClick={() => setActive(item.name)}
                // >
                //   {item.name}
                // </Link>
                <NavLink
                  key={index}
                  href={item.href}
                  text={item.name}
                  sectionId={item.sectionId}
                  activeSection={activeSection}
                />
                //   href={item.href}
              ))}
            </nav> */}
          </div>
        </div>
        <div className="navbar-center mx-10 hidden lg:flex">
          {navigation.map((item, index) => (
            <nav key={index} className="menu menu-horizontal px-1">
              {/* <Link
                href={item.href}
                className={`btn btn-ghost rounded-full  text-sm font-light ${
                  active === item.name ? "bg-yellow-500" : ""
                }`}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </Link> */}
              <NavLink
                key={index}
                href={item.href}
                text={item.name}
                sectionId={item.sectionId}
                activeSection={activeSection}
              />
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarSub;
