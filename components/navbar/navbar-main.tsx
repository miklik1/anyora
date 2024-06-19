"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const navigation_main = [
  { name: "Nutriční poradenství", href: "/" },
  {
    name: "E-Shop",
    href: "https://d66a07-f0.myshopify.com/",
  },
];

const navigation_sub = [
  { name: "Domů", href: "#domu" },
  { name: "Služby", href: "#sluzby" },
  { name: "O Mně", href: "#omne" },
  { name: "Reference", href: "#reference" },
  { name: "Kontakt", href: "#kontakt" },
];

const NavBarMain = () => {
  const [active, setActive] = useState("Nutriční poradenství");
  const pathname = usePathname();

  useEffect(() => {
    const activeItem = navigation_main.find((item) => pathname === item.href);
    setActive(activeItem ? activeItem.name : "");
  }, [pathname]);

  return (
    <div className="max-w-full drawer z-50 drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full z-10 flex flex-row justify-center items-center navbar bg-white shadow-md">
          <div className="container">
            <div className="flex-1 py-1">
              <Image
                className="w-[200px]"
                src="/icons/logo.svg"
                alt="logo"
                width={320}
                height={130}
              />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-base">
                <li>
                  <Link
                    href="/poradenstvi"
                    className={`${
                      active === navigation_main[0].name ? "font-semibold" : ""
                    } mr-8`}
                  >
                    {navigation_main[0].name}
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
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full flex-row justify-center items-center navbar bg-slate-100 hidden lg:flex">
          <div className="container flex-row justify-center items-center">
            <div>
              <ul className="menu menu-horizontal justify-center">
                <>
                  {active === navigation_main[0].name &&
                    navigation_sub.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                </>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side overflow-hidden z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white">
          <>
            {active === navigation_main[0].name &&
              navigation_sub.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
          </>
          <div className="divider"></div>
          <li>
            <Link
              href="/poradenstvi"
              className={`${
                active === navigation_main[0].name ? "font-semibold" : ""
              }`}
            >
              {navigation_main[0].name}
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
      </div>
    </div>
  );
};

export default NavBarMain;
