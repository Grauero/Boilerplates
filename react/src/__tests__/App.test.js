import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

test('App component renders correctly', () => {
  const component = shallow(<App />);
  expect(component.html()).toBeTruthy();
});
