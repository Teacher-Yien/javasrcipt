// for
let Array = [10,20,30];
// for(i=0;i<Array.length;i++){
// 	console.log(Array[i]);
// }
// while
// i=0;
// while(i<Array.length){
//   console.log(Array[i]);
// 	i++;
// }
// do while
// i=0;
// do{
// 	console.log(Array[i]);
// 	i++;
// }while(i<Array.length);


var data;
for(i in Array){
	data += console.log(Array[i]); // show item by index
}

for(key of Array){
   data+= console.log(key); // show item by key
}

console.log( Array.map((e)=>e)); // output of Array
Array.forEach(element => { console.log(element)}); // readonly value in array
console.log(...Array); // copy value in array



