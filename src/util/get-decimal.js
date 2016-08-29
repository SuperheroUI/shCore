import * as _ from 'lodash';

/**
 * Get a decimal value from a string or number, remove any unnecessary characters.
 *
 * @param {string} value Alpha characters will be removed and a decimal will be returned. For example if you give it 'b.123' 0.123 will be returned.
 * @returns {number}
 */

function getDecimal(value) {
    if (!value) {
        return 0;
    }

    var num = value;
    if (!_.isNumber(value)) {
        var isNeg = ('-' && _.includes(value, '-'));

        var regExp = '[^0-9.]';
        var numString = value.toString().replace(new RegExp(regExp, 'g'), '');

        var numList = numString.split('.');

        // numList will always have at least one value in array because we checked for an empty string earlier.
        numList[0] += '.';
        numString = numList.join('');
        num = parseFloat(numString);

        if (!num) {
            num = 0;
        } else if (isNeg) {
            num *= -1;
        }
    }

    return num;
}

export default getDecimal;
