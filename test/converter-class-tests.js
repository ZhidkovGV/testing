let index = require('../index');
let converter = index.Converter;

let chai = require('chai');
let expect = chai.expect;

describe('Converter class', () => {

    describe('Get Method', () => {
        it('should return inner value', function () {
            const testObj = new converter(0);
            expect(testObj.get()).to.be.equal(0)
        });
    });

    describe('Constructor', () => {
        it('should work with integers', function () {
            const testObj = new converter(0);
            expect(testObj.value).to.be.equal(0, 'you must store data in converter.value')
        });
        it('should store 0 if value is not passed', function () {
            const withoutValueObj = new converter();
            expect(withoutValueObj.value).to.be.equal(0, 'is value is not passed it should be 0');
        });
        it('should remove minus from negative numbers', function () {
            const testObj = new converter(-1);
            expect(testObj.value).to.be.equal(1, 'value isnt positive integer')
        });
        it('should work with numbers in string', function () {
            const testObj = new converter('1');
            expect(testObj.value).to.be.an('number').and.to.be.equal(1, 'value is string still')
        });
        it('should work with binary base', function () {
            const binaryTestObj = new converter('01');
            expect(binaryTestObj.value).to.be.equal(1, 'value must be converted to dec');
        });
    });

    describe('System Check Method', () => {
        it('should return string', function () {
            const testObj = new converter(0);
            expect(testObj.systemCheck()).to.be.an('string');
        });
        it('should return "?" if Converter.value is 0', function () {
            const testObj = new converter(0);
            expect(testObj.systemCheck()).to.be.equal('?');
        });
        it('should return "decimal" if value is decimal', function () {
            const testObj = new converter(2);
            expect(testObj.systemCheck()).to.be.equal('decimal', 'should return base name');
        });
        it('should return "binary" if value is binary or looks like binary', function () {
            const testObj = new converter(1);
            expect(testObj.systemCheck()).to.be.equal('binary', 'should return base name');
        });
    });

    describe('Reverse Convert Method', () => {
        it('should be chainable', function () {
            const testObj = new converter(5);
            expect(testObj.reverseConvert()).to.be.instanceOf(converter)
        });
        it('should convert decimal to binary', function () {
            const testObj = new converter(5);
            expect(testObj.reverseConvert().value).to.be.equal('101')
        });
        it('should convert binary to decimal', function () {
            const testObj = new converter(0);
            testObj.value = '101';
            expect(testObj.reverseConvert().value).to.be.equal(5);
        });
        it('should work a lot of times', function () {
            const testObj = new converter(5);
            expect(testObj.reverseConvert().reverseConvert().reverseConvert().value).to.be.equal('101')
        });
    });

    describe('Plus Method', () => {
        it('should be chainable', function () {
            const testObj = new converter(5)
            expect(testObj.plus()).to.be.instanceOf(converter)
        });
        it('should sum dec with dec', function () {
            const testObj = new converter(5);
            expect(testObj.plus(5).value).to.be.equal(10);
        });
        it('should sum bin with bin', function () {
            const testObj = new converter(0);
            testObj.value = '101';
            expect(testObj.plus('01').value).to.be.equal('110');
        });
        it('should sum dec with bin', function () {
            const testObj = new converter(5);
            expect(testObj.plus('01').value).to.be.equal(6)
        });
        it('should sum bin with dec', function () {
            const testObj = new converter(0);
            testObj.value = '101';
            expect(testObj.plus(1).value).to.be.equal('110')
        });
    });

    describe('Minus Method', () => {
        it('should be chainable', function () {
            const testObj = new converter(5);
            expect(testObj.minus()).to.be.instanceOf(converter)
        });
        it('should sum dec with dec', function () {
            const testObj = new converter(5);
            expect(testObj.minus(5).value).to.be.equal(0);
        });
        it('should sum bin with bin', function () {
            const testObj = new converter(0);
            testObj.value = '101';
            expect(testObj.minus('01').value).to.be.equal('100');
        });
        it('should sum dec with bin', function () {
            const testObj = new converter(5);
            expect(testObj.minus('01').value).to.be.equal(4)
        });
        it('should sum bin with dec', function () {
            const testObj = new converter(0);
            testObj.value = '101';
            expect(testObj.minus(1).value).to.be.equal('100')
        });
    });

    describe('Multiply Method', () => {
        it('should be chainable', function () {
            const testObj = new converter(5);
            expect(testObj.multiply()).to.be.instanceOf(converter)
        });
        it('should validate bin numbers', function () {
            const testObj = new converter(5);
            expect(testObj.multiply('10').value).to.be.equal(5);
            expect(testObj.multiply('10')).to.be.instanceOf(converter)
        });
        it('should multiply dec to dec', function () {
            const testObj = new converter(5);
            expect(testObj.multiply(5).value).to.be.equal(25)
        });
        it('should multiply bin to dec', function () {
            const testObj = new converter(2);
            testObj.value = '10';
            expect(testObj.multiply(2).value).to.be.equal('100')
        });
    });
});