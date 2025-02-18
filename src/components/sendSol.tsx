import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";

export default function SendSol() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = async () => {
    if (!wallet.connected || !wallet.publicKey) {
      console.error("Wallet not connected!");
      return;
    }

    try {
      const recipient = new PublicKey(address);
      const toBeSent = parseFloat(amount) * LAMPORTS_PER_SOL;
      const blockhash = await connection.getLatestBlockhash();

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: recipient,
          lamports: toBeSent,
        })
      );

      transaction.recentBlockhash = blockhash.blockhash;
      transaction.feePayer = wallet.publicKey;

      const signature = await wallet.sendTransaction(transaction, connection, {
        skipPreflight: false,
      });

      await connection.confirmTransaction(signature, "confirmed");

      console.log("Transaction successful:", signature);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  console.log("just checking part 2");

  return (
    <div className="flex items-center justify-center min-h-full p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Transfer your Solana
          </h2>
          <p className="text-gray-600 text-sm">Send Solana to your peers</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount (SOL)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full rounded-md border-gray-300 pl-7 pr-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="0.00"
              min="0"
              step="0.1"
            />

            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Recipient Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="block w-full rounded-md border-gray-300 pl-7 pr-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="Recipient address here"
            />
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-colors"
          >
            Send Solana
          </button>
        </div>
      </div>
    </div>
  );
}
