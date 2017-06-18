require('mocha');
const chai = require('chai');
const chaiFiles = require('chai-files');
const file = chaiFiles.file;
const expect = chai.expect;
const compiledDir = 'samples/compiled/';
const expectedDir = 'tests/expected/';

chai.use(chaiFiles);

describe('Compilation', () => {

  /**
   * Index
   */
  it('should compile index', () => {
    expectFile('index.md');
  });

  /**
   * Basic types
   */
  it('should compile basic types', () => {
    expectFile('modules/_basic_types_.md');
  });
});

function expectFile(fileName) {
  expect(file(`${compiledDir}${fileName}`)).to.equal(file(`${expectedDir}${fileName}`));
}
