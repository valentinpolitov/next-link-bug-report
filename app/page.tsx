import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <Link href="/good">Link to good page</Link>
      <br />
      <Link href="/bad">Link to bad page</Link>
    </>
  );
}
