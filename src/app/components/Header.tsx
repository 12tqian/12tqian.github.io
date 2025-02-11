"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

const Navlink: React.FC<{
  href: string;
  label: string;
}> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-black" : "text-gray-500"
      } hover:text-black`}
    >
      {label}
    </Link>
  );
};

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Resume",
    href: "/resume",
  },
];

const Header: React.FC = () => {
  let pageTitle: string | null = null;
  const pathname = usePathname();

  links.forEach((link) => {
    if (link.href === pathname) {
      pageTitle = link.name;
    }
  });

  return (
    <main className="w-full max-w-3xl flex justify-between items-start px-6">
      {/* why does this need to be hardcoded :( */}
      <div className="text-xl">
        <Link href="/" className="text-black font-bold">
          Timothy Qian
        </Link>
        {pageTitle && <span className="text-black"> — {pageTitle}</span>}
      </div>
      <ul className="flex space-x-6 items-center text-black">
        {links.map((link) => (
          <li key={link.href} className="block ">
            <Navlink href={link.href} label={link.name} />
          </li>
        ))}
        {/* <li className="hidden md:block">
                <Navlink href="/" label="Home" />
              </li> */}
      </ul>
    </main>
  );
};

export { Header };
