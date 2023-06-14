import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className={'flex justify-center items-center min-h-screen'} style={{background: 'url(./circlescatterbg.png)', backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
        <div className={'text-center'}>
          <h4 className={'text-xl font-extralight p-2'}>Custom software solutions</h4>
          <h2 className={'text-6xl font-bold p-2'}>Made for your comfort.</h2>
        </div>
      </section>
      <hr style={{border: '2px solid var(--primary)'}} className='m-3'/>
    </main>
  );
}
