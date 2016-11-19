import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Meter from './Meter';

describe('Meter', ()=> {
  it('renders without crashing', () => {
    const wrapper = shallow(<Meter />);
    expect(wrapper.is('div')).toBe(true);
  });

  it('should render a title', ()=> {
    const wrapper = shallow(<Meter title="Currency" />);
    expect(wrapper.find('.meter_title').text()).toBe('Currency');
  });

  it('should draw the dial', () => {
    const wrapper = shallow(<Meter min={178} max={772} value={59} />);
    expect(wrapper.find('.meter_content').childAt(0).is('svg')).toBe(true);
  });

  it('should render an error', () => {
    const wrapper = shallow(<Meter error />);
    expect(wrapper.find('.meter_content').childAt(0).is('Error')).toBe(true);
  });

  it('should display the min value', () => {
    const wrapper = shallow(<Meter min={100} />);
    expect(wrapper.find('.meter_min').text()).toBe('100');
  });

  it('should display the max value', () => {
    const wrapper = shallow(<Meter max={200} />);
    expect(wrapper.find('.meter_value').text()).toBe('200');
  });
})
