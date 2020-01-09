/*let aboutOffset= $("#about").offset().top;
$(window).scroll(function (){
let wScroll = $(window).scrollTop();

if(wScroll > aboutOffset - 30)
{
$("nav").addClass("bg-black");
$("#btnUp").fadeIn(500)
}
else
{
    $("nav").removeClass("bg-black");
    $("#btnUp").fadeOut(500)
    
}
})

$("#btnUp").click(function(){
$("html,body").animate({scrollTop:'0'},3000)

})*/

$(document).ready(function(){




let y = $("#about").offset().top;
$(window).scroll(function(){
   let x= $(window).scrollTop();
   if (x > y -30)
   {
   $("nav").addClass("bg-black");
   $("#btnUp").fadeIn(500);
   }
   else{
    $("nav").removeClass("bg-black");
    $("#btnUp").fadeOut(500);
   

   }
})

$("#btnUp").click(function(){
    $("body,html").animate({scrollTop:'0'},1000)
})

$("a[href^='#']").click(function(){
  let link=  $(this).attr("href");
  $("body,html").animate({scrollTop:$(link).offset().top},10);
  console.log(link);
})

    $("#loading").fadeOut(1000,function(){
        $("body").css("overflow","auto")
    })
    
    
})
let col=$(".color-item");
col.eq(0).css("backgroundColor","teal");
col.eq(1).css("backgroundColor","red");
col.eq(2).css("backgroundColor","green");
col.eq(3).css("backgroundColor","blue");
col.eq(4).css("backgroundColor","orange");
$(col).click(function(){
let bgcol=$(this).css("backgroundColor");
$("h2").css("color", bgcol);
})

$(".container-options i").click(function(){
   // $(".option-box").toggle();
  let wid= $(".option-box").outerWidth(true);
  if($(".container-options").css("left")=="0px"){
   $(".container-options").animate({left:`-${wid}px`},1000);}
   else{ $(".container-options").animate({left:`0px`},1000);}
})
