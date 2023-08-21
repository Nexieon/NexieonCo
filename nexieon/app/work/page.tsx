"use client";
import previewImages from "../../data/previewimgs.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Examplebox from "../components/Examplebox";
import { useState } from "react";

const Work = () => {
  const router = useRouter();
  const [onImageViewerEabledFlag, setOnImageViewerEabledFlag] = useState(false);
  const [transferredIndex, setTransferredIndex] = useState<number>(1);
  const [imageCounter, setImageCounter] = useState(0);

  const handleFlagChange = (newFlag: boolean) => {
    setOnImageViewerEabledFlag(newFlag);
  };

  const handleChildPropSrcTransfer = (imageIndex: number) => {
    setTransferredIndex(imageIndex);
  };

  const decrementShowcaseImage = () => {
    if (imageCounter > 0) {
      setImageCounter(imageCounter - 1);
    }
  };

  const incrementShowcaseImage = () => {
    if (previewImages[transferredIndex].length - 1 !== imageCounter) {
      setImageCounter(imageCounter + 1);
    }
  };

  return (
    <div className="bg-darkmode-gray">
      <div
        className="flex h-[76vh] justify-center items-center flex-col"
        style={{
          background:
            "linear-gradient(180deg, rgba(25,25,25,0.6) 0%, rgba(255,255,255,0) 100%), url(./space.jpg)",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <h2 className="md:w-[55%] fadeInAnim text-5xl font-semibold">
          Explore our work
        </h2>
        <p className="md:w-[55%] fadeInAnim">
          Look through are cataglog of examples.
        </p>
      </div>
      <section className="flex flex-col lg:grid grid-cols-2 gap-10  px-[0.5rem] sm:px-[1rem] lg:px-[7.5rem] pt-[4rem] lg:pt-[8rem] bg-lightmode-gray">
        <Examplebox
          imgIndex={0}
          src={"/previews/autoshine/autoshinehome.png"}
          isLink={false}
          isPictures={true}
          name="autoshine"
          onImageViewerEnabled={handleFlagChange}
          onSrcTransfer={handleChildPropSrcTransfer}
        />
        <Examplebox
          imgIndex={1}
          src={"/previews/redlanemedia/redlanemediahome.png"}
          isLink={true}
          isPictures={true}
          name="redlanemedia"
          link="https://redlanemedia.webflow.io/"
          onImageViewerEnabled={handleFlagChange}
          onSrcTransfer={handleChildPropSrcTransfer}
        />
        <Examplebox
          imgIndex={2}
          src={"/previews/studyai/studyaihome.png"}
          isLink={false}
          isPictures={true}
          name="studyai"
          onImageViewerEnabled={handleFlagChange}
          onSrcTransfer={handleChildPropSrcTransfer}
        />
        <Examplebox
          imgIndex={3}
          src={"/previews/devwisetools/devwisetoolshome.png"}
          isLink={true}
          isPictures={true}
          name="devwisetools"
          link="https://devwisetools.com"
          onImageViewerEnabled={handleFlagChange}
          onSrcTransfer={handleChildPropSrcTransfer}
        />

        <div
          className="bg-black h-screen fixed top-0 right-0 left-0 bg-opacity-80 z-50 p-5"
          style={
            onImageViewerEabledFlag ? { display: "block" } : { display: "none" }
          }
        >
          <div className="flex justify-center md:justify-end">
            <button
              className="hover:text-zinc-400"
              onClick={decrementShowcaseImage}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" />
              </svg>
            </button>
            <button
              className="hover:text-zinc-400"
              onClick={incrementShowcaseImage}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
              </svg>
            </button>

            <button
              className="hover:text-zinc-400 ml-5"
              onClick={() => {
                setOnImageViewerEabledFlag(false);
                setImageCounter(0);
              }}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2.2em"
                width="2.2em"
              >
                <path d="M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center items-center h-[90vh] flex-col ">
            <Image
              src={previewImages[transferredIndex][imageCounter]}
              width={800}
              height={800}
              alt="autoshinehome"
              className="h-auto w-full sm:w-2/3 rounded-xl"
            />
          </div>
        </div>
      </section>

      <article className="bg-lightmode-gray pt-[10rem] pb-20  px-10 lg:px-[15%]">
        <h3 className="text-black text-3xl font-bold mb-7 fadeInAnim">
          Check out our personal projects too!
        </h3>

        <p className="text-black fadeInAnim">
          Observe our team's skills and experience development and innovating.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 fadeInAnim gap-8">
          <div className="shadowHover border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-8">
            <h4 className="text-white text-xl">SqAI</h4>
            <p className="mt-3">
              A custom made AI classifier with multiple use cases.
            </p>
            <button
              className="btn-main p-2 w-full mt-8"
              onClick={() =>
                window.open("https://github.com/ibrahimfaisal07/SqAI")
              }
            >
              Visit
            </button>
          </div>
          <div className="shadowHover border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-8">
            <h4 className="text-white text-xl">Codelang</h4>
            <p className="mt-3">
              An interpreted programming language built in CSharp.​
            </p>
            <button
              className="btn-main p-2 w-full mt-8"
              onClick={() =>
                window.open("https://github.com/ibrahimfaisal07/Codelang")
              }
            >
              Visit
            </button>
          </div>
          <div className="shadowHover border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-8">
            <h4 className="text-white text-xl">TyphoonDotNet</h4>
            <p className="mt-3">An Express JS clone built in CSharp</p>
            <button
              className="btn-main p-2 w-full mt-8"
              onClick={() =>
                window.open("https://github.com/ibrahimfaisal07/TyphoonDotNET")
              }
            >
              Visit
            </button>
          </div>
          <div className="shadowHover border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-8">
            <h4 className="text-white text-xl">To see more...</h4>
            <p className="mt-3">
              ... personal projects, please visit the github below.
            </p>
            <button
              className="btn-main p-2 w-full mt-8"
              onClick={() =>
                window.open("https://github.com/orgs/Nexieon/people")
              }
            >
              Visit
            </button>
          </div>
        </div>
      </article>
      <section className="bg-lightmode-gray text-black flex lg:flex-row flex-col justify-between py-24 px-10 lg:px-[15%]">
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
            className="btn-main w-full lg:w-auto my-auto"
            onClick={() => router.push("/contact")}
          >
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
};

export default Work;
