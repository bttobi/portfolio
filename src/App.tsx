import { Navbar } from './components/ui_elements/navigation';
import { Pages, pagesArray } from './components/pages';
import './index.css';
import { useIntl } from 'react-intl';

const App = () => {
  const intl = useIntl();
  return (
    <main id="app" className="text-primary bg-bg">
      <Navbar items={pagesArray(intl)} />
      <Pages />
    </main>
  );
};

export default App;
