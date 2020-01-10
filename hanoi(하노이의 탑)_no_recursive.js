//반복문을 활용한 하노이의 탑
//no recursive
const hanoi_noRecursive = (n, from, by, to) => {
    const stack = [];
    while(1){
        while(n > 1){
            stack.push(to);
            stack.push(by);
            stack.push(from);
            stack.push(n);
            n--;
            stack.push(to);
            to = by;
            by = stack.pop();
        }
        console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
        if(stack.length){
            n = stack.pop();
            from = stack.pop();
            by = stack.pop();
            to = stack.pop();
            console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
            n--;
            stack.push(from);
            from = by;
            by = stack.pop();
        } else {
            break;
        }
    }
}
hanoi_noRecursive(3,1,2,3);


// 재귀를 활용한 하노이의 탑
// recursive

const hanoi = (n, from, to) => {
    if (n >= 1) {
        const temp = 6 - from - to;
        hanoi(n-1, from, temp);
        console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
        hanoi(n-1, temp, to);
    }
}

hanoi(3,1,3);