import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import Info from "./info";

function Wallet() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <nav className="flex items-center justify-between bg-gray-800 p-4">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">Solana dApp</span>
              <div className="ml-6">
                <Info />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <WalletMultiButton className="!bg-blue-600 hover:!bg-blue-700" />
              <WalletDisconnectButton className="!bg-red-600 hover:!bg-red-700" />
            </div>
          </nav>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default Wallet;
