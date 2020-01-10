const makePermanum = (n) => {
	let a = 1, b = 1;
	while(n-- != 0){
		a *= 2;  	
	}
	while(a-- != 0){
		b *= 2;
    }
	return b + 1;
}
// n이 5이상부터 소수가 아님
makePermanum(5);
//4294967297
makePermanum(6);
//18446744073709552000