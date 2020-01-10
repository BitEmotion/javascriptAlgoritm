
const linearSearch = (arr,num) =>{
	let count = 0;
	while(count < arr.length){
		if(num == arr[count]){
			return count;
		} else {
			count++;
		}
	}
	return -1;
}
linearSearch([10,15,20,25,30],35);
// search 값(두번째 인자)이 배열에 없으면 -1 리턴
linearSearch([10,15,20,25,30],25);
// search 값(두번째 인자)이 배열에 있으면 원소 위치(위의 식은 3)를 리턴