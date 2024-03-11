"use client";

import React, { useState } from "react";

const navigation = [
  { name: "Domů", href: "domu" },
  { name: "Služby", href: "sluzby" },
  { name: "O Mně", href: "omne" },
  { name: "Reference", href: "reference" },
  { name: "Kontakt", href: "kontakt" },
];
const NavbarSub = () => {
  const [active, setActive] = useState("Domů");

  const handleNavigation = (item: { name: React.SetStateAction<string>; href: string; }) => {
    setActive(item.name);

    // Use smooth scrolling if desired
    const target = document.getElementById(item.href); // Remove leading hash
    if (target) {
      target.scrollIntoView();
    }
  };

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
                  <a
                    key={item.name}
                    href={`javascript:void(0);`} // Prevent default anchor behavior
                    onClick={() => handleNavigation(item)}
                    className=""
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center mx-10 hidden lg:flex">
          {navigation.map((item, index) => (
            <nav key={index} className="menu menu-horizontal px-1">
              <a
                key={item.name}
                href={`javascript:void(0);`} // Prevent default anchor behavior
                onClick={() => { handleNavigation(item); setActive(item.name)}}
                className={`btn btn-ghost rounded-full  text-sm font-light ${
                  active === item.name ? "bg-base-100" : ""
                }`}
              >
                {item.name}
              </a>
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarSub;
