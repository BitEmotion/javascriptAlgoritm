const compareTriplets = (aArr, bArr) => {
    let length = aArr.length;
    let aWard = 0, bWard = 0; 
    while(length != 0){
        if(aArr[length - 1] > bArr[length - 1]){
            aWard++;
        } else if(aArr[length - 1] < bArr[length - 1]){
            bWard++;
        }
        length--;
    }
    return [aWard, bWard];
}
compareTriplets([5, 6, 7], [3, 6, 10]);
//1 1
compareTriplets([17, 28, 30], [99, 16, 8]);
//2 1