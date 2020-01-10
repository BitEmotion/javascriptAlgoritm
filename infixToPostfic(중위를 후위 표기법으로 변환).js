//참고 자료
//https://m.blog.naver.com/PostView.nhn?blogId=ndb796&logNo=220654116881&proxyReferer=https%3A%2F%2Fwww.google.com%2F


const infixToPostfix = str => {
    const stack = [];
    let i = 0;
    let newStr = '';
    while(i < string.length){
        if(parseInt(str[i])){
            newStr = newStr.concat(str[i]);
        } else {
            let temp;
            switch(str[i]){
                case '+': case '-':
                    if(stack.length == 0){
                        stack.push(str[i]);
                        break;
                    }
                    for(let i = 0; i < stack.length; i++){
                        temp = stack.pop();
                        newStr = newStr.concat(temp);
                    }
                    stack.push(str[i]);
                    break; 
                case '*': case '/':
                    if(stack.length == 0){
                        stack.push(str[i]);
                        break;
                    }
                    temp = stack.pop();
                    if(temp == '*' || temp == '/'){
                        newStr = newStr.concat(temp);
                    } else {
                        stack.push(temp);
                    }
                    stack.push(str[i]);
                    break;
            }
        }
        i++;
    }
    for(let i = 0; i < stack.length+2; i++){
        newStr = newStr.concat(stack.pop());
    }
    return newStr;
}
const string = "8/4–2+1*5–8*3";
console.log(infixToPostfix(string));
