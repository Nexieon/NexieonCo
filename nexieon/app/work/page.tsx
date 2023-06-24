'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Work = () => {
  const router = useRouter();

  return (
    <>
      <section className="min-h-[200vh] md:min-h-[90vh] bg-black flex w-full items-center p-8 pt-24"
            style={{background: 'linear-gradient(169deg, rgba(25,25,25,1) 50%, rgba(36,36,36,1) 50%)'}}
        >
            <div className="mx-auto w-full md:w-3/4">
                <div>
                    <h1 className="text-4xl fadeInAnim text-center">
                        View and explore our various projects
                    </h1>
                    <hr className="my-5 mx-auto fadeInAnim" style={{borderTop: 'var(--primary) 2px solid', width: '75%'}}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 fadeInAnim mt-12 gap-6">
                    <div id='studyai' className="border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-12 text-center flex justify-center items-center">
                        <div>
                            <Image className="mx-auto" src={'/previews/studyailogo.png'} alt='StudyAi Logo' width={150} height={75}/>
                            <p className="text-white my-8">
                                Study smarter now with your personal AI study buddy.
                            </p>
                            <Image src={'/previews/studyaipreview.png'} alt='StudyAI Preview' width={0} height={0} sizes='100vw' style={{width: '100%', height: 'auto'}}/>
                            <button className = 'btn-main-reverse p-2 w-full mt-8' onClick={() => window.open('https://github.com/ibrahimfaisal07/studyai')}>Visit</button>
                        </div>
                    </div>
                    <div id='redlane' className="border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-12 text-center flex justify-center items-center">
                        <div>
                            <Image className="mx-auto" src={'/previews/redlanemedialogo.png'} alt='Redlanemedia Logo' width={200} height={100}/>
                            <p className="text-white my-8">
                            Devoted marketing designed in one place to perfect your image.
                            </p>
                            <Image src={'/previews/redlanemediapreview.png'} alt='Redlanemedia Preview' width={0} height={0} sizes='100vw' style={{width: '100%', height: 'auto'}}/>
                            <button className = 'btn-main-reverse p-2 w-full mt-8' onClick={() => window.open('https://redlanemedia.webflow.io/')}>Visit</button>
                        </div>
                    </div>
                    <div id='autoshine' className="border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-12 text-center flex justify-center items-center">
                        <div>
                            <Image className="mx-auto mt-[-3rem]" src={'/previews/autoshinelogo.png'} alt='Autoshine Logo' width={150} height={75}/>
                            <p className="text-white mb-8 mt-[-2rem]">
                                Spend less time cleaning, more time enjoying.
                            </p>
                            <Image src={'/previews/autoshinepreview.png'} alt='Autoshine Preview' width={0} height={0} sizes='100vw' style={{width: '100%', height: 'auto'}}/>
                            <button className = 'btn-main-reverse p-2 w-full mt-8 hover:cursor-not-allowed'>In Development</button>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <article className="bg-white py-20 px-10 lg:px-[15%]">
        <h2 className = 'text-black text-3xl font-bold mb-7 fadeInAnim'>Check out our personal projects too!</h2>

        <p className = 'text-black fadeInAnim'>
            Observe our team's skills and experience development and innovating.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 fadeInAnim gap-8">
            <div
                className="shadowHover border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-8"
            >
                <h1 className="text-white text-xl">SqAI</h1>
                <p className="mt-3">
                    A custom made AI classifier with multiple use cases.
                </p>
                <button className = 'btn-main p-2 w-full mt-8' onClick={() => window.open('https://github.com/ibrahimfaisal07/SqAI')}>Visit</button>
            </div>
            <div
                className="shadowHover border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-8"
            >
                <h1 className="text-white text-xl">Codelang</h1>
                <p className="mt-3">
                    An interpreted programming language built in CSharp.​
                </p>
                <button className = 'btn-main p-2 w-full mt-8' onClick={() => window.open('https://github.com/ibrahimfaisal07/Codelang')}>Visit</button>
            </div>
            <div
                className="shadowHover border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-8"
            >
                <h1 className="text-white text-xl">TyphoonDotNet</h1>
                <p className="mt-3">
                    An Express JS clone built in CSharp
                </p>
                <button className = 'btn-main p-2 w-full mt-8' onClick={() => window.open('https://github.com/ibrahimfaisal07/TyphoonDotNET')}>Visit</button>
            </div>
            <div
                className="shadowHover border-white rounded-[1rem] border-[2px]  bg-[var(--primary-black)] p-8"
            >
                <h1 className="text-white text-xl">To see more...</h1>
                <p className="mt-3">
                    ... personal projects, please visit the github below.
                </p>
                <button className = 'btn-main p-2 w-full mt-8' onClick={() => window.open('https://github.com/ibrahimfaisal07/')}>Visit</button>
            </div>
        </div>
      </article>
      <section className = 'bg-white text-black flex lg:flex-row flex-col justify-between py-24 px-10 lg:px-[15%]'>
        <div className='w-full lg:w-1/2 fadeInAnim'>
          <h3 className = 'text-3xl mb-8 lg:text-left text-left font-bold lg:text-4xl'>Want to work with us?</h3>
          <p className = 'lg:text-left text-left'>Join the list of ambitious businesses that take it to the next level.</p>
        </div>
        <div className="w-full mt-8 lg:mt-0 lg:w-1/4 flex align-center fadeInAnim">
          <button className = 'btn-main w-full lg:w-auto my-auto' onClick={() => router.push('/contact')}>CONTACT US</button>
        </div>
      </section>
    </>
  );
};

export default Work;
