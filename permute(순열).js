// 출처 코드
// https://stackoverflow.com/questions/9960908/permutations-in-javascript/37580979#37580979

const permute = (permutation) => {
    const permutationLength = permutation.length;
    let result = [permutation.slice()],
        c = new Array(permutationLength).fill(0),
        i = 1, k , p;
    while(i < length){
        if(c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            c[i]++;
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            i++;
        }
    }
    return result;
}

permute([5,7,3,1,9]);
// 5개 원소를 중복해서 선택
// 총 120가지