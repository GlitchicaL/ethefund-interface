

// Components
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='container relative mx-auto grid grid-cols-12 grid-rows-none px-5'>
      <Header />

      <h1 className='col-span-full'>Welcome to Ethefund</h1>

      <Footer />
    </main>
  );
}
