const factorial = (n) => {
    if(n == 1){
        return 1;
    }
    
    let prev = n;
    while(n > 1){
        prev = prev * (n-1);
        n--;
    }
    return prev;
}
console.log("factorial",factorial(5));
//120