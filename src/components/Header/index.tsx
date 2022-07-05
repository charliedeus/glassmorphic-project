import Link from 'next/link';
import Logo from '../Logo';

export function Header() {
  return (
    <header className="w-[1440px] max-w-[1440px] h-[14rem] mx-auto flex items-center justify-between fixed top-0 left-0 right-0">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul className="flex gap-16 font-bold">
          <li>
            <Link href="/">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Screenshots</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Partners</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
