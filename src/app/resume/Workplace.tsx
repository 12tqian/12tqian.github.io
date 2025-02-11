import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Mail } from "lucide-react";

interface WorkplaceProps {
  title: string;
  company: string;
  dates: string;
  location: string;
  url: string;
  children: React.ReactNode;
}

const Workplace: React.FC<WorkplaceProps> = ({
  title,
  company,
  dates,
  location,
  url,
  children,
}) => {
  return (
    <div className="mb-8 w-full">
      <h3 className="text-black text-lg leading-tight mb-1">
        {title} at{" "}
        <Link href={url} className="text-gray-500 underline">
          {company}
        </Link>
      </h3>
      <p className="font-light mb-2 justify-between flex w-full text-gray-500">
        <span className="whitespace-nowrap">{location}</span>
        <span className="whitespace-nowrap">{dates}</span>
      </p>
      {children}
    </div>
  );
};

export { Workplace };
