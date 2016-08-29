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
            let className = _.kebabCase(key);
            if (_.isFunction(check)) {
                if (check()) {
                    classNames.push(className);
                }
            } else if (_.isString(check)) {
                if (className === 'include' || _.includes(check, ' ')) {
                    classNames = _.concat(classNames, check.split(' '));
                } else {
                    classNames.push(className + '-' + _.kebabCase(check));
                }
            } else if (check) {
                classNames.push(className);
            }
        }
    }

    classNames = _.uniq(classNames);

    return classNames.join(' ');
}

export default getClassNames;
