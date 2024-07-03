import { NavLink } from './';
import { Logo } from '../logo';
import { PageType } from '../../pages';

interface NavbarProps {
  items: PageType[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="w-full h-16 bg-secondary flex justify-center align-center gap-10 fixed top-0">
      <Logo />
      {items.map(el => (
        <NavLink key={el.displayName} {...el} />
      ))}
    </nav>
  );
};

export default Navbar;
