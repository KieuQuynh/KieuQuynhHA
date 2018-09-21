$(document).ready(function(){
    $.ajax({
        url:'http://localhost:8080/games/player',
        method:'GET',
        success:function(data){
            $('#result').attr('data-id',data.id);
            $('#p1').html(data.player1);
            $('#p2').html(data.player2);
            $('#p3').html(data.player3);
            $('#p4').html(data.player4);
          //console.log(data.p1);
        },
        error:function(){
            console.log("loi nhes");
        }
    }) //end ajax

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

   $(document).on('input', 'input[type=number]', function(){
        let id=$('#result').attr('data-id');
       let score = $(this).val();
       $.ajax({
           url: `http://localhost/games/score/${id}`,
           type:'PUT',
           data: {
              
           }
       })
   })

})


