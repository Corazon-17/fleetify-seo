"use client";

import { company, features, menus } from "@/constants";
import { useOutsideClick } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  const menuButton = useRef<any>();
  const menuItems = useOutsideClick(() => setToggle(false), [menuButton]);

  return (
    <header className="flex justify-center sticky top-0 z-50 shadow bg-white">
      <div className="flex relative w-full max-w-7xl">
        <div className="flex w-full justify-between items-center px-4 py-2 z-50 bg-white">
          <Link href="/">
            <Image src="/images/fleetify.png" alt="logo" width="120" height="30" />
          </Link>
          <nav className="hidden md:flex text-custom-gray">
            {menus.map((menu, idx) => {
              if ([0, 2].includes(idx)) {
                const items = idx === 0 ? features : company;

                return (
                  <div key={`${menu}-${idx}`} className="flex relative group">
                    <button className="flex gap-1.5 px-4 py-2 group-hover:bg-custom-yellow group-hover:text-white rounded transition-colors duration-300">
                      {menu} <FaCaretDown className="text-2xl" />
                    </button>
                    <div className="hidden group-hover:flex flex-col absolute top-10 min-w-full bg-white shadow-xl divide-y">
                      {items.map((item, idx) => (
                        <Link
                          key={`${item}-${idx}`}
                          href="/"
                          className="text-start whitespace-nowrap px-4 py-2 hover:bg-custom-yellow hover:text-white  transition-colors duration-300"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <button
                    key={`${menu}-${idx}`}
                    className="px-4 py-2 rounded hover:bg-custom-yellow hover:text-white transition-colors duration-300"
                  >
                    {menu}
                  </button>
                );
              }
            })}
          </nav>
          <div className="hidden md:block">
            <button className="text-white bg-custom-red hover:scale-110 px-6 py-2 rounded-lg transition-all duration-300">
              Free Demo
            </button>
          </div>
          <button ref={menuButton} className="block md:hidden" onClick={() => setToggle(!toggle)}>
            <RxHamburgerMenu className="text-2xl text-custom-yellow" />
          </button>
        </div>
        <div
          ref={menuItems}
          className={`${
            toggle ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"
          } flex flex-col md:hidden z-40 absolute top-[3.25rem] w-full bg-white pb-4 duration-500 transition-all shadow`}
        >
          {menus.map((menu, idx) => {
            if ([0, 2].includes(idx)) {
              const items = idx === 0 ? features : company;

              return <DropdownMenu key={`${menu}-${idx}`} label={menu} items={items} />;
            } else {
              return (
                <Link key={`${menu}-${idx}`} href="/" className="py-1.5 text-center shadow-sm">
                  {menu}
                </Link>
              );
            }
          })}
          <Link href="/" className="bg-custom-red text-white text-center py-2 rounded-lg">
            Free Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

const DropdownMenu = ({ label, items }: { label: string; items: string[] }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const menuLabel = useRef<any>();
  const menuItems = useOutsideClick(() => setToggle(false), [menuLabel]);

  return (
    <div className="flex flex-col relative w-full group">
      <button
        ref={menuLabel}
        className="flex gap-1 w-full py-1.5 justify-center items-center shadow-sm"
        onClick={() => setToggle(!toggle)}
      >
        {label}{" "}
        <FaCaretDown
          className={`text-xl transition-all duration-500 ${toggle ? "-rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        ref={menuItems}
        className={`flex flex-col overflow-hidden bg-gray-100 transition-all duration-500 ${
          toggle ? "max-h-48" : "max-h-0"
        }`}
      >
        {items.map((feature, idx) => (
          <Link key={`${feature}-${idx} `} href="/" className="w-full text-center py-1.5 shadow-sm">
            {feature}
          </Link>
        ))}
      </div>
    </div>
  );
};
