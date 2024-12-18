import React from "react";
import { Navbar } from "./components/ui_elements/navigation";
import { Pages, pagesArray } from "./components/pages";
import "./index.css";
import { useIntl } from "react-intl";

const App = () => {
  const intl = useIntl();
  return (
    <main id="app" className="h-17 w-16 bg-bg bg-black text-primary ">
      <Navbar items={pagesArray(intl)} />
      <Pages />
    </main>
  );
};

export default App;
