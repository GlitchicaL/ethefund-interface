// Import our ABIs
import EtheREP from '@/app/artifacts/EtheREP.json';
import EtheTimelock from '@/app/artifacts/EtheTimelock.json';
import EtheGovernor from '@/app/artifacts/EtheGovernor.json';

// This is not to be confused with an Ethers Contract class
// This is a custom Contract class to handle it's address & ABI
class Contract {
  address: string;
  abi: string[];

  constructor(address: string, abi: string[]) {
    this.address = address;
    this.abi = abi;
  }
}

export function getAddresses(chainId: number) {
  // The idea here is that we could handle different
  // chainIds and return the appropriate addresses
  switch (chainId) {
    case 31337:
      const ETHEREP_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const ETHEREP_ABI = EtheREP;

      const ETHETIMELOCK_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const ETHETIMELOCK_ABI = EtheTimelock;

      const ETHEGOVERNOR_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      const ETHEGOVERNOR_ABI = EtheGovernor;

      const etheREP = new Contract(ETHEREP_ADDRESS, ETHEREP_ABI);
      const etheTimelock = new Contract(ETHETIMELOCK_ADDRESS, ETHETIMELOCK_ABI);
      const etheGovernor = new Contract(ETHEGOVERNOR_ADDRESS, ETHEGOVERNOR_ABI);

      return { etheREP, etheTimelock, etheGovernor };
  }
}

export function getProvider(chainId: number) {
  // The idea here is that we could handle different
  // chainIds and return the appropriate RPC URL
  switch (chainId) {
    case 31337:
      return "http://127.0.0.1:8545";
  }
}