let a = 50;
let d = -4;
let arr = [];

let m = 1;
let prev_sum = 0;
let curr_sum = 0;
while(1){
    let k = m + 4;
    while(k != (m-1)){
        curr_sum += a + (k-1) * d;
        k--;
    }
    if(curr_sum < prev_sum){
        break;
    }
    prev_sum = curr_sum;
    m++;
}

console.log("m의 값",m-1);