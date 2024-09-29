import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  // TODO: Sort by chainId?
  const proposals = await prisma.proposal.findMany();
  return NextResponse.json({ proposals });
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
  return NextResponse.json({ proposal });
}
