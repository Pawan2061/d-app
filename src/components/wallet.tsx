import { useMemo, useState } from "react";
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
import Airdrop from "./airdrop";
import SendSol from "./sendSol";
import Message from "./message";
import { Menu } from "lucide-react";

function Wallet() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { label: "Airdrop", component: <Airdrop /> },
    { label: "Send SOL", component: <SendSol /> },
    { label: "Send a message", component: <Message /> },
  ];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <nav className="bg-gray-800 p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-white text-xl font-bold">
                    Solana dApp
                  </span>
                  <div className="hidden md:block">
                    <Info />
                  </div>
                </div>
                <button
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu size={24} />
                </button>
              </div>

              <div className="md:hidden mt-2">
                <Info />
              </div>

              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } md:block mt-4 md:mt-0`}
              >
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ">
                  <WalletMultiButton className="!bg-blue-600 hover:!bg-blue-700" />
                  <WalletDisconnectButton className="!bg-red-600 hover:!bg-red-700 " />
                </div>
              </div>
            </div>
          </nav>

          <div className="p-4">
            <div className="flex flex-col mx-auto h-full border rounded-xl bg-gray-200 max-w-5xl shadow-2xl">
              <div className="flex flex-col sm:flex-row border-b border-gray-300 overflow-x-auto">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 sm:px-6 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap
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

              <div className="p-4 overflow-x-auto">
                {tabs[activeTab].component}
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default Wallet;
