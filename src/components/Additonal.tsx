import { ArrowDownFromLine } from "lucide-react";

export default function Additional() {
  return (
    <div className="flex flex-col items-center     mt-9 gap-4">
      <h1 className="text-black text-xl font-semibold animate-pulse">
        In case you need a dummy solana acc address
      </h1>
      <div className="animate-bounce ">
        <ArrowDownFromLine />
      </div>
    </div>
  );
}
