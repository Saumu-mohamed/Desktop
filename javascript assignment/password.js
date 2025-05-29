function countDigits(password) {
    let digitCount = 0;
    for (let char of password) {
        if (char >= '0' && char <= '9') {
            digitCount++;
        }
    }
    return digitCount;
}

const password = "yourPassword123";
const digits = countDigits(password);
console.log(`Password contains ${digits} digit(s)`);
