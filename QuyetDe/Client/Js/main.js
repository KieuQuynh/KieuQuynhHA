
$(document).ready(function(){
  $.ajax({
      url:'http://localhost:6969/answer',
      method:'GET',
      success: function(data){
         
          $('h1').text(data.questionContent);
         console.log('success',data);
        $('.ans').attr('data-id',data.id);
       
        
      },
      error : function(error){
          console.log('fail:'+error);

      }
  })
  

 
  $('.ans').on('click',function(e){
      let ans=$(e.target).attr('data-answer');
      let questionID = $(e.target).attr('data-id');
      console.log(ans,questionID);
     $.ajax({
         url:'http://localhost:6969/q',
         type:'PUT',
         data: {
             answer :ans,
             questionID: questionID
         },
         success:function(){
         
         }
     })
   
   

 })


})