import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import DeleteButton from './DeleteButton';
import Button from './Button';

describe('DeleteButton', () => {

  let props;
  let shallowDeleteButton;
  const deleteButton = () => {
    if(!shallowDeleteButton){
      shallowDeleteButton = mount(<DeleteButton {...props}/>);
    }
    return shallowDeleteButton;
  }

  beforeEach(() => {
    props = {
      text: 'delete',
      onClick: undefined
    };
    shallowDeleteButton = undefined
  });

  it('Always renders "Button"', () => {
    const wrapper = deleteButton();
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('Button is labeled "delete"', () => {
    const wrapper = deleteButton();
    expect(wrapper.find('Button').props().text).toBe('delete');
  });

});
