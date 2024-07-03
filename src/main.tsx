import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { IntlProvider } from 'react-intl';
import englishMessages from '../src/locale/en.json';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <IntlProvider messages={englishMessages} locale="en" defaultLocale="en">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProvider>
);
