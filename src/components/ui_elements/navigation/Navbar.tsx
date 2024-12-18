import { NavLink } from "./";
import { Logo } from "../logo";
import { PageType } from "../../pages";

interface NavbarProps {
  items: PageType[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="align-center fixed top-0 flex h-16 w-full justify-center gap-10 bg-secondary">
      <Logo />
      {items.map((el) => (
        <NavLink key={el.displayName} {...el} />
      ))}
    </nav>
  );
};

export default Navbar;
