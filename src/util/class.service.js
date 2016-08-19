var utilClasses = {
    getClassNames(classObject) {
        var classNames = [];

        for (var key in classObject) {
            if (classObject.hasOwnProperty(key)) {
                if (classObject[key]) {
                    classNames.push(key);
                }
            }
        }

        return classNames.join(' ');
    }
};

export default utilClasses;
