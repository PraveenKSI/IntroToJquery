$(document).ready(function(){
    $(".click").click(function(){
        $(".click:first").after("<button class = click>Click</button>");
    })
})