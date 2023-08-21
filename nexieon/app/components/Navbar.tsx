"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  let [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <>
      <div
        className={`top-0 w-full p-3 lg:p-3 absolute lg:bg-transparent bg-white z-20`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link
            href="/"
            className="hidden items-center font-display text-3xl text-white font-semibold lg:flex"
          >
            <Image
              src="/LogoFullColorv2.png"
              alt="Nexieon Logo"
              width={200}
              height={200}
              className="rounded-sm mr-4"
            ></Image>
          </Link>

          <Link href="/" className="lg:hidden block">
            <Image
              src="/LogoIconFullColor.png"
              alt="Nexieon Logo"
              width={35}
              height={0}
              className="rounded-sm mr-4"
            ></Image>
          </Link>

          <div
            className="hidden lg:block"
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              gap: "1.75rem",
            }}
          >
            <div className="hidden lg:block">
              <Link
                href={"/"}
                className="p-2 text-sm sm:p-4 hover-underline-animation text-white"
                style={{ letterSpacing: "1.2", lineHeight: "1.8" }}
              >
                Home
              </Link>
            </div>
            <div className="hidden lg:block">
              <Link
                href={"/work"}
                className="p-2 text-sm sm:p-4 hover-underline-animation text-white"
                style={{ letterSpacing: "1.2", lineHeight: "1.8" }}
              >
                Examples
              </Link>
            </div>
            <div className="hidden lg:block">
              <Link
                href={"/about"}
                className="p-2 text-sm sm:p-4 hover-underline-animation text-white"
                style={{ letterSpacing: "1.2", lineHeight: "1.8" }}
              >
                About
              </Link>
            </div>

            <div className="hidden lg:block">
              <Link
                href={"/contact"}
                className="p-2 text-sm sm:px-6 sm:py-3  font-semibold link-nav-highlighted"
                style={{ letterSpacing: "1.2", lineHeight: "1.8" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="block lg:hidden">
            <button
              className="icon-btn"
              style={{ transition: `transform 0.75s` }}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              {mobileDropdownOpen ? (
                <FaTimes size={"20"} color="black" />
              ) : (
                <FaBars size={"20"} color="black" />
              )}
            </button>
          </div>
          <div
            className={`block lg:hidden w-full absolute bg-white left-0 h-screen p-4`}
            style={{
              transform: `translateY(${mobileDropdownOpen ? `54%` : `-100%`})`,
              transition: `transform 0.75s`,
            }}
          >
            <div className="w-full mb-nav-item text-2xl">
              <Link
                onClick={() => setMobileDropdownOpen(false)}
                href={"/"}
                className="p-2 text-sm sm:p-4 hover-underline-animation text-black"
                style={{ letterSpacing: "1.2", lineHeight: "1.8" }}
              >
                Home
              </Link>
            </div>
            <div className="w-full mb-nav-item">
              <Link
                onClick={() => setMobileDropdownOpen(false)}
                href={"/work"}
                className="p-2 text-sm sm:p-4 hover-underline-animation text-black"
                style={{ letterSpacing: "1.2", lineHeight: "1.8" }}
              >
                Examples
              </Link>
            </div>
            <div className="w-full mb-nav-item">
              <Link
                onClick={() => setMobileDropdownOpen(false)}
                href={"/about"}
                className="p-2 text-sm sm:p-4 hover-underline-animation text-black"
                style={{ letterSpacing: "1.2", lineHeight: "1.8" }}
              >
                About
              </Link>
            </div>
            <div className="w-full mb-nav-item">
              <Link
                onClick={() => setMobileDropdownOpen(false)}
                href={"/contact"}
                className="p-2 text-sm sm:p-4 hover-underline-animation text-black"
                style={{ letterSpacing: "1.2", lineHeight: "1.8" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
