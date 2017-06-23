//starts the jquery tasks
$(document).ready(function() {
  //#hide selects the hide tag
  $("#hide").click(function() {
    //img selects the image
    $("img").hide();
  });

  $("#div1 h1").dblclick(function() {
    $("#div1 h1").toggleClass("styleswitch")
  });
// Cntrl question mark creates a comment
  $("#more").click(function() {
    $("ul").append("<li>More!</li>");
  });

$(".change").hover(function(){
          $(this).css("background-color", "yellow");
          }, function(){
          $(this).css("background-color", "pink");
      });

$("h2").mouseout(function(){
          $("h2").slideUp();
      });

$("#click").hover(function(){
          $("#click").fadeOut();
});
$("#abra").click(function() {
  $("#click").show();
});

$("p").hover(function(){
          $("p").toggleClass("fontchange");
});
});
