const deleteChar = `/`;
const string = "/$2b$12/$i1MJOk/YK/nHbuqOdnkZ40B.j1KSQkjCGk/aL4oVdKb0/PhBIyD/X/0Tw.";

const deleteCharFromString = (string, char) => {
    let ret_string = string;
    if(ret_string.indexOf(char) != -1){
        do {
            const index = ret_string.indexOf(char);
            const firstHash = ret_string.slice(0, index);
            const lastHash = ret_string.slice(index + 1,ret_string.length);
            ret_string = firstHash + lastHash;
        } while(ret_string.indexOf(char) != -1);
    }
    return ret_string;
}

console.log("string : ",deleteCharFromString(string,deleteChar));
// string : $2b$12$i1MJOkYKnHbuqOdnkZ40B.j1KSQkjCGkaL4oVdKb0PhBIyDX0Tw.