import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export default function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  return (
    <div className="flex items-center justify-center min-h-full p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">Solana Airdrop</h2>
          </div>
          <p className="text-gray-600 text-sm">
            Request SOL tokens for testing on the devnet
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount (SOL)
            </label>
            <div className="relative rounded-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">◎</span>
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                className="block w-full rounded-md border-gray-300 pl-7 pr-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                placeholder="0.00"
                min="0"
                step="0.1"
              />
            </div>
            <p className="text-xs text-gray-500">
              Maximum 2 SOL per request on devnet
            </p>
          </div>

          {/* <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Current Balance</div>
            <div className="text-lg font-medium">◎ 0.00 SOL</div>
          </div> */}

          <button className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-colors">
            Request Airdrop
          </button>
        </div>
      </div>
    </div>
  );
}