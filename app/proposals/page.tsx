// Components
import ProposalCard from "../components/cards/ProposalCard";
import Link from "../components/links/Link";

interface Proposal {
  id: number,
  proposalId: string,
  proposer: string,
  transaction: string,
  chainId: number,
  date: Date,
  name: string,
  description: string,
  target: string,
  value: number,
}

export default async function Page() {
  // Fetch proposals
  const response = await fetch(`http://localhost:3000/api/proposals`, {
    method: "GET"
  });

  // Destructure response
  const { proposals } = await response.json();

  return (
    <div className="col-span-full grid grid-cols-12 my-4">
      <div className="col-span-full md:col-span-6">
        <h1 className="text-3xl font-bold my-4">Proposals</h1>
        <p className="text-lg">View recent proposals.</p>
      </div>

      <div className="col-span-full md:col-span-6 inline-block align-middle mt-4 pb-4 border-t-2 border-b-2 md:border-0 md:border-l-4 border-bluewood-300 md:pl-4">
        <h2 className="text-2xl font-bold my-4">Create a Proposal</h2>
        <p className="my-1 text-lg mb-4">
          Have an idea? Create a Proposal!
        </p>
        <Link text={"Propose"} link={"/proposals/create"} box={true} />
      </div>

      <div className="col-span-full mb-6">
        <h2 className="text-xl font-bold my-6 px-4">Recent Proposals</h2>
        <hr className="border-b-1 border-bluewood-300" />
        <div className="flex flex-wrap">
          {proposals.length > 0 ? proposals.map((proposal: Proposal, index: number) => (
            <ProposalCard key={index} id={1} name={proposal.name} description={proposal.description} status={0} />
          )) : (
            <p className="w-full p-4">
              No Proposals to show.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
