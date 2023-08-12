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
          playsInline
          autoPlay
          loop
          muted
          src="./colors1.mp4"
          className="h-[100vh] w-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className={"text-center"}>
            <div
              className={
                "text-6xl md:text-7xl lg:text-8xl font-bold p-6 fadeInAnim"
              }
            >
              <h2>Software for your comfort.</h2>
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

      <section className="bg-white">
        <section className="mx-auto sm:w-[90%] flex overflow-x-scroll sm:overflow-x-auto items-center sm:grid md:grid-cols-2 xl:grid-cols-4 gap-8 py-14 px-6">
          <div className="bg-lightmode-gray h-[20rem] p-5 rounded-xl flex flex-col justify-center items-center min-w-[26rem] sm:min-w-fit ">
            <svg
              viewBox="0 0 24 24"
              fill="#1360f0"
              height="3.5em"
              width="3.5em"
              className="mb-4"
            >
              <path d="M21.809 5.524L12.806.179l-.013-.007.078-.045h-.166a1.282 1.282 0 00-1.196.043l-.699.403-8.604 4.954a1.285 1.285 0 00-.644 1.113v10.718c0 .46.245.884.644 1.113l9.304 5.357c.402.232.898.228 1.297-.009l9.002-5.345c.39-.231.629-.651.629-1.105V6.628c0-.453-.239-.873-.629-1.104zm-19.282.559L11.843.719a.642.642 0 01.636.012l9.002 5.345a.638.638 0 01.207.203l-4.543 2.555-4.498-2.7a.963.963 0 00-.968-.014L6.83 8.848 2.287 6.329a.644.644 0 01.24-.246zm14.13 8.293l-4.496-2.492V6.641a.32.32 0 01.155.045l4.341 2.605v5.085zm-4.763-1.906l4.692 2.601-4.431 2.659-4.648-2.615a.317.317 0 01-.115-.112l4.502-2.533zm-.064 10.802l-9.304-5.357a.643.643 0 01-.322-.557V7.018L6.7 9.51v5.324c0 .348.188.669.491.84l4.811 2.706.157.088v4.887a.637.637 0 01-.329-.083z" />
            </svg>
            <h1 className="text-[#1360f0] text-3xl font-bold ">Fully Custom</h1>
            <p className="text-center mx-10 mt-5 text-black">
              Tailored solutions, covering backend development to frontend
              design, empowering you to truly make it your own.
            </p>
          </div>

          <div className="bg-lightmode-gray h-[20rem] rounded-xl flex flex-col justify-center items-center min-w-[26rem] sm:min-w-fit">
            <svg
              className="mb-4"
              fill="#1360f0"
              viewBox="0 0 16 16"
              height="3.5em"
              width="3.5em"
            >
              <path d="M6.5 13a6.474 6.474 0 003.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.008 1.008 0 00-.115-.1A6.471 6.471 0 0013 6.5 6.502 6.502 0 006.5 0a6.5 6.5 0 100 13zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018z" />
            </svg>
            <h1 className="text-[#1360f0] text-3xl font-bold ">SEO</h1>
            <p className="text-center mx-10 mt-5 text-black">
              Meticulously crafted websites, following industry best practices
              for high search engine rankings and increased web traffic.
            </p>
          </div>

          <div className="bg-lightmode-gray h-[20rem] rounded-xl flex flex-col justify-center items-center min-w-[26rem] sm:min-w-fit">
            <svg
              fill="#1360f0"
              viewBox="0 0 16 16"
              height="3.5em"
              width="3.5em"
              className="mb-4"
            >
              <path d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z" />
            </svg>
            <h1 className="text-[#1360f0] text-3xl font-bold ">Fast</h1>
            <p className="text-center mx-10 mt-5 text-black">
              Using cutting-edge technology, we build lightning-fast websites
              for unparalleled user experiences.
            </p>
          </div>
          <div className="bg-lightmode-gray h-[20rem] rounded-xl flex flex-col justify-center items-center min-w-[26rem] sm:min-w-fit">
            <svg
              viewBox="0 0 512 512"
              fill="#1360f0"
              height="3.5em"
              width="3.5em"
              className="mb-4"
            >
              <path d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2V128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-18.7L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1l-91.2 78.2c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c8.8 0 16.8 3.6 22.6 9.3l.1.1zM0 304c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zm48 112v48h48c0-26.5-21.5-48-48-48zm48-112H48v48c26.5 0 48-21.5 48-48zm368 112c-26.5 0-48 21.5-48 48h48v-48zm-48-112c0 26.5 21.5 48 48 48v-48h-48zm-96 80c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z" />
            </svg>
            <h1 className="text-[#1360f0] text-3xl font-bold ">
              Cost Effective
            </h1>
            <p className="text-center mx-10 mt-5 text-black">
              Proudly offering cost-effective services at competitive prices, so
              you can focus on what truly matters for your success.
            </p>
          </div>
          <div className="bg-lightmode-gray h-[20rem] rounded-xl flex flex-col justify-center items-center min-w-[26rem] sm:min-w-fit">
            <svg
              className="mb-4"
              fill="none"
              stroke="#1360f0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="3.5em"
              width="3.5em"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M4 4 H20 A1 1 0 0 1 21 5 V15 A1 1 0 0 1 20 16 H4 A1 1 0 0 1 3 15 V5 A1 1 0 0 1 4 4 z" />
              <path d="M7 20h10M9 16v4M15 16v4M9 12V8M12 12v-1M15 12v-2M12 12v-1" />
            </svg>
            <h1 className="text-[#1360f0] text-3xl font-bold ">Analytics</h1>
            <p className="text-center mx-10 mt-5 text-black">
              Track analytics, optimize web performance with our advanced tools
              and expertise for peak digital efficiency.
            </p>
          </div>

          <div className="bg-lightmode-gray h-[20rem] rounded-xl flex flex-col justify-center items-center min-w-[26rem] sm:min-w-fit">
            <svg
              viewBox="0 0 24 24"
              fill="#1360f0"
              height="3.5em"
              width="3.5em"
              className="mb-4"
            >
              <path d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7H12z" />
            </svg>
            <h1 className="text-[#1360f0] text-3xl font-bold">Hosting</h1>
            <p className="text-center mx-10 mt-5 text-black">
              Seamless deployment, expert hosting, and integration into the vast
              internet – we take care of it all.
            </p>
          </div>

          <div className="bg-lightmode-gray h-[20rem] rounded-xl flex flex-col justify-center items-center min-w-[26rem] sm:min-w-fit">
            <svg
              viewBox="0 0 512 512"
              fill="#1360f0"
              height="3.5em"
              width="3.5em"
              className="mb-4"
            >
              <path d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2h192c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312v144c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512c70.7 0 128-57.3 128-128s-57.3-128-128-128S0 313.3 0 384s57.3 128 128 128z" />
            </svg>
            <h1 className="text-[#1360f0] text-3xl font-bold">Modern Design</h1>
            <p className="text-center mx-10 mt-5 text-black">
              Modern design practices for a contemporary online presence and
              exceptional user experience.
            </p>
          </div>

          <div className="bg-lightmode-gray h-[20rem] rounded-xl flex flex-col justify-center items-center min-w-[26rem] sm:min-w-fit">
            <svg
              viewBox="0 0 24 24"
              fill="#1360f0"
              height="3.5em"
              width="3.5em"
              className="mb-4"
            >
              <path d="M21 16V4H3v12h18m0-14a2 2 0 012 2v12a2 2 0 01-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 01-2-2V4c0-1.11.89-2 2-2h18M5 6h9v5H5V6m10 0h4v2h-4V6m4 3v5h-4V9h4M5 12h4v2H5v-2m5 0h4v2h-4v-2z" />
            </svg>
            <h1 className="text-[#1360f0] text-3xl font-bold">
              Owner dashboard
            </h1>
            <p className="text-center mx-10 mt-5 text-black">
              Custom owner's dashboard for effortless site updates and tracking.
            </p>
          </div>
        </section>
      </section>

      <article className="bg-white py-20 px-10 lg:px-[15%]">
        <div className="w-full lg:w-3/4 fadeInAnim">
          <h1 className="text-black text-2xl lg:text-4xl font-extrabold mb-7 flex items-center ">
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
