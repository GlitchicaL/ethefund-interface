// Components
import ProposalBadge from "../../components/badge/ProposalBadge";

interface PageParams {
  params: {
    id: number,
  }
}

async function getProposal() {
  // Fetch the proposal
  // Temporary placeholder to represent a proposal
  const proposal = {
    id: 1,
    name: "Ethefund Token",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quam debitis officiis quasi ipsa.",
    status: 0
  };

  return proposal;
}

export default async function Page({ params }: PageParams) {
  const { status } = await getProposal();

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
            <ProposalBadge status={status} />
            <p className="content-center text-xs font-bold mx-2">{Math.round(difference / seconds)} hours until voting</p>
          </div>

          <div className="content-center">
            <p className="border-2 border-bluewood-300 rounded p-4">0x582v...0p1A</p>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur distinctio facere corporis hic vitae fugit veritatis
            laborum pariatur earum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur distinctio facere corporis hic vitae fugit veritatis
            laborum pariatur earum.
          </p>
        </div>
        <div>
          <h3 className="text-md font-bold my-4">Actions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur distinctio facere corporis hic vitae fugit veritatis
            laborum pariatur earum.
          </p>
        </div>
      </div>
    </div>
  );
}
