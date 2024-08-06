

// Components
import ProposalCard from "../components/cards/ProposalCard";

export default function Page() {
  const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quam debitis officiis quasi ipsa."

  return (
    <div className="col-span-full min-h-[84dvh] grid grid-cols-12">
      <div className='col-span-full md:col-span-6'>
        <h1 className='text-3xl font-bold my-6'>Proposals</h1>
        <p className='text-lg'>View recent proposals.</p>
      </div>

      <div className='col-span-full mb-6'>
        <h2 className='text-xl font-bold my-6 px-4'>Recent Proposals</h2>
        <hr className="border-b-1 border-bluewood-300" />
        <div className='flex flex-wrap'>
          <ProposalCard name="Ethefund Token" description={description} status={0} />
          <ProposalCard name="Ethefund Token" description={description} status={1} />
          <ProposalCard name="Ethefund Token" description={description} status={3} />
          <ProposalCard name="Ethefund Token" description={description} status={6} />
        </div>
      </div>

      <div className='col-span-full mb-6 border-2 border-bluewood-300 rounded p-4'>
        <h2 className='text-xl font-bold'>Ethefund Governance</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quo quam debitis officiis quasi ipsa.
        </p>
      </div>
    </div>
  );
}
