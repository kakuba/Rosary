import React from 'react';
import { shallow } from 'enzyme';

import Test from '../../../client/components/Test';

test('Test first test', () => {
  // Render a test with label in the document
  const test = shallow(<Test/>);

  expect(test.text()).toEqual('Test');
});
