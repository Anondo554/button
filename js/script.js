$(function(){
    $("#hide").click(function(){
        $("#box").hide(1000)
    })

    $("#show").click(function(){
        $("#box").show(1000)
    })
})
$(function(){
    $("#hideShow").click(function(){
        $("#box").toggle(1000)
    })
})
$(function(){
    $("#fadeIn").click(function(){
        $("#box").fadeIn(1000)
    })
})
 
$(function(){
    $("#fadeOut").click(function(){
        $("#box").fadeOut(1000)
    })
})
 $(function(){
    $("#upDown").click(function(){
        $("#box").slideToggle(1000)
    })
 })
 $(function(){
    $("#slideUp").click(function(){
        $("#box").slideUp(1000)
    })
 })
 $(function(){
    $("#slideDown").click(function(){
        $("#box").slideDown(1000)
    })
 })