

// Components
import ProposalCard from "../components/cards/ProposalCard";
import Link from "../components/links/Link";

export default function Page() {
  const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quam debitis officiis quasi ipsa."

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
          <ProposalCard id={1} name="Ethefund Token" description={description} status={0} />
          <ProposalCard id={2} name="Ethefund Token" description={description} status={1} />
          <ProposalCard id={3} name="Ethefund Token" description={description} status={3} />
          <ProposalCard id={4} name="Ethefund Token" description={description} status={6} />
        </div>
      </div>
    </div>
  );
}
