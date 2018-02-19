//Check off todo by clicking
$("ul").on("click","li", function(){
  $(this).toggleClass("completed")
});

//Deleting a todo item
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

$("input[type='text']").on("keypress", function(event){
  if(event.which === 13){
    var newItem = $(this).val();

    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newItem + "</li>")
    $(this).val("");
  }
});

// $("#newButton").on("click", function(){
//   $("input[type='text']").fadeToggle();
// });
