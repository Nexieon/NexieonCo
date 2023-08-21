'use client'

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  isPictures: boolean;
  isLink: boolean;
  link?: string
  name: string;
  imgIndex?: number;
  onImageViewerEnabled?: (flag: boolean) => void 
  onSrcTransfer?: (imgIndex: number) => void;
};

const Examplebox = ({ src, isPictures, isLink, link, name, onImageViewerEnabled, onSrcTransfer, imgIndex }: Props) => {
  const [ImageViewerFlag, setImageViewerFlag] = useState(false)

  const handleFlagChange = (newFlag: boolean) => {
    setImageViewerFlag(newFlag);
    if (onImageViewerEnabled) {
      onImageViewerEnabled(newFlag)
    }
  };

  return (
    <div className="shadow-2xl p-4 rounded-xl bg-lightmode-gray">
      <div className="group relative">
        <div className=" w-full bg-black rounded-xl">
          <Image
            width={550}
            height={550}
            alt={name}
            className="rounded-lg h-[15rem] sm:h-[18rem] object-cover w-full  transition-opacity duration-300 group-hover:opacity-40 hover:opacity-100"
            src={src}
          />
          <div className=" absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-col">
            <div className="flex gap-3 mb-4">
              <a
                target = '_blank'
                href={link}
                className="text-black bg-white p-4 rounded-xl hover:bg-zinc-300"
                style={isLink ? { display: "block" } : { display: "none" }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1.4em"
                  width="1.4em"
                >
                  <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
                </svg>
              </a>

              <button
                onClick = {() => {
                  handleFlagChange(true)
                  if (onSrcTransfer !== undefined && imgIndex !== undefined) {
                    onSrcTransfer(imgIndex)
                  }
                }}
                className="text-black bg-white p-4 rounded-xl hover:bg-zinc-300 "
                style={isPictures ? { display: "block" } : { display: "none" }}
              >
                <svg
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  height="1.4em"
                  width="1.4em"
                >
                  <path d="M512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h352c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 288c0 8.822-7.178 16-16 16h-16L386.7 175.1c-3-4.4-8-7.1-13.4-7.1a15.978 15.978 0 00-13.31 7.125l-62.74 94.11L274.9 238.6c-3-4.2-7.8-6.6-12.9-6.6a16.007 16.007 0 00-12.93 6.574L176 336h-16c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v224zM224 112c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.68 0 32-14.33 32-32s-14.3-32-32-32zm232 368H120C53.83 480 0 426.2 0 360V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
                </svg>
              </button>
            </div>
            <span className="text-white text-2xl font-semibold ">
              {name}
            </span>
          </div>
        </div>
      </div>

      <div className="flex mx-3 mt-3">
        <span className="font-semibold text-md text-black mr-auto">{name}</span>

        <a
          target = '_blank'
          href={link}
          className="text-black hover:text-primary-blue  mr-4"
          style={isLink ? { display: "block" } : { display: "none" }}
        >
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1.4em"
            width="1.4em"
          >
            <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
          </svg>
        </a>

        <button
          className="text-black hover:text-primary-blue "
          style={isPictures ? { display: "block",  } : { display: "none",}}
          onClick = {() => {
            handleFlagChange(true)
            if (onSrcTransfer !== undefined && imgIndex !== undefined) {
              onSrcTransfer(imgIndex)
            }
          }}
        >
          <svg
            viewBox="0 0 576 512"
            fill="currentColor"
            height="1.4em"
            width="1.4em"
          >
            <path d="M512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h352c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 288c0 8.822-7.178 16-16 16h-16L386.7 175.1c-3-4.4-8-7.1-13.4-7.1a15.978 15.978 0 00-13.31 7.125l-62.74 94.11L274.9 238.6c-3-4.2-7.8-6.6-12.9-6.6a16.007 16.007 0 00-12.93 6.574L176 336h-16c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v224zM224 112c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.68 0 32-14.33 32-32s-14.3-32-32-32zm232 368H120C53.83 480 0 426.2 0 360V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Examplebox;
