'use client';

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <>
      <section className="h-[76vh] bg-black flex md:justify-center items-center p-8 " 
        style={{
          background: 'linear-gradient(180deg, rgba(25,25,25,0.6) 0%, rgba(255,255,255,0) 100%), url(./mountainsea.jpg)', 
          backgroundPosition: 'center center', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
        }}
      >
        <h1 className="text-4xl md:w-[55%] fadeInAnim">
          We empower you to achieve your goals as a business via software.
        </h1>
      </section>

      <article className="bg-white py-20 px-10 lg:px-[15%]">
        <h2 className = 'text-black text-3xl font-bold mb-7 fadeInAnim'>Who are we?</h2>

        <p className = 'text-black fadeInAnim'>
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

        <button className = 'w-full lg:w-auto px-8 py-5 btn-main mt-12 fadeInAnim' onClick={() => router.push('/work')}>VIEW OUR WORK</button>
      </article>

      <section className = 'flex lg:flex-row flex-col justify-between py-24 px-10 lg:px-[15%]'>
        <div className='w-full lg:w-1/2 fadeInAnim'>
          <h3 className = 'text-3xl mb-8 lg:text-left text-left font-bold lg:text-4xl'>Want to work with us?</h3>
          <p className = 'lg:text-left text-left'>Join the list of ambitious businesses that take it to the next level.</p>
        </div>
        <div className="w-full mt-8 lg:mt-0 lg:w-1/4 flex align-center fadeInAnim">
          <button className = 'btn-main-reverse w-full lg:w-auto my-auto' onClick={() => router.push('/contact')}>CONTACT US</button>
        </div>
      </section>
    </>
  );
};

export default About;
