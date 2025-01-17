import { useEffect, useState } from "react";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Info() {
  const [balance, setBalance] = useState<number | null>(null);
  const wallet = useWallet();
  const { publicKey } = useWallet();
  const conn = new Connection(clusterApiUrl("devnet"), "confirmed");

  useEffect(() => {
    console.log(publicKey, "ebdfhe");

    const fetchBalance = async () => {
      console.log(wallet.publicKey, "wallet");

      if (wallet?.publicKey) {
        console.log("vner", wallet.publicKey);

        try {
          const balance = await conn.getBalance(wallet.publicKey);
          setBalance(balance / LAMPORTS_PER_SOL);
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
    };
    console.log(balance, "will be ehre");

    fetchBalance();
  }, [wallet?.publicKey, conn]);

  if (!wallet) {
    return <div>wallet not found</div>;
  }

  return (
    <div className="text-white">
      {balance !== null ? (
        <div>Balance: {balance} SOL</div>
      ) : (
        <div className="text-xl text-red-700 ">Not connected </div>
      )}
    </div>
  );
}
