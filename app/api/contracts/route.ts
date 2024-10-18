import { type NextRequest, NextResponse } from 'next/server';

// Address helper
import { getAddresses } from '@/app/config/helpers';

export async function GET(request: NextRequest) {
  const chainId = request.nextUrl.searchParams.get('chainId');
  const contracts = getAddresses(Number(chainId));
  return NextResponse.json(contracts);
}