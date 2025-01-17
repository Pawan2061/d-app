import { useWallet } from "@solana/wallet-adapter-react";

import { ed25519 } from "@noble/curves/ed25519";
import { useState } from "react";

export default function Message() {
  const { publicKey, signMessage } = useWallet();
  const [message, setMessage] = useState("");
  const handleClick = async () => {
    if (!publicKey) throw new Error("Wallet not connected");
    if (!signMessage) throw new Error("Wallet doesnt support message");
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);
    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes()))
      throw new Error("Message signature invalid!");
  };

  return (
    <div className="flex items-center justify-center min-h-full p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Sign Message </h2>
          <p className="text-gray-600 text-sm">
            Send a sign message to check authenticity
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full rounded-md border-gray-300 pl-7 pr-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="Your message is here"
            />
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
