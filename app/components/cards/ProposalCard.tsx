import Link from "next/link";

// Components
import ProposalBadge from "../badge/ProposalBadge";

interface ProposalCardProps {
  id: number;
  name: string;
  description: string;
  state: number;
}

export default function ProposalCard({ id, name, description, state }: ProposalCardProps) {
  return (
    <Link href={`/proposals/${id}`} className="w-full min-h-24 flex justify-between border-b-2 border-bluewood-300 p-4 cursor-pointer hover:bg-mint-300">
      <div className="content-center">
        <h3 className="text-md font-bold">{name}</h3>
        <p className="text-md">
          {description}
        </p>
      </div>

      <ProposalBadge state={state} />
    </Link>
  );
}
