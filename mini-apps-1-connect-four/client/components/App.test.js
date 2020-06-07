import React from 'react';
import { shallow } from 'enzyme';

import App from './App.jsx';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('renders the component', () => {
    expect(wrapper.find('.app').length).toEqual(1);
  });
});
