import React from 'react';
import { shallow, mount } from 'enzyme';

import { InputText } from '@buffetjs/core';

import Inputs from '../index';
// import HeadersInput from '../../HeadersInput';
// import EventInput from '../../EventInput';

describe('<Inputs', () => {
  let props;
  beforeEach(() => {
    props = {
      name: 'url',
      type: 'text',
      value: '',
      onBlur: jest.fn(),
      onChange: jest.fn(),
    };
  });

  test('it should not crash', () => {
    shallow(<Inputs {...props} />);
  });
  test('it should render an input text if type is text', () => {
    const wrapper = shallow(<Inputs {...props} />);

    console.log(wrapper);
    expect(wrapper.find('input').exists()).toBe(true);

    expect(true).toEqual(true);
  });
});
