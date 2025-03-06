import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Mail, GraduationCap } from "lucide-react";
const Footer: React.FC = () => {
  return (
    <footer className="layout-md py-4">
      <div className="flex flex-col items-center">
        <hr className="w-64 border-t border-gray-300 mb-4" />
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/12tqian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
          >
            <FiGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/12tqian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
          >
            <FiLinkedin size={24} />
          </Link>
          <Link
            href="mailto:tcqian@mit.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
          >
            <Mail size={24} />
          </Link>
          <Link
            href="https://scholar.google.com/citations?user=bX26j7UAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
          >
            <GraduationCap size={24} />
          </Link>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Design inspired by{" "}
          <Link href="https://www.ekzhang.com" className="underline">
            {" "}
            Eric Zhang
          </Link>{" "}
          :)
        </p>
      </div>
    </footer>
  );
};

export { Footer };
