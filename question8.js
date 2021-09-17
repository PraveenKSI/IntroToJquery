$(document).ready(function(){
    let ele = $("<button class = 'click'>Click</button>")
    ele.on('click',function(){
        $(".click").after(ele);
    })
    $(".click").on('click',function(){
        $(".click:first").after(ele);
    })
})