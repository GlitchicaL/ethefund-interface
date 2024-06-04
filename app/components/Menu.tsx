export default function Menu() {
  return (
    <aside className='bg-bluewood-300 text-white fixed bottom-0 left-0 w-full h-[80%]'>
      <div className='flex flex-col justify-center items-center my-4'>
        <button className='bg-mint-300 text-bluewood-300 font-bold w-28 border-2 border-mint-300 rounded p-2 hover:bg-bluewood-300 hover:text-mint-300 transition-all'>Connect</button>
        <a href="" className='my-5 text-lg hover:text-mint-300 transition-all'>Admin</a>
      </div>

      <hr className='w-[80%] mx-auto' />

      <nav className='flex justify-center items-center my-4'>
        <ul className='flex flex-col justify-center items-center'>
          <li className='my-3 text-xl hover:text-mint-300 transition-all'><a href="" className='p-1'>Proposals</a></li>
          <li className='my-3 text-xl hover:text-mint-300 transition-all'><a href="" className='p-1'>Partcipate</a></li>
          <li className='my-3 text-xl hover:text-mint-300 transition-all'><a href="" className='p-1'>Analytics</a></li>
        </ul>
      </nav>
    </aside>
  );
}
