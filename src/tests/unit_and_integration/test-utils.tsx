import { render, RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import englishMessages from '../../locale/en.json';

interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
  return (
    <IntlProvider messages={englishMessages} locale="en">
      {children}
    </IntlProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
