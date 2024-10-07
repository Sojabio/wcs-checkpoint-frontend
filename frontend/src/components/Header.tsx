import Link from "next/link";

export default function Header() {
  return (
    <header className='flex flex-col py-4 text-white bg-wcs-pink w-full items-center justify-center gap-2' >
        <h1 className='font-bold'>Checkpoint : frontend</h1>
        <Link href="/Countries">Countries</Link>
    </header>
  );
}
