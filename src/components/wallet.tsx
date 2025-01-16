import { useMemo, useState } from "react";
import {
  ConnectionProvider,
  useWallet,
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
import Airdrop from "./airdrop";
import SendSol from "./sendSol";

function Wallet() {
  const wallet = useWallet();
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Airdrop", component: <Airdrop /> },
    { label: "Send SOL", component: <SendSol /> },
  ];

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

          <div className="flex flex-col mx-auto h-full border rounded-xl bg-gray-200 max-w-5xl shadow-2xl mt-8">
            <div className="flex border-b border-gray-300">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-200 
                    ${
                      activeTab === index
                        ? "bg-white border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-4">{tabs[activeTab].component}</div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default Wallet;
