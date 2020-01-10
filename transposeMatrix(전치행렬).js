const transposeMatrix = arr => {
    const retArr = [];
    const temp = [];
    for(let i = 0; i < arr[0].length; i++){
        for(let j = 0; j < arr.length; j++){
            temp.push(arr[j][i]);
        }
        retArr.push(temp.concat());
        let t = temp.length;
        while(t-- != 0){
            temp.pop();
        }
    }
    return retArr;
}
const arr = [[1,1,1,1],[-3,5,-2,7]];
console.log(transposeMatrix(arr));