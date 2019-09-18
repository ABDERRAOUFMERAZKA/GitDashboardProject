import React from 'react';
import InputForm from './index';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<InputForm />).toJSON();
  expect(tree).toMatchSnapshot();
})