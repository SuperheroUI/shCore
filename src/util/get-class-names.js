import * as _ from 'lodash';

/**
 * Get a string of classNames from the object passed in. Uses the keys for class names and only adds them if the value is true. Value of keys can be boolean, function, or strings. Functions are evaluated on call. Strings are appended to end of key.
 *
 * @param {object} classObject Object containing keys of class names.
 * @returns {string}
 */
function getClassNames(classObject) {
    var classNames = [];

    for (var key in classObject) {
        if (classObject.hasOwnProperty(key)) {
            let check = classObject[key];
            if (_.isBoolean(check) && check) {
                classNames.push(key);
            } else if (_.isFunction(check) && check()) {
                classNames.push(key);
            } else if (_.isString(check)) {
                classNames.push(key + '-' + check);
            }
        }
    }

    return classNames.join(' ');
}

export default getClassNames;
