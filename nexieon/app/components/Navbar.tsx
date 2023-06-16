"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
      <>
        <div
          className={`top-0 w-full p-6 absolute`}
        >
          <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                <Link href="/" className="flex items-center font-display text-2xl">
                    <Image
                        src="/LogoFullColorv2.png"
                        alt="Nexieon Logo"
                        width={175}
                        height={0}
                        className="mr-2 rounded-sm"
                    ></Image>
                </Link>
                <div style={{display: 'grid', gridTemplateColumns: "auto auto auto auto", gap: '1.75rem'}}>
                    <div className="hidden sm:block">
                        <Link
                            href={'/'}
                            className="p-2 text-sm sm:p-4 hover-underline-animation" style={{letterSpacing: '1.2', lineHeight: '1.8'}}
                        >
                            Home
                        </Link>
                        
                    </div>
                    <div className="hidden sm:block">
                        <Link
                            href={'/work'}
                            className="p-2 text-sm sm:p-4 hover-underline-animation" style={{letterSpacing: '1.2', lineHeight: '1.8'}}
                        >
                            Work
                        </Link>
                    </div>
                    <div className="hidden sm:block">
                        <Link
                            href={'/about'}
                            className="p-2 text-sm sm:p-4 hover-underline-animation" style={{letterSpacing: '1.2', lineHeight: '1.8'}}
                        >
                            About
                        </Link>
                    </div>
                    <div className="hidden sm:block">
                        <Link
                            href={'/contact'}
                            className="p-2 text-sm sm:p-4 link-nav-highlighted" style={{letterSpacing: '1.2', lineHeight: '1.8'}}
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