const simpleArraySum = (arr) => {
    return arr.reduce((sum,i) => {
        return sum + i
    },0);
}

simpleArraySum([1,2,3,4,5]);
//15