import { NextResponse, NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { JsonRpcProvider, Contract } from 'ethers';
import prisma from '@/lib/prisma';

// Import contract addresses
import { getProvider, getAddresses } from '@/app/config/helpers';

export async function GET(request: NextRequest) {
  // Get any URL params 
  // Ex. .../api/proposals?amount=5
  const params = request.nextUrl.searchParams;
  const amount = params.get("amount");

  // Get proposals
  const proposals = await prisma.proposal.findMany({
    take: Number(amount),
    orderBy: {
      date: 'desc'
    }
  });

  // If no proposals are returned, then just return an empty array
  if (proposals.length === 0) {
    return NextResponse.json({ proposals: [] });
  }

  // Since we need some on-chain data like the current state,
  // we'll map through each proposal, and fetch the needed data
  const augmentedProposals = await Promise.all(
    proposals.map(async (proposal) => {
      const provider = new JsonRpcProvider(getProvider(proposal.chainId));
      const contracts = getAddresses(proposal.chainId)
      const etheGovernor = new Contract(contracts?.etheGovernor.address, contracts?.etheGovernor.abi, provider);

      // Fetch the on-chain data we need
      const state = Number(await etheGovernor.state(proposal.proposalId));

      return {
        ...proposal,
        state,
      };
    })
  );

  return NextResponse.json({ augmentedProposals });
}

export async function POST(request: Request) {
  const { id, proposer, transaction, chainId, name, description, target, value } = await request.json();
  const proposal = await prisma.proposal.create({
    data: {
      proposalId: id,
      proposer,
      transaction,
      chainId,
      name,
      description,
      target,
      value: Number(value)
    },
  });

  redirect(`/proposals/${proposal.id}/`);
}
