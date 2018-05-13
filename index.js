class Converter {
    // constructor takes integer decimal positive value
    // if not - this.value = 0
    constructor(value) {
        this.value = value;
    }

    /*should return this.value ))0)*/
    get() {

    }

    // method should return radix of this.value as a string:
    // "binary" or "decimal"
    // return "?" if this.value === 0
    // if this.value doesn't have >=1 digits - return "binary"
    systemCheck() {

    }

    // method should convert decimal number to binary and vise versa
    // must be chainable
    reverseConvert() {

    }

    // should convert number to the radix of this.value and sum
    // must be chainable
    plus(number) {

    }

    // similar to plus
    minus(number) {

    }

    // if radix of this.value is binary - must convert to decimal, multyply and get back
    // chainable
    // times always integer decimal number
    multiply(times) {

    }
}

module.exports = {
    Converter
};