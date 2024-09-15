import { type NextRequest, NextResponse } from 'next/server';

class Contract {
  address: string;
  abi: string[];

  constructor(address: string, abi: string[]) {
    this.address = address;
    this.abi = abi;
  }
}

export async function GET(request: NextRequest) {
  const ETHEREP_ABI = [
    "function balanceOf(address) view returns (uint)",
  ];

  const ETHETIMELOCK_ABI = [
    ""
  ];

  const ETHEGOVERNOR_ABI = [
    ""
  ];

  const chainId = request.nextUrl.searchParams.get('chainId');

  switch (chainId) {
    case "31337":
      const ETHEREP_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const etheREP = new Contract(ETHEREP_ADDRESS, ETHEREP_ABI);

      const ETHETIMELOCK_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const etheTimelock = new Contract(ETHETIMELOCK_ADDRESS, ETHETIMELOCK_ABI);

      const ETHEGOVERNOR_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      const etheGovernor = new Contract(ETHEGOVERNOR_ADDRESS, ETHEGOVERNOR_ABI);

      return NextResponse.json({ etheREP, etheTimelock, etheGovernor });
    default:
      return NextResponse.error();
  }
}