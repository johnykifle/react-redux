import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Button from './Button';

function setup(){
  let props = {
    onClick: () => {},
    text: 'mybutton',
    type: 'primary'
  };
  return shallow(<Button {...props}/>);
}
describe('Button', () => {
  it('renders button', () => {
    const wrapper = setup();
    expect(wrapper.find('button').length).toBe(1);
  });

  it('renders a primary type of button', () => {
    const wrapper = setup();
    expect(wrapper.find('.btn.btn-primary').length).toBe(1);
  });

  it('renders a not delete type of button', () => {
    const wrapper = setup();
    expect(wrapper.find('.btn.btn-delete').length).toBe(0);
  });
});
