import Pages from './Pages';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import { IntlShape } from 'react-intl';

interface PageType {
  displayName: string;
  link?: string;
  path?: string;
  element?: React.ReactNode;
}

const pagesArray: (intl: IntlShape) => PageType[] = intl => [
  {
    displayName: intl.formatMessage({
      id: 'home',
      defaultMessage: 'home',
    }),
    element: <Home />,
  },
  {
    displayName: intl.formatMessage({
      id: 'about',
      defaultMessage: 'about',
    }),
    element: <About />,
  },
  {
    displayName: intl.formatMessage({
      id: 'contact',
      defaultMessage: 'contact',
    }),
    element: <Contact />,
  },
  {
    displayName: intl.formatMessage({
      id: 'resume',
      defaultMessage: 'resume',
    }),
    link: 'https://www.google.com',
  },
];

export { pagesArray, Pages, About, Home, Contact };
export type { PageType };
