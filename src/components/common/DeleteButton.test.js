import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import DeleteButton from './DeleteButton';

function setup(){
  let props = {
    text: 'delete',
    onClick: () => {}
  };
return shallow(<DeleteButton {...props}/>);
}

describe('DeleteButton', () => {
  it('Delete button renderes ok', () => {
    const wrapper = setup();
    expect(wrapper.find('Button').length).toBe(1);
  });

  it('delete button is labeled "delete"', () => {
    const wrapper = setup();
    expect(wrapper.find('Button').props().text).toBe('delete');
  });
});
