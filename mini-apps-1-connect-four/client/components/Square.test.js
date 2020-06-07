import React from 'react';
import { shallow } from 'enzyme';

import Square from './Square.jsx';

describe('Square Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Square value="white" move={() => 1} />));

  it('renders the component', () => {
    expect(wrapper.find('.square').length).toEqual(1);
  });
});
