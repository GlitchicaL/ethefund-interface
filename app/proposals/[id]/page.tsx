// Components
import ProposalBadge from "../../components/badge/ProposalBadge";

interface PageParams {
  params: {
    id: number,
  }
}

export default async function Page({ params }: PageParams) {
  // Fetch proposals
  const response = await fetch(`http://localhost:3000/api/proposals/${params.id}`, {
    method: "GET",
    cache: 'no-cache',
    next: { revalidate: 0 },
  });

  // Destructure response
  const { proposal } = await response.json();

  // Note: In the future, we'll need timestamp of the start of the proposal voting period,
  // subtract that from the current time to get the difference in seconds, then determine how
  // many hours until the voting period. Below is just temporary.
  const seconds = 3600; // 1 hour
  const difference = 90000; // future time - current time (25 hours)

  return (
    <div className="col-span-full min-h-[84dvh] grid grid-cols-12 gap-4 content-start">
      <h1 className="col-span-full max-h-fit text-3xl font-bold mt-4">Proposal #{params.id}</h1>
      <div className="col-span-full">
        <div className="flex justify-between">
          <div className="flex">
            <ProposalBadge state={0} />
            <p className="content-center text-xs font-bold mx-2">{Math.round(difference / seconds)} hours until voting</p>
          </div>

          <div className="content-center">
            <p className="border-2 border-bluewood-300 rounded p-4">{`${proposal.proposer.slice(0, 6)}...${proposal.proposer.slice(36, -1)}`}</p>
          </div>
        </div>
      </div>

      <div className="col-span-full grid grid-cols-12 gap-4">
        <div className="col-span-6 border-2 border-bluewood-300 rounded p-4">
          <h2 className="text-lg font-bold mb-4">For</h2>
          <progress value={0.5} className="w-full" />
        </div>

        <div className="col-span-6 border-2 border-bluewood-300 rounded p-4">
          <h2 className="text-lg font-bold mb-4">Against</h2>
          <progress value={0.5} className="w-full" />
        </div>
      </div>

      <div className="col-span-full content-center">
        <h2 className="text-lg font-bold my-4">Details</h2>
        <div>
          <h3 className="text-md font-bold my-4">Summary</h3>
          <p>
            {proposal.description}
          </p>
        </div>
        <div>
          <h3 className="text-md font-bold my-4">Actions</h3>
          <p>
            Send {proposal.value} ETH to {proposal.target}.
          </p>
        </div>
      </div>
    </div>
  );
}
