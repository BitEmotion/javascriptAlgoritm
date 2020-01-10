const gcd = (minNum, maxNum) => {
    let ret_answer = 0;
    const stack = [];
    stack.push({
        minNum,
        maxNum
    })
    while(prev = stack.pop()){
        const {minNum:_minNum, maxNum:_maxNum } = prev;
        if((_minNum % _maxNum) == 0){
            ret_answer = _maxNum;
            break;
        }
        stack.push({
            minNum:_maxNum,
            maxNum:_minNum %_maxNum
        });
    }
    return ret_answer;
}
console.log("gcd 8, 12 = ", gcd(8,12));
console.log("gcd 20, 10 = ", gcd(20,10));