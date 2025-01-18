import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4  mb-0">
      <div className="container mx-auto flex items-center justify-center gap-6">
        <div className="h-px w-20 bg-gray-300"></div>
        <a
          href="https://cryptowallet-nu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 border p-2 rounded-2xl bg-gray-200  hover:text-gray-900 transition-colors"
        >
          <Globe size={20} />
        </a>
        <div className="h-px w-20 bg-gray-300"></div>
      </div>
    </footer>
  );
};

export default Footer;
