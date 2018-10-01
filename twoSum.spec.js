const { expect } = require('chai');
const twoSum = require('./twoSum')

describe('twoSum', () => {
    it('Returns empty array if nothing adds to target or no target', () => {
        expect(twoSum([],0)).to.deep.equal([]);
        expect(twoSum([1,2,3],8)).to.deep.equal([]);
    });
    it('Returns indices as an array if sum to target', () => {
        expect(twoSum([1,2,3],5)).to.deep.equal([1,2])
    });
    it('Cannot return same index', () => {
        expect(twoSum([1,2,4],4)).to.deep.equal([]);
    });
    it('Returns first sum', () => {
        expect(twoSum([1,2,3,4,5,6],7)).to.deep.equal([0,5]);
    })
});