"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  let router = useRouter();

  return (
    <>
      <footer className={`w-full p-5 py-[5rem]`}>
        <div className="w-full lg:w-3/4 mx-auto ">
          <div className="mx-5 h-16 w-full lg:w-1/3">
            <div>
              <Link
                href="/"
                className="flex items-center font-display text-2xl"
              >
                <Image
                  src="/LogoFullColorv2.png"
                  alt="Nexieon Logo"
                  width={200}
                  height={0}
                  className="mr-2 rounded-sm"
                ></Image>
              </Link>
            </div>
            <div>
              <p className="lg:text-left text-left text-sm my-8">
                Utilizing our expertise and skillsets to push ambitious
                businesses to take that first step.
              </p>
            </div>
            <section className={"grid grid-cols-4 py-5 gap-0"}>
              <button
                className="icon-btn"
                onClick={() =>
                  window.open("https://www.instagram.com/nexieon", "_blank")
                }
              >
                <FaInstagram size={"20"} />
              </button>
              <button
                className="icon-btn"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/people/Nexieon-Co/100092650727207/",
                    "_blank"
                  )
                }
              >
                <FaFacebook size={"20"} />
              </button>
              <button
                className="icon-btn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/nexieon-co-146506277/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin size={"20"} />
              </button>
              <button
                className="icon-btn"
                onClick={() =>
                  window.open("mailto:nexieonco@gmail.com", "_blank")
                }
              >
                <FaEnvelope size={"20"} />
              </button>
            </section>
            <div>
              <hr
                className="my-5"
                style={{ borderTop: "var(--primary) 2px solid", width: "75vw" }}
              />
              <p className="lg:text-left text-left text-sm py-8">
                Offical Showcase of Nexieon Co. - 2025
              </p>
            </div>
            <div className="my-[5rem] flex items-center"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
