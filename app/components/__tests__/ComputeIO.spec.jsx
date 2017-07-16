import React from 'react';
import * as Enzyme from 'enzyme';
import { ComputeIO, Input, Output, Button, isClosed } from '../ComputeIO';

describe('ComputeIO', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<ComputeIO />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Input', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<Input />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Output', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<Output />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Button', () => {
  it('should return an element.', () => {
    const wrapper = Enzyme.shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
});

/*   - Examples:
 *     - "^$" => true
 *     - "$^" => false
 *     - "^^$$" => true
 *     - "^$^$" => true
 *     - "^123^abc$$" => true
 */

describe('`isClosed()` function', () => {
  it('returns a boolean', () => {
    expect(isClosed("")).toBe(true);
  });
});

describe('`isClosed()` function with "^$" as input', () => {
  it('should returns true', () => {
    expect(isClosed("^$")).toBe(true);
  });
});

describe('`isClosed()` function with "$^" as input', () => {
  it('should returns false', () => {
    expect(isClosed("$^")).toBe(false);
  });
});

describe('`isClosed()` function with "^^$$" as input', () => {
  it('should returns true', () => {
    expect(isClosed("^^$$")).toBe(true);
  });
});

describe('`isClosed()` function with "^$^$" as input', () => {
  it('should returns true', () => {
    expect(isClosed("^$^$")).toBe(true);
  });
});

describe('`isClosed()` function with "^$$^" as input', () => {
  it('should returns false', () => {
    expect(isClosed("^$$^")).toBe(false);
  });
});

describe('`isClosed()` function with "^123^abc$$" as input', () => {
  it('should returns true', () => {
    expect(isClosed("^123^abc$$")).toBe(true);
  });
});


// describe('ComputeIO input test', () => {
//   it('should return a boolean.', () => {
//     const wrapper = Enzyme.mount(<ComputeIO />);
//     const addInput = wrapper.find('#input').get(0);
//     // addInput.value = "";
//     wrapper.find('#compute').simulate('click');
//     const result = wrapper.find('#output').get(0).innerText;
//     console.log(result);
//     expect(result.toBe(true));
//   });
// });