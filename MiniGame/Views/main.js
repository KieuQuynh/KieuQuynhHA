var temp;
var currentValue =100;
$(document).ready(function(){
    var urlParams = new URLSearchParams(location.search);
    var id=(urlParams.get('gameID') ); 
   


    $('#add_round').on('click',function(e){
        let x= $('#result tr').length -1;
         $('#abc').append(`  <tr id='${x}'>
         <td>Round ${x}</td>
         <td><input type="number"/></td>
         <td><input type="number"/></td>
         <td><input type="number"/></td>
         <td><input type="number"/></td>
     </tr>`)
    }) //end append
  
   $(document).on('focusin', 'input[type=number]', function(){
         $(this).data('val',$(this).val()); }).on('input','input[type=number]',
         function(){
         var prev= $(this).data('val');
         currentValue =prev;
        let currentScore=parseInt($(`.dname td:nth-child(${$(this).parent().index() +1})`).text());
        let x= parseInt($(this).val());
         $(`.dname td:nth-child(${$(this).parent().index() +1})`).text(currentScore-prev+x);
         $(this).data('val',$(this).val());
        $.ajax({
            url:'http://localhost:8080/score',
            method:'PUT',
            data:{
                col: $(this).parent().index(),
                row:  $(this).parent().parent().index()-1,
                score: $(this).val(),
                id:id

            },
            success:function(data){
                console.log('successs');
            },
            error:function(err){
                console.log('error nhé');
            }
        })
   })
 $.ajax({
       url:'http://localhost:8080/loaddata',
       method:'POST',
       data:{
           gameID:id
       },
       success:function(data){
        temp=data;
        var x1=0;
        var x2=0;
        var x3=0;
        var x4=0;
        
                $('#p1').html(data.name[0]);
                $('#p2').html(data.name[1]);
                $('#p3').html(data.name[2]);
                $('#p4').html(data.name[3]);
                console.log('length:'+data.result.length);
              
             for(let i=0;i<data.result.length;i++){
                x1+=data.result[i]['score1'];
                x2+=data.result[i]['score2'];
                x3+=data.result[i]['score3'];
                x4+=data.result[i]['score4'];
                $('#abc').append(`  <tr>
                <td>Round ${i+1}</td>
                <td><input type="number" value="${data.result[i]['score1']}"/></td>
                <td><input type="number" value="${data.result[i]['score2']}"/></td>
                <td><input type="number" value="${data.result[i]['score3']}"/></td>
                <td><input type="number" value="${data.result[i]['score4']}"/></td>
            </tr>`)
             }
             let array=[x1,x2,x3,x4];

            
             for( var i=0;i<4;i++) {
                $(`.dname td:nth-child(${i+2})`).text(array[i]);
             }
             
             
               
       }
       
 })
 


})


function  doSomething(x) {
     let flag;
      if (parseInt(x.val()) > currentValue) {
            flag=true;
      } 
      else {
           flag=false
      }
      currentValue = parseInt(x.val());
       return flag;
}
function getValue(x){
    return $(x).val();
}
