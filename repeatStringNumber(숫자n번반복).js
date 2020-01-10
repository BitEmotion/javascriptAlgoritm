const repeat = (str, n) => {
    let result = '';
    while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
    }
    return result;
};

repeat("12345",3);