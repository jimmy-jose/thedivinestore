import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/st-alphonsa.jpg" alt="St. Alphonsa" width={50} height={50} className="rounded-full" />
        </Link>
        <h1 className="text-xl ml-4">St. Alphonsa&apos;s Divine Store</h1>
      </div>
    </header>
  );
};

export default Header;
