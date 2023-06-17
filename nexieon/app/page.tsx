"use client";

import Carousel, { CarouselItem } from './components/Carousel';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  return (
    <main>
      <section className={'flex justify-center items-center min-h-[95vh]'} style={{background: 'url(./circlescatterbg.png)', backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
        <div className={'text-center'}>
          <h4 className={'text-xl font-extralight p-2 fadeInAnim'}>Custom software solutions</h4>
          <h2 className={'text-6xl font-bold p-2 fadeInAnim'}>Made for your comfort.</h2>
        </div>
      </section>
      <hr style={{borderTop: 'var(--primary) 3px solid'}} className='m-2'/>
      <section className={'h-2/4 min-w-full'}>
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
      </section>
      <article className="bg-white py-24 px-10 lg:px-[12rem]">
        <div className="w-3/4"> 
          <h1 className = 'text-black text-4xl font-extrabold mb-7'>Driven by excellence, fueled by passion.</h1>

          <p className = 'text-black text-sm mt-12'>
            Nexieon is a software agency focused on delivering what our partners desire, using the greatest technologies and innovations known. 
            With a relentless commitment to quality, we ensure that the ambitious businesses we partner up with recieve the best cutting edge solutions. 
            Acheiving our partner's full potential through technology will always be our main priority.
          </p>

          <button className = 'px-8 py-5 btn-main mt-12' onClick={() => router.push('/work')}>EXPLORE OUR WORK</button>
        </div>
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
    </main>
  );
}
