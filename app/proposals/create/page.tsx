"use client";

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react';
import { BrowserProvider, Contract, parseUnits } from 'ethers';

export default function Page() {
  const [status, setStatus] = useState({ message: "", code: 0 });
  const { pending } = useFormStatus();

  const { chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const createHandler = async (formData: FormData) => {
    try {
      // Verify user inputs first before any API requests
      const name = formData.get("name")?.toString() || "";
      const description = formData.get("description")?.toString() || "";
      const target = formData.get("target")?.toString() || "";
      const value = formData.get("value")?.toString() || "";

      if (name.length < 10) throw new Error("Name too short");
      if (description.length < 10) throw new Error("Description too short");
      if (target.length != 42) throw new Error("Invalid target");
      if (!isConnected) throw new Error('User not signed in');

      // Fetch contract addresses and ABIs
      const response = await fetch(`/api/contracts?chainId=${chainId}`);
      const data = await response.json();

      // Setup provider and get signer
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();

      // Setup contract
      const etheGovernor = new Contract(data.etheGovernor.address, data.etheGovernor.abi, ethersProvider);

      // Create transaction
      const transaction = await etheGovernor.connect(signer).propose(
        [target],
        [parseUnits(value, 18)],
        ["0x"],
        description
      );

      // Wait for it to finish
      await transaction.wait();

      // Update status
      setStatus({
        message: "Transaction Successful",
        code: 0
      });
    } catch (error: any) {
      setStatus({
        message: error.message,
        code: -1
      });
    }
  }

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
        <form action={createHandler} className="grid gap-4">
          <label htmlFor="">Name of Proposal</label>
          <input type="text" name="name" placeholder="Name of Proposal" className="p-2" />

          <label htmlFor="">Description of Proposal</label>
          <textarea name="description" id="" placeholder="Description of Proposal" rows={4} cols={50} className="p-2">

          </textarea>

          <label htmlFor="">Target Address</label>
          <input type="text" name="target" placeholder="0xa83114A443dA1CecEFC50368531cACE9F37fCCcb" className="p-2" />

          <label htmlFor="">Expected ETH Value</label>
          <input type="number" name="value" placeholder="1" min={1} max={10} className="p-2" />

          <div className="flex">
            <button type="submit" disabled={pending} className="bg-bluewood-300 text-white font-bold w-32 border-2 border-bluewood-300 rounded p-2 hover:bg-mint-300 hover:text-bluewood-300 transition-all">Propose</button>

            {status && (
              <div className="px-4 content-center">
                <p>{status.message}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
