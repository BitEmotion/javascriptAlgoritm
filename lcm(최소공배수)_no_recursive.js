// lcm(최소공배수)

// 반복문을 활용한 최소공배수 구하기 no recursive
const lcm = (arr) => {
    //calculate array`s index minMax
    let minNum = 100;
    let maxNum = 0;
    
    arr.forEach(el => {
        if(el > maxNum){
            maxNum = el;
        }
        if(el < minNum){
            minNum = el;
        }
    });

    // 배열 요소의 가장 큰 값을 기준으로 잡는다. (위의 minNum maxNum 활용)
    // 기준 maxNum에 i 배수로 곱해나간다
    // 기준 maxNum에 i 배수로 곱한다음 maxNum에 잡아놓고
    // 기준 maxNum을 제외한 나머지 원소들을 k 배수해서 maxNum과 값이 같은지 비교한다. 
    // 비교한 값이 같으면 answerNumCount값을 ++한다.
    // i 배수로 곱해진 maxNum과 나머지 k 배수한 배열 요소 값들이 전부 똑같은 시점의 maxNum이 최소공배수다.
    // 그 시점은 다른말로 하면 인자로 들어온 배열의 갯수와 answerNumCount값이 같아지는 지점이다.
    const originMaxNum = maxNum;
    const answerNum = arr.length;
    let i = 1;
    loop1:
    while(true){
        let answerNumCount = 0;

         loop2:
          for(let j = 0; j < arr.length; j++){
              let loop2TempNum;

              loop3:
              for(let k = Math.floor(maxNum/arr[j]); k < maxNum; k++){
                  //원소가 1일 경우
                  if(arr[j] == 1){
                    temp_answerNum++;
                    continue loop2;
                  }

                  loop2TempNum = arr[j] * k;
                  if(loop2TempNum == maxNum){
                      answerNumCount++;
                      continue loop2;
                  }

                  if(loop2TempNum > maxNum){
                      maxNum = originMaxNum * i;
                      i++;
                      continue loop1;
                  }
              }
              if(maxNum/arr[j] == maxNum){
                answerNumCount++;
                continue loop2;
              }
              maxNum = originMaxNum * i;
              i++;
              continue loop1;
          }

        if(answerNum == answerNumCount){
            break;
        }
        maxNum = originMaxNum * i;
        i++;
    }
    
    return maxNum;
}
console.log(lcm([330, 75, 450, 225]));
// 4950
console.log(lcm([1,2,3,4,5,6,7,8,9]));
// 2520
console.log(lcm([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
// 360360