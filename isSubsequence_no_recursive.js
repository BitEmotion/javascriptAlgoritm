const isSubsequence = (str1, str2) => {
    const numArr1 = [],
          numArr2 = [],
          obj = {},
          obj2 = {};
	for(let i = 0; i <str1.length; i++){
		numArr1.push(str1[i].charCodeAt());
	}
	for(let i = 0; i <str2.length; i++){
		numArr2.push(str2[i].charCodeAt());
	}
	numArr1.forEach(s=>{
		const d = numArr1.indexOf(s);
		obj[s] = d;
	});
	numArr2.forEach(s=>{
		const d = numArr2.indexOf(s);
		obj2[s] = d;
	});
	const keys = Object.keys(obj);
	const orderedArr1 = Object.entries(obj);
	const orderedArr2Filtered = Object.entries(obj2).filter(e=> {
		for(let i = 0; i < keys.length; i++){
			if(e[0] == keys[i]){
				return e;
			}
		}
	});
	const orderedArr1Sorted = orderedArr1.sort((a,b) => {return a[1] - b[1]});
	const orderedArr2FilteredSorted = orderedArr2Filtered.sort((a,b) => {return a[1] - b[1]});
	for(let i = 0; i < keys.length; i++){
		if(orderedArr1Sorted[i][0] != orderedArr2FilteredSorted[i][0]){
			return false;
		} 
	}
	return true;
};

console.log(isSubsequence('hello','hllo aeryr'));
// false
// hello != hllo
console.log(isSubsequence('hello','hello aeryr'));
// true 
// hello == hello