

// Components
import ProposalCard from "../../components/cards/ProposalCard";

export default function Page() {
  const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quam debitis officiis quasi ipsa."

  return (
    <div className="col-span-full grid grid-cols-12">
      <div className="col-span-full md:col-span-6 my-4">
        <h1 className="text-3xl font-bold my-4">Create a Proposal</h1>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Distinctio eligendi odio est dolorem.
        </p>
      </div>

      <div className="col-span-full md:col-span-8 row-start-2 my-4">
        <form action="" className="grid gap-4">
          <label htmlFor="">Name of Proposal</label>
          <input type="text" placeholder="Name of Proposal" className="p-2" />

          <label htmlFor="">Description of Proposal</label>
          <textarea name="" id="" placeholder="Description of Proposal" rows={4} cols={50} className="p-2">

          </textarea>

          <label htmlFor="">Target Address</label>
          <input type="text" placeholder="0xa83114A443dA1CecEFC50368531cACE9F37fCCcb" className="p-2" />

          <label htmlFor="">Expected ETH Value</label>
          <input type="number" placeholder="1" min={1} max={10} className="p-2" />

          <button type="submit" className="bg-bluewood-300 text-white font-bold w-32 border-2 border-bluewood-300 rounded p-2 hover:bg-mint-300 hover:text-bluewood-300 transition-all">Propose</button>
        </form>
      </div>
    </div>
  );
}
