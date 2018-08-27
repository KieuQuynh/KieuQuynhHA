/* javascript

var text=document.getElementById('text');
 

text.addEventListener('keyup',function () {
     var a=text.value;
   var sl= document.getElementById('num');
  var x= parseInt(a);
    sl.innerHTML= (200-a.length)+"/200";*/

//jquery.
$(document).ready(function(){
  var text=$('#text');
   
    text.keyup(function(){
    var sl= $('#num');
    var a=text.val();
   
    sl.html((200-a.length)+"/200");
  });
}) 
  
  
 



