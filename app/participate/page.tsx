"use client";

import { useFormStatus } from 'react-dom';

// Import Ethers
import { BrowserProvider, Contract, parseUnits, formatUnits } from 'ethers'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react';

// Import Contracts
import { ETHEREP } from '../utils/addresses';
import { ETHEREP_ABI } from '../utils/abis';
import { useEffect, useState } from 'react';

export default function Page() {
  const { pending } = useFormStatus();
  const { address, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider();

  const [balance, setBalance] = useState("0");

  const getBalance = async () => {
    const ethersProvider = new BrowserProvider(walletProvider);
    const etheRepContract = new Contract(ETHEREP, ETHEREP_ABI, ethersProvider);
    const balance = await etheRepContract.balanceOf(address);
    setBalance(formatUnits(balance, 18));
  }

  const transferHandler = async (formData: FormData) => {
    const recipient = formData.get('recipient')?.toString() || "";
    const amount = formData.get('amount')?.toString() || "";

    try {
      // TODO: Error handle this!
      // Make sure form fields are valid
      if (amount === "") return;
      if (recipient.length != 42) return;

      // Get provider & signer
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();

      // Setup contract & perform transaction
      const etheRepContract = new Contract(ETHEREP, ETHEREP_ABI, signer);
      await (await etheRepContract.transfer(recipient, parseUnits(amount, 18))).wait();

      // Fetch and update balance
      await getBalance();
    } catch (error) {
      return; // TODO: Error handle this!
    }
  }

  useEffect(() => {
    if (isConnected) {
      getBalance();
    }
  }, [isConnected]);

  return (
    <div className="col-span-full min-h-[84dvh] grid grid-cols-12 gap-4 content-start">
      <h1 className="text-3xl font-bold my-6">Participate</h1>

      <div className="col-span-full">
        <p>Current Balance: {balance}</p>
      </div>

      <div className="col-span-full grid grid-cols-12 gap-4">
        <div className="col-span-full sm:col-span-6 border-2 border-bluewood-300 rounded p-4">
          <h2 className="text-lg font-bold mb-4">Transfer EtheREP</h2>

          {/* Form to handle transferring tokens */}
          <form action={transferHandler} className="grid grid-cols-2 gap-2">
            {/* Get recipient address */}
            <label htmlFor="recipient" className="content-center">Transfer To:</label>
            <input type="text" id="recipient" name="recipient" required placeholder="0x0...0000" className="p-1 rounded" />

            {/* Get amount to transfer */}
            <label htmlFor="amount" className="content-center">Transfer Amount:</label>
            <input type="number" id="amount" name="amount" min={1} required placeholder="1" className="p-1 rounded" />

            {/* Submit */}
            <button type="submit" disabled={pending} className="col-start-2 bg-bluewood-300 text-white font-bold border-2 border-bluewood-300 rounded p-1 hover:bg-mint-300 hover:text-bluewood-300 transition-all">Transfer</button>
          </form>
        </div>

        <div className="col-span-full sm:col-span-6 border-2 border-bluewood-300 rounded p-4">
          <h2 className="text-lg font-bold mb-4">Donate ETH</h2>
          <p>Coming Soon!</p>
        </div>
      </div>
    </div>
  );
}
