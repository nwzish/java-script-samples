// //effects on listed items when clicked
// $("li").on("click",function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({color: "black",
// 				textDecoration: "none"})
// 	}
// 	else{
// 		$(this).css({color: "gray",
// 				textDecoration: "line-through"});
// 	}
	

// });

$("ul").on("click" , "li" ,function(){
	$(this).toggleClass("completed");
})

$("ul").on("click" , "span" ,function(event){
	$(this).parent().fadeOut(500 , function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newTodo + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});

