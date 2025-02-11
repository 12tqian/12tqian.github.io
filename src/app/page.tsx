import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center w-full mt-8">
        <div className="flex flex-col w-full items-start">
          <div>
            <p>
              I&apos;m an MEng student at MIT studying Electrical Engineering
              and Computer Science.
            </p>

            <p>I like language models and over-optimizing computer programs.</p>

            <p>
              Please talk to me at tcqian [at] mit [dot] edu if you would like
              to chat!
            </p>
          </div>
        </div>
        <Image
          src="/images/me.jpg"
          alt="Picture of the author"
          className="mt-8"
          width={400}
          height={400}
        />
      </div>
    </main>
  );
}
