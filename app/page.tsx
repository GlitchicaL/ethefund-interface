

// Components
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='container relative max-w-screen-lg mx-auto grid grid-cols-12 auto-rows-min px-12'>
      <Header />

      <div className='min-h-[84dvh]'>
        <h1 className='col-span-full'>Welcome to Ethefund</h1>
      </div>

      <Footer />
    </main>
  );
}
