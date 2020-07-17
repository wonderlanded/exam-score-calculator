import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { getByText } = render(<App />);
  const header = getByText('시험 점수 계산기')
  expect(header).toBeInTheDocument();
});
