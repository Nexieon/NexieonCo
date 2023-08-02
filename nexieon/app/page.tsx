"use client";

import Image from "next/image";
import Carousel, { CarouselItem } from "./components/Carousel";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="relative ">
        <video
          autoPlay
          loop
          muted
          src="./colors1.mp4"
          className="h-[100vh] w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className={"text-center "}>
            <div className={"text-8xl md:text-9xl font-bold p-2 fadeInAnim"}>
              <h2>Built Software</h2>
            </div>

            <div className="fadeInAnim mt-14 gap-6 flex justify-center">
              <Link
                href="/contact"
                className=" text-white text-xl font-bold p-4 rounded-lg flex items-center gap-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.3em"
                  width="1.3em"
                >
                  <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
                </svg>
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Carousel>
        <CarouselItem>
          <div
            className="w-1/2 mx-auto md: grid md:grid-cols-2"
            onClick={() => window.open("/work#studyai", "_blank")}
          >
            <div className="p-3 whitespace-pre-wrap">
              <Image
                src={"/previews/studyailogo.png"}
                alt="StudyAi Logo"
                width={150}
                height={75}
              />
              <p className="text-white mt-3">
                Study smarter now with your personal AI study buddy.
              </p>
              {/*<button className = 'btn-main-reverse w-full lg:w-auto my-auto' >See More</button>*/}
            </div>
            <div className="hidden md:block">
              <Image
                src={"/previews/studyaipreview.png"}
                alt="StudyAI Preview"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className="w-1/2 mx-auto md: grid md:grid-cols-2"
            onClick={() => window.open("/work#redlane", "_blank")}
          >
            <div className="p-3 whitespace-pre-wrap">
              <Image
                src={"/previews/redlanemedialogo.png"}
                alt="Redlane Logo"
                width={300}
                height={150}
              />
              <p className="text-white mt-3">
                Devoted marketing designed in one place to perfect your image.
              </p>
              {/*<button className = 'btn-main-reverse w-full lg:w-auto my-auto' >See More</button>*/}
            </div>
            <div className="hidden md:block">
              <Image
                src={"/previews/redlanemediapreview.png"}
                alt="Redlanemedia Preview"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className="w-1/2 mx-auto md: grid md:grid-cols-2"
            onClick={() => window.open("/work#autoshine", "_blank")}
          >
            <div className="p-3 whitespace-pre-wrap">
              <Image
                src={"/previews/autoshinelogo.png"}
                alt="Autoshine Logo"
                width={150}
                height={75}
              />
              <p className="text-white mt-[-3rem]">
                Spend less time cleaning, more time enjoying.
              </p>
              {/*<button className = 'btn-main-reverse w-full lg:w-auto my-auto' >See More</button>*/}
            </div>
            <div className="hidden md:block">
              <Image
                src={"/previews/autoshinepreview.png"}
                alt="Autoshine Preview"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </CarouselItem>
      </Carousel>

      <article className="bg-white py-20 px-10 lg:px-[15%]">
        <div className="w-full lg:w-3/4 fadeInAnim">
          <h1 className="text-black text-2xl lg:text-4xl font-extrabold mb-7 flex items-center">
            Driven by excellence, fueled by passion
          </h1>
          {/* <div className = 'flex text-2xl lg:text-4xl font-extrabold mb-7 gap-2'>
            <h1 className = 'text-black'>Driven by</h1><h1 className = 'text-primary-blue'>excellence,</h1><h1 className = 'text-black'>fueled by </h1><h1 className = 'text-primary-blue'>passion</h1>
          </div> */}

          <p className="text-black mt-12">
            Nexieon is a software agency focused on delivering what our partners
            desire, using the greatest technologies and innovations known. With
            a relentless commitment to quality, we ensure that the ambitious
            businesses we partner up with recieve the best cutting edge
            solutions. Acheiving our partner's full potential through technology
            will always be our main priority.
          </p>

          <button
            className="w-full lg:w-auto px-8 py-5 btn-main mt-12"
            onClick={() => router.push("/work")}
          >
            EXPLORE OUR WORK
          </button>
        </div>
      </article>

      <section className="flex lg:flex-row flex-col justify-between py-24 px-10 lg:px-[15%]">
        <div className="w-full lg:w-1/2 fadeInAnim">
          <h3 className="text-3xl mb-8 lg:text-left text-left font-bold lg:text-4xl">
            Want to work with us?
          </h3>
          <p className="lg:text-left text-left">
            Join the list of ambitious businesses that take it to the next
            level.
          </p>
        </div>
        <div className="w-full mt-8 lg:mt-0 lg:w-1/4 flex align-center fadeInAnim">
          <button
            className="btn-main-reverse w-full lg:w-auto my-auto"
            onClick={() => router.push("/contact")}
          >
            CONTACT US
          </button>
        </div>
      </section>
    </main>
  );
}
