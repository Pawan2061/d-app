import Info from "./components/info";
import Wallet from "./components/wallet";
import { WalletProvider } from "@solana/wallet-adapter-react";

export default function App() {
  return (
    <div>
      {/* <WalletProvider wallets={[]} autoConnect> */}
      <Wallet />
      {/* <Info /> */}
      {/* </WalletProvider> */}
    </div>
  );
}
