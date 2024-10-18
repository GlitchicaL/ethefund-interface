import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { JsonRpcProvider, Contract } from 'ethers';

// Import contract addresses
import { getProvider, getAddresses } from '@/app/config/helpers';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // Get the proposal
  const proposal = await prisma.proposal.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  // If the proposal doesn't exist, let's throw an error
  if (!proposal) {
    return NextResponse.error();
  }

  // Get the contract addresses and ABIs
  const contracts = getAddresses(proposal.chainId)

  // We need to get the current status of the proposal
  // TODO: What is an elegant way of handling localhost vs remote?
  const provider = new JsonRpcProvider(getProvider(proposal.chainId));
  const etheGovernor = new Contract(contracts?.etheGovernor.address, contracts?.etheGovernor.abi, provider);

  // Fetch the on-chain data we need
  const state = Number(await etheGovernor.state(proposal.proposalId));

  return NextResponse.json({
    proposal: {
      ...proposal,
      state: state
    }
  });
}
