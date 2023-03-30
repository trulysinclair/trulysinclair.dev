import Image from "next/image";
import sinclair from "../assets/forge-dark.svg";

export default function Home() {
  return (
    <main
      className={
        "flex flex-col items-center justify-center text-white bg-zinc-50 prose max-w-full h-screen"
      }
    >
      <div className="not-prose relative h-36 w-36 rounded-full overflow-hidden mb-6">
        <Image src={sinclair} alt="Under Construction" fill priority />
      </div>
      <h1 className="text-zinc-900 font-mono drop-shadow">Under Maintenance</h1>
      <pre className="text-zinc-900 shadow-inner shadow-zinc-200 bg-zinc-50 border-zinc-200 border flex">
        <span className="rotate-180">
          <span className="rotate-90 not-prose block">
            <span className="animate-bounce block">V</span>
          </span>
        </span>
        &nbsp;Be back soon!
      </pre>
    </main>
  );
}
