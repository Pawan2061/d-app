import Additional from "./components/Additonal";
import Footer from "./components/footer";
import Wallet from "./components/wallet";
import { Buffer } from "buffer";
globalThis.Buffer = Buffer;

export default function App() {
  return (
    <div>
      {/* <WalletProvider wallets={[]} autoConnect> */}
      <Wallet />
      {/* <Info /> */}
      <Additional />
      <Footer />
      {/* </WalletProvider> */}
    </div>
  );
}
