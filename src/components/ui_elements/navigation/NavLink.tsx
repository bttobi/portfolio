import { PageType } from '../../pages';
import { openInNewTab } from '.';

const NavLink: React.FC<PageType> = ({ displayName, link }) => {
  const title = `Go to ${displayName} page`;
  return (
    <button
      title={title}
      aria-label={title}
      className="transition duration-150 hover:text-contrast"
      onClick={() => link && openInNewTab(link)}
    >
      {displayName}
    </button>
  );
};

export default NavLink;
