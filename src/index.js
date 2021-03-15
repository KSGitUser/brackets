module.exports = function check(str, bracketsConfig) {
    let result = [];
    const equalBrackets = [];
    if (str.length % 2 !== 0) {
        return false;
    }
    str.split('').map(char => {
        bracketsConfig.map(brArrow => {
            if (brArrow[0] === char) {
                if (brArrow[0] === brArrow[1]) {
                    if (!equalBrackets.includes(brArrow[0])) {
                        equalBrackets.push(brArrow[0]);
                    }
                    if (result.length && result[result.length - 1] === brArrow[0]) {
                        result.pop();
                        return;
                    }
                    result.push(char);
                    return;
                }
                result.push(char);
                return;
            } else {
                if (brArrow[1] === char) {
                    try {
                        if (brArrow[0] === result[result.length - 1]) {
                            result.pop();
                        }
                    } catch (e) {
                        return false;
                    }
                }
            }
        })
    });

    let finallResult = [];

    if (result.length && equalBrackets.length) {
        for (let index = 0; index < result.length; index++) {
            let item = result[index];
            if ([...result.slice(index + 1)].includes(item)) {
                return false;
            }
            if (!equalBrackets.includes(item)) {
                finallResult.push(item);
            }
        }
        result = [];
    }

    return result.length === 0 && finallResult.length === 0 ? true : false;
}
