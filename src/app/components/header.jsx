"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBar from "./navBar";
import Sign from "./Sign";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isSignOpen, setIsSignOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/program" },
    { name: "Advocacy", href: "/advocacy" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="font-mont fixed z-[1000] bg-[#F5F5F5] w-full text-[#3360A0] flex py-5 justify-between items-center xl:px-15 px-5">
      <Link href="/">
         <Image src='/cclclogo.svg' alt='logo'width={160} height={64} className='md:w-[160px] md:h-[60px] w-[120px] h-[50px]'/>
      </Link>

      <nav className="lg:block hidden">
        <ul className="flex gap-10 text-lg font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={
                pathname === link.href ? "text-[#4165bb] font-bold" : ""
              }
            >
              <li className="hover:text-[#3a6de5]">{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="flex items-center md:gap-6 gap-3">
        <div>
          <button>En</button>
          <button>Fr</button>
        </div>
        <div className="hidden lg:flex gap-2.5">
          <button
            onClick={() => setIsSignOpen(true)}
            className="py-3 px-3.5 border-[#0F4082] hover:bg-[#0f4082] hover:text-white border rounded-2xl font-medium text-lg"
          >
            Sign In
          </button>
          <button className="text-white py-3 px-3 rounded-2xl hover:bg-[#a57d45] bg-[#AD8E63]">
            Donate
          </button>
        </div>
        <Image
          src="/menu.svg"
          alt="menu"
          width={40}
          height={40}
          onClick={() => setToggle(true)}
          className="lg:hidden block cursor-pointer"
        />
      </div>

      {toggle && <NavBar handleToggleOff={() => setToggle(false)} />}
      {isSignOpen && <Sign setIsOpenProp={setIsSignOpen} />}
    </header>
  );
};

export default Header;
