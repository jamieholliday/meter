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
    const wrapper = shallow(<Meter min={100} max={200} value={150}/>);
    expect(wrapper.find('.meter_min .meter_text_val').text()).toBe('100');
  });

  it('should display the max value', () => {
    const wrapper = shallow(<Meter min={100} max={200} value={150} />);
    expect(wrapper.find('.meter_max .meter_text_val').text()).toBe('200');
  });

  it('should display the current value', () => {
    const wrapper = shallow(<Meter min={100} max={200} value={150}/>);
    expect(wrapper.find('.meter_value .meter_text_val').text()).toBe('150');
  });

  it('should display currency symbol', () => {
    const wrapper = shallow(<Meter min={50} max={200} value={150} type="currency" unit="USD" />);
    expect(wrapper.find('.meter_min .meter_text_unit').text()).toBe('$');
    expect(wrapper.find('.meter_max .meter_text_unit').text()).toBe('$');
    expect(wrapper.find('.meter_value .meter_text_unit').text()).toBe('$');
  });

  it('should not display a symbol if not units are supplied', () => {
    const wrapper = shallow(<Meter min={50} max={200} value={150} />);
    expect(wrapper.find('.meter_min').childAt(0).hasClass('meter_text_unit')).toBe(false);
    expect(wrapper.find('.meter_max').childAt(0).hasClass('meter_text_unit')).toBe(false);
    expect(wrapper.find('.meter_value').childAt(0).hasClass('meter_text_unit')).toBe(false);
  });

  it('should display a symbol', () => {
    const wrapper = shallow(<Meter min={50} max={200} value={150} unit="ABC" />);
    expect(wrapper.find('.meter_min .meter_text_unit').text()).toBe('ABC');
    expect(wrapper.find('.meter_max .meter_text_unit').text()).toBe('ABC');
    expect(wrapper.find('.meter_value .meter_text_unit').text()).toBe('ABC');
  });

  it('should display a currency symbol based on the unit type', () => {
    const wrapper = shallow(<Meter min={50} max={200} value={150} type="currency" unit="GBP" />);
    expect(wrapper.find('.meter_min .meter_text_unit').text()).toBe('£');
    expect(wrapper.find('.meter_max .meter_text_unit').text()).toBe('£');
    expect(wrapper.find('.meter_value .meter_text_unit').text()).toBe('£');
  });

  it('should rotate the need to the correct position', () => {
    const wrapper = shallow(<Meter min={100} max={200} value={150} />);
    expect(wrapper.find('.meter_needle_group').prop('style')['transform']).toBe('rotate(90deg)')
  });

  it('should not go past minimum bounds', () => {
    const wrapper = shallow(<Meter min={100} max={200} value={50} />);
    expect(wrapper.find('.meter_needle_group').prop('style')['transform']).toBe('rotate(0deg)');
  });

  it('should not go past maximum bounds', () => {
    const wrapper = shallow(<Meter min={100} max={200} value={250} />);
    expect(wrapper.find('.meter_needle_group').prop('style')['transform']).toBe('rotate(180deg)');
  });

  it('should show a loading indicator', () => {
    const wrapper = shallow(<Meter loading />);
    expect(wrapper.find('.meter_loader').is('div')).toBe(true)
  });

})
