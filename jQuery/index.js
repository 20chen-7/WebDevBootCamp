// $("h1").addClass("big-title margin-50");
// $("h1").text("Bye");
// $("button").html("<em>Hey</em>")
// $("a").attr("href", "https://www.yahoo.com");
// $("h1").click(function(){
//     $("h1").css("color", "purple");
// })
// $("button").click(function(){
//     $("h1").css("color", "purple");
// })
// $("input").keypress(function(event){
//     console.log(event.key);
// });
// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })
// $("h1").on("mouseover",function(){
//     $("h1").css("color", "purple");
// } )
// $("h1").before("<button>new</button>")
// $("h1").prepend("<button>new</button>")
// $("h1").fadeOut()
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
});