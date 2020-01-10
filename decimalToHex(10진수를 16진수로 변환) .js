const toHex = (n) => {
    if (n < 16) return '0' + n.toString(16)
    return n.toString(16)
}

toHex(2107);
//"83b"
toHex(6598453);
// "64af35"