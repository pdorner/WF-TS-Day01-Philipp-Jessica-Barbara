let arr : Array<number> = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i<arr.length;i++){
	for(let j = 0; j<arr.length;j++){
		var sum = arr[i] * (j+1);
	console.log(sum);
	}
}

for(var value of arr){
	for(var value1 of arr){
		var sum = value * value1;
	console.log(sum);
	}
}
