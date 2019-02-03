import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

test('App component renders correctly', () => {
  const component = shallow(<App />);
  expect(component.exists()).toBe(true);
});
