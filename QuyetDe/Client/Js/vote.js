$(document).ready(function(){
    $.ajax({
        url:'http://localhost:6969/a',
        method:'GET',
        success: function(data){
              
        $('h1').text(data.questionContent);
         $('#numberVote').text((data.yes+data.no)+"  Votes");
         let x= (data.yes *100)/(data.yes+data.no);
         let y=100 -x;
         let a=Math.round(x*100)/100;
         let b= Math.round(y*100)/100;
         $('#result_yes').css('width',a+"%");
         var q='<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>'+a +'%';
         $('#result_yes').html(q);
         $('#result_no').css('width',b+"%")
         var p='<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>'+b+'%';
         $('#result_no').html(p); 
        },
        error : function(error){
            console.log('fail:'+error);
  
        }
    })

})