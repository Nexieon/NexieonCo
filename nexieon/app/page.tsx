"use client";

import Image from 'next/image';
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
          <CarouselItem>
            <div className="w-1/2 mx-auto md: grid md:grid-cols-2"  onClick={() => window.open('/work#studyai', "_blank")}>
              <div className='p-3 whitespace-pre-wrap'>
                <Image src={'/previews/studyailogo.png'} alt='StudyAi Logo' width={150} height={75}/>
                <p className="text-white mt-3">
                  Study smarter now with your personal AI study buddy.
                </p>
                {/*<button className = 'btn-main-reverse w-full lg:w-auto my-auto' >See More</button>*/}
              </div>
              <div className='hidden md:block'>
                <Image src={'/previews/studyaipreview.png'} alt='StudyAI Preview' width={0} height={0} sizes='100vw' style={{width: '100%', height: 'auto'}}/>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-1/2 mx-auto md: grid md:grid-cols-2"  onClick={() => window.open('/work#redlane', "_blank")}>
              <div className='p-3 whitespace-pre-wrap'>
                <Image src={'/previews/redlanemedialogo.png'} alt='Redlane Logo' width={300} height={150}/>
                <p className="text-white mt-3">
                  Devoted marketing designed in one place to perfect your image.
                </p>
                {/*<button className = 'btn-main-reverse w-full lg:w-auto my-auto' >See More</button>*/}
              </div>
              <div className='hidden md:block'>
                <Image src={'/previews/redlanemediapreview.png'} alt='Redlanemedia Preview' width={0} height={0} sizes='100vw' style={{width: '100%', height: 'auto'}}/>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-1/2 mx-auto md: grid md:grid-cols-2"  onClick={() => window.open('/work#autoshine', "_blank")}>
              <div className='p-3 whitespace-pre-wrap'>
                <Image src={'/previews/autoshinelogo.png'} alt='Autoshine Logo' width={150} height={75}/>
                <p className="text-white mt-3">
                  Spend less time cleaning, more time enjoying.
                </p>
                {/*<button className = 'btn-main-reverse w-full lg:w-auto my-auto' >See More</button>*/}
              </div>
              <div className='hidden md:block'>
                <Image src={'/previews/autoshinepreview.png'} alt='Autoshine Preview' width={0} height={0} sizes='100vw' style={{width: '100%', height: 'auto'}}/>
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </section>
      <article className="bg-white py-24 px-10 lg:px-[15%]">
        <div className="w-full lg:w-3/4 fadeInAnim"> 
          <h1 className = 'text-black text-2xl lg:text-4xl font-extrabold mb-7'>Driven by excellence, fueled by passion.</h1>

          <p className = 'text-black mt-12'>
            Nexieon is a software agency focused on delivering what our partners desire, using the greatest technologies and innovations known. 
            With a relentless commitment to quality, we ensure that the ambitious businesses we partner up with recieve the best cutting edge solutions. 
            Acheiving our partner's full potential through technology will always be our main priority.
          </p>

          <button className = 'w-full lg:w-auto px-8 py-5 btn-main mt-12' onClick={() => router.push('/work')}>EXPLORE OUR WORK</button>
        </div>
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
    </main>
  );
}
