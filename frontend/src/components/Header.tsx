import Link from "next/link";

export default function Header() {
  return (
    <header className='p-2 mt-10 bg-blue-500' >
      <h1>Checkpoint : frontend</h1>
      <Link href="/Countries">Countries</Link>
    </header>
  );
}
