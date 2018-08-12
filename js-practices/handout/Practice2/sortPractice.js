'use strict'

function sort(input) {
 // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
 for(var  i=0;i<input.length;i++){
 	for( var j=i+1;j<input.lenght;j++){
 		if(input[j] > input[i]){
 			var temp= input[i];
 			input[j]= input[j];
 			input[i]=temp;
 		}
 	}
 }
}

module.exports = sort
