import should from 'should/as-function';
import index from '../';
import ComplexClass from './fixtures/ComplexClass';
const { describe, it } = global;
import bareHtml from './bareHtml/test';
import basicPreset from './basicPreset/test';

describe('sanity', () => {
  it('shouldjs should not extend Object.prototype', () => should(Object.prototype).not.have.property('should'));
  it('Complex class transforms should work', () => {
    const TEN = 10;
    const THIRTYFIVE = 35;
    const inst = new ComplexClass(TEN);
    should(inst).be.an.instanceOf(ComplexClass);
    should(inst.v).be.exactly(TEN);
    const multiplyByFortyFive = inst.multiplyByFortyFive;
    should(multiplyByFortyFive()).be.exactly(TEN * THIRTYFIVE);
    should(ComplexClass.multiplyByFortyFive(TEN)).be.exactly(TEN * THIRTYFIVE);
  });
});

describe('index', () =>
  it('should export an object', () => should(index).be.an.Object())
);

describe('compile samples', () => {
  describe('bareHtml', bareHtml);
  describe('basicPreset', basicPreset);
});
