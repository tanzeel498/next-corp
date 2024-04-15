import Link from 'next/link';

export default function Header() {
  return (
    <div className="absolute z-10 w-full text-white">
      <nav className="container flex-wrap flex items-center justify-between p-8 mx-auto">
        <Link className="font-bold text-3xl" href="/">
          Home
        </Link>
        <div className="space-x-4">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}
