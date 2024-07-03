import App from './App';
import { render } from './tests/unit_and_integration/test-utils';

const setup = () => render(<App />);

describe('Tests App component', () => {
  it('renders the App component', () => {
    const { container } = setup();
    expect(container).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
