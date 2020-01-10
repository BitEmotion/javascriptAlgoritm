const prr =[-4, 3, -9, 0, 4, 1];
const plusMinus = (arr) => {
    let length = arr.length, cLength = arr.length;
    let cPlus = 0 ,cMinus = 0, cZero = 0;
    let retPlus = 0, retMinus = 0, retZero = 0
    while(cLength != 0) {
        if(arr[cLength - 1] == 0){
            cZero++;
        } else if(arr[cLength - 1] < 0){
            cMinus++;
        } else {
            cPlus++;
        }
        cLength--;
    }
    retPlus = cPlus/length;
    retMinus = cMinus/length;
    retZero = cZero/length;
    return [retPlus, retMinus, retZero];

}
const result = plusMinus(prr);
console.log(result);