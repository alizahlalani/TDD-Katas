const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns phrase broken into lines based on column number', ()=>{
      expect(wrap("The cat ran", 4)).to.equal("The\ncat\nran")
  });

  it('Does not break inbetween word', ()=>{
    expect(wrap("The cat ran", 5)).to.equal("The\ncat\nran")
  });
});