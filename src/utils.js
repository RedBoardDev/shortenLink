function toBase62(num) {
    let result = '';
    do {
        result = chars[num % 62] + result;
        num = Math.floor(num / 62);
    } while (num > 0);

    return result;
}

function fromBase62(str, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    let len = str.length;
    let result = 0;
    let base = chars.length;

    for (let i = 0; i < len; i++) {
        let charIndex = chars.indexOf(str[i]);
        result += charIndex * Math.pow(base, len - i - 1);
    }

    return result;
}
