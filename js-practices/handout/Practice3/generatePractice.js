'use strict'
function sort(input) {
  return input.sort((a,b) => a-b); 
 
}
 function generateArray(value) {
 	var c=[];
 	for( var i=0;i<value;i++){
 		c[i]=(Math.floor(Math.random()*101));
 	}
  sort(c);
 	return c;
 }

 function search(input, target) {
   return  input.indexOf(target); 
}
function generate(testLengthArray){
   var c=[];
  for(var i=0;i<testLengthArray.length-3;i++){
  	var array=generateArray(testLengthArray[i]);
       var x ={
       	 input : array,
       	 target:10,
       	 output: search(array,10)
       }
       c.push(x);
  }
  //specail case
  //frist index
   array=generateArray(testLengthArray[testLengthArray.length-3]);
    x ={
    	input:array,
    	target: array[0],
    	 output: search(array,array[0])
    }
    c.push(x);
  //last index
   array=generateArray(testLengthArray[testLengthArray.length-2]);
    x ={
    	input:array,
    	target: array[array.length-1],
    	 output: search(array,array[array.length-1])
    }
    c.push(x);
 // not found
  array=generateArray(testLengthArray[testLengthArray.length-1]);
   var maxInNumbers = Math.max.apply(Math, array); 
    x ={
    	input:array,
    	target: maxInNumbers +1,
    	 output: search(array,maxInNumbers +1)
    }
    c.push(x);

  return c;
}

module.exports = generate
