'use client';

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <>
      <section className="h-[76vh] bg-black flex md:justify-center items-center p-8 ">
        <h1 className="text-4xl md:w-[55%]">
          We empower you to achieve your goals as a business via software.
        </h1>
      </section>

      <article className="bg-white py-20 px-10 lg:px-[12rem]">
        <h2 className = 'text-black text-3xl font-bold mb-7'>Who are we?</h2>

        <p className = 'text-black '>
          At Nexieon, we are more than just a software agency. We are a team of
          dedicated professionals driven by a shared passion for technology and
          a commitment to excellence. Our purpose is to empower businesses and
          organizations by leveraging the power of innovative software
          solutions. We stand for integrity, transparency, and a client-centric
          approach. We believe in fostering long-term partnerships built on
          trust and mutual success. With our expertise in software development,
          design, and cutting-edge technologies, we strive to deliver
          exceptional results that exceed expectations. At Nexieon, we are not
          just here to create software – we are here to transform businesses,
          drive growth, and shape the future of digital experiences.
        </p>

        <button className = 'px-8 py-5 btn-main mt-12' onClick={() => router.push('/work')}>VIEW OUR WORK</button>
      </article>

      <section className = 'flex lg:flex-row flex-col justify-between py-20 px-10 lg:px-[12rem]'>
        <div>
          <h3 className = 'text-3xl mb-8 lg:text-left text-left font-bold'>Want to work with us?</h3>
          <p className = 'lg:text-left text-left'>Join the list of ambitious businesses that take it to the next level.</p>
        </div>
        <div className="flex align-center">
          <button className = 'btn-main-reverse my-auto' onClick={() => router.push('/contact')}>CONTACT US</button>
        </div>
      </section>
    </>
  );
};

export default About;
