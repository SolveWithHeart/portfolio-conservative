import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="mx-auto max-w-screen-xl border-b border-gray-300">
      <div className="flex justify-between">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />
        <div className="flex items-center justify-between">
          <nav>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link
                  href="/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/about/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/guestbook/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Guestbook
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/portfolio/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Portfolio
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/blog/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li className="mr-6">
                <a
                  className="border-none text-gray-700 hover:text-gray-900"
                  href="https://github.com/ixartz/Next-js-Boilerplate"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link
                  href="/sign-in/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Header };
