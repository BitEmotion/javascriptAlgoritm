const diagonalDifference = (arr) => {
    let length = arr.length;
    let a = 0, b = 0;
    let count = 0;
    while(length != 0){
        a += arr[length-1][length-1];
        b += arr[length-1][count];
        length--;
        count++;
    }
    return Math.abs(a-b);
}
const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
diagonalDifference(arr);