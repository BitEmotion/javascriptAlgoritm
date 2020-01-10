//코드 출처
//https://stackoverflow.com/questions/42773836/how-to-find-all-subsets-of-a-set-in-javascript

//production
const getAllSubsets = theArray => theArray.reduce((subsets, value) => subsets.concat(
    subsets.map(set => [value, ...set])
),[[]]);

//development
const getAllSubsets = theArray => {
    return theArray.reduce((subsets, value) => {
        // console.log('subsets',subsets, 'value',value);
        return subsets.concat(subsets.map(set => [value, ...set])); 
    }, [[]])
}

getAllSubsets([5,7,3,9,1]);