import React from 'react';
import Head from './index';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Head />).toJSON();
  expect(tree).toMatchSnapshot();
})