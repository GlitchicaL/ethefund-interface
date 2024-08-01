

// Components
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="container relative max-w-screen-lg mx-auto grid grid-cols-12 auto-rows-min px-12">
      <Header />

      <div className="col-span-full min-h-[84dvh] grid grid-cols-12">
        <div className='col-span-full md:col-span-6'>
          <h1 className='text-3xl font-bold my-6'>Welcome to Ethefund</h1>
          <p className='text-lg'>A grant based system for powering Ethereum based projects. Vote and support your favorite projects today!</p>
        </div>

        <div className='col-span-full mb-4'>
          <h2 className='text-xl font-bold my-6'>Explore Ethefund</h2>
          <div className='flex flex-wrap gap-4'>
            <div className='flex-1 min-w-60 min-h-60 border-2 border-bluewood-300 rounded p-4'>
              <h2 className='text-xl font-bold'>Ethefund Token</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quo quam debitis officiis quasi ipsa, cumque adipisci, alias
                tempora eligendi, totam laudantium eos facilis! Sapiente
                nihil error dolor sequi. Culpa, non!
              </p>
            </div>
            <div className='flex-1 min-w-60 min-h-60 border-2 border-bluewood-300 rounded p-4'>
              <h2 className='text-xl font-bold'>Ethefund Governance</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quo quam debitis officiis quasi ipsa.
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-full mb-4'>
          <h2 className='text-xl font-bold my-6'>Community Supported Protocols</h2>
          <div className='flex flex-wrap gap-4'>
            <div className='flex-1 min-w-60 min-h-32 border-2 border-bluewood-300 rounded p-4'>
              <h2 className='text-xl font-bold'>Safe Scripts</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className='flex-1 min-w-60 min-h-32 border-2 border-bluewood-300 rounded p-4'>
              <h2 className='text-xl font-bold'>EtheBingo</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quo quam debitis officiis quasi ipsa.
              </p>
            </div>
            <div className='flex-1 min-w-60 min-h-32 border-2 border-bluewood-300 rounded p-4'>
              <h2 className='text-xl font-bold'>TokenScan</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quo quam debitis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
