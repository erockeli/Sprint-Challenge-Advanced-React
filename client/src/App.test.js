import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('darkmode', () => {
  let clicked = false;
  const { getByText } = render(<App darkmode={() => clicked = true} />);
  const toggleDark = getByText(/custom hook/i);
fireEvent.click(toggleDark);
expect(clicked).toBe(false);

});

it('darkmode', () => {
  let clicked = true;
  const { getByText } = render(<App darkmode={() => clicked = true} />);
  const toggleDark = getByText(/custom hook/i);
fireEvent.click(toggleDark);
expect(clicked).toBe(true);

});