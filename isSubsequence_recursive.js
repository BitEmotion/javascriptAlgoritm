const isSubsequence = (str1, str2) => {
    if(str1.length == 0) return true
    if(str2.length == 0) return false
    if(str2[0] == str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
}
isSubsequence('sting','sting');
isSubsequence('ing','ting');
isSubsequence('ing','ing');
isSubsequence('ng','ng');
isSubsequence('g','g');
isSubsequence('',''); 
// true
// sting == sting
isSubsequence('sing','sting');
isSubsequence('abc','acb');
isSubsequence('bc','cb');
isSubsequence('bc','b');
isSubsequence('c','');
// false
// sing != sting