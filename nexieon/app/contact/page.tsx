'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  return (
    <>
      <section className="min-h-[95vh] bg-black flex w-full items-center p-8 pt-24"
            style={{background: 'linear-gradient(142deg, rgba(25,25,25,1) 50%, rgba(36,36,36,1) 50%)'}}
        >
            <div className="mx-auto w-full md:w-3/5 md:flex md:items-center">
                <div className="w-full md:w-1/2 whitespace-pre-wrap p-5 ">
                    <h2 className="text-xl fadeInAnim font-thin">Lets Work Together</h2>
                    <h1 className="text-2xl md:text-6xl mt-7 mb-10 font-semibold fadeInAnim">
                        How can we help?
                    </h1>
                    <hr className="my-5 fadeInAnim w-full md:w-1/2" style={{borderTop: 'var(--primary) 2px solid'}}/>
                    <p className="font-thin fadeInAnim hidden md:block">
                        Connect with us to help you take that next step in achieving your goals.
                    </p>
                </div>
                <form className="w-full md:w-1/2 fadeInAnim">
                    <div className='p-2 w-full'>
                        <input type="text" placeholder="Name" required/>
                    </div>
                    <div className='p-2 w-full'>
                        <input type="text" placeholder="Company" required/>
                    </div>
                    <div className='p-2 w-full'>
                        <input type="email" placeholder="Email" required/>
                    </div>
                    <div className='p-2 w-full'>
                        <input type="tel" placeholder="Phone" />
                    </div>
                    <div className='p-2 w-full'>
                        <textarea placeholder="Your Message..." cols={30} rows={8} required></textarea>
                    </div>
                    <div className="p-2 w-full">
                        <button className = 'btn-secondary w-full mt-5' type="submit">Send</button>
                    </div>
                </form>
            </div>
      </section>
    </>
  );
};

export default Contact;
