interface ProposalBadgeProps {
  state: number;
}

export default function ProposalBadge({ state = -1 }: ProposalBadgeProps) {
  return (
    <div className="content-center">
      {state === 0 ? (
        <p className="w-20 text-center text-xs font-bold border-2 border-bluewood-300 rounded p-1 bg-blue-600 text-white">
          Pending
        </p>
      ) : state === 1 ? (
        <p className="w-20 text-center text-xs font-bold border-2 border-bluewood-300 rounded p-1 bg-red-600 text-white">
          Canceled
        </p>
      ) : state === 2 ? (
        <p className="w-20 text-center text-xs font-bold border-2 border-bluewood-300 rounded p-1 bg-red-600 text-white">
          Defeated
        </p>
      ) : state === 3 ? (
        <p className="w-20 text-center text-xs font-bold border-2 border-bluewood-300 rounded p-1 bg-green-600 text-white">
          Succeeded
        </p>
      ) : state === 4 ? (
        <p className="w-20 text-center text-xs font-bold border-2 border-bluewood-300 rounded p-1 bg-yellow-600 text-white">
          Queued
        </p>
      ) : state === 5 ? (
        <p className="w-20 text-center text-xs font-bold border-2 border-bluewood-300 rounded p-1 bg-slate-600 text-white">
          Expired
        </p>
      ) : state === 6 ? (
        <p className="w-20 text-center text-xs font-bold border-2 border-bluewood-300 rounded p-1 bg-green-600 text-white">
          Executed
        </p>
      ) : (
        <>N/A</>
      )}
    </div>
  );
}
