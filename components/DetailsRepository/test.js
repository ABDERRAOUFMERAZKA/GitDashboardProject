import React from 'react';
import DetailsRepository from './index';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<DetailsRepository />).toJSON();
  expect(tree).toMatchSnapshot();
})