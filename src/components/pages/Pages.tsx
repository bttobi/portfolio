import { useIntl } from 'react-intl';
import { pagesArray } from '.';
import { Section } from '../ui_elements/section';

const Pages = () => {
  const intl = useIntl();
  return (
    <>
      {pagesArray(intl).map(
        el =>
          !!el.element && <Section key={el.displayName}>{el.element}</Section>
      )}
    </>
  );
};

export default Pages;
