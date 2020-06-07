import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board.jsx';

const values = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null]
];

describe('Board Component', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Board boardValues={values} move={() => 1} />));

  it('renders the component', () => {
    expect(wrapper.find('.board').length).toEqual(1);
  });
});
