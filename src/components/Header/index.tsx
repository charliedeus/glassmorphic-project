import Logo from '../Logo';

export function Header() {
  return (
    <header className="w-[1440px] max-w-[1440px] h-[14rem] mx-auto flex items-center justify-between fixed top-0 left-0 right-0">
      <Logo />

      <nav>
        <ul className="flex gap-16 font-bold">
          <li>Features</li>
          <li>Screenshots</li>
          <li>Partners</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}
