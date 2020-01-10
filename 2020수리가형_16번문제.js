const mun16 = (maxD) => {
    let count = 0;
    for(let d = 0; d <= maxD; d++){
        const rightValue = d + 9;

        for(let c = d; c <= rightValue; c++){
            let a = 0;
            let b = rightValue - c - a;
            count++;
            while(b-- != 0){
                a++;
                count++;
            }
        }
    }
    return count;
}

console.log("mun16",mun16(4));