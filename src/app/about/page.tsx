import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="layout-md flex flex-col items-start py-10">
      <p className="mb-5">A brief description of me and my interests!</p>
      <div className="mb-5">
        <p className="text-xl font-bold text-black">Computer Science</p>
        <p>
          I've been a competitive programmer since 6th grade, and I've spent way
          too much time on these websites.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <Link
              className="underline"
              href="https://codeforces.com/profile/12tqian"
            >
              Codeforces
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              href="https://www.codechef.com/users/tqian"
            >
              CodeChef
            </Link>
          </li>
          <li>
            <Link className="underline" href="https://atcoder.jp/users/tqian">
              AtCoder
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-10">
        <p className="text-xl font-bold text-black mb-3">Clubs</p>
        At MIT, I joined many clubs/group and met many amazing people.
        <ul className="list-disc list-inside">
          <li>
            <Link href="https://asymptones.mit.edu/" className="underline">
              Asymptones
            </Link>{" "}
            — I never sang before and this was a fun group to start with!
          </li>
          <li>
            <Link href="http://adt.mit.edu/" className="underline">
              MIT Asian Dance Team
            </Link>{" "}
            — 7 semesters of ADT later and my dancing still hasn't
            improved.{" "}
          </li>
          <li>
            <Link
              href="https://web.mit.edu/acmicpc/www/2023/index.html"
              className="underline"
            >
              ICPC
            </Link>{" "}
            — Making sure my algorithm skills haven't completely disappeared.
          </li>
          <li>
            <Link href="https://hackmit.org" className="underline">
              HackMIT
            </Link>{" "}
            — I was on the Dev team and learned web development!
          </li>
          <li>
            <Link
              href="https://bc.mit.edu/floors/burton-5"
              className="underline"
            >
              Burton 5
            </Link>{" "}
            — I act as floor chair and run fun events :)
          </li>
        </ul>
      </div>
      <Image
        src={"/images/faker.png"}
        width={0}
        height={0}
        className={`rounded-lg max-w-full w-full`}
        alt="me"
      />
    </main>
  );
}
