const averagePair = (arr,num) => {
	if (!Array.isArray(arr)) {
        throw '첫번째 인자는 배열이어야 합니다.'
    }
	if (typeof(num) != 'number') {
        throw '두번째 인자는 숫자이어야 합니다.'
    }

	let left = 0;
	let right = 1;
	let result = [];
	while(right < arr.length){
		if(arr[left]<arr[right]){
			result.push([arr[left],arr[right]]);
			if(right+1 == arr.length){
				left++;
				right = left + 1;
			} else {
				right++;
			}			
		} else if(arr[left] == arr[right]){
			result.push([arr[left],arr[right]]);
			if(right+1 == arr.length){
				left++;
				right = left + 1;
			} else {
				right++;
			}	
        } 
	}
	return result.map(r=> r.reduce((sum,v)=>(sum+v),0)/2).includes(num);
};

averagePair([1,2,3,4,5],1);
// 배열 중 선택한 2개의 수의 평균이 두번째 인자(위의 식은 1)와 일치하면 true
//                                                          일치하지 않으면 false