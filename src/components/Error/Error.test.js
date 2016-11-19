import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Error from './Error';

describe('Error', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.is('div')).toBe(true);
  });

  it('should render the error message', () => {
    const wrapper  = shallow(<Error message="Data could not be loaded" />);
    expect(wrapper.find('.error_message').text()).toBe('Data could not be loaded')
  });
})
