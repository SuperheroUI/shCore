import * as _ from 'lodash';

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
