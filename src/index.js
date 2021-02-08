exports.min = function min(array) {
    let result = 0;
    if (array && array.length > 0) {
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < result) {
                result = array[i];
            }
        }
    }
    return result;
}

exports.max = function max(array) {
    let result = 0;
    if (array && array.length > 0) {
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > result) {
                result = array[i];
            }
        }
    }
    return result;
}

exports.avg = function avg(array) {
    let result = 0;
    if (array && array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        result /= array.length;
    }
    return result;
}
