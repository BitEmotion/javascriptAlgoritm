// 재귀
const fibonaci = (x) => {
    if(x < 3) return 1;
    return fibonaci(x-1) + fibonaci(x-2);
};
console.log(fibonaci(7));

// 스택을 활용한 반복
const fibonaci_norecursive = x => {
    const stack = [];
    let i = 0;
    let lastIndex = x - 1;
    while(i <= lastIndex){
        if(i < 2) {
            stack.push(1);
        } else {
            stack.push(stack[i-1] + stack[i-2]);
        }
        i++;
    }
    return stack.pop();
}
console.log(fibonaci_norecursive(7));