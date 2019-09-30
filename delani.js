$(document).ready(function(){
    $("img").hover(function(){
      $(this).css("background-color", "white");
      }, function(){
      $(this).css("background-color", "#555");
    });
  });
 

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


 $(".img1").click(function() {
  $(".p1").toggle();
});
$(".img2").click(function() {
    $(".p2").toggle();
});
$(".img3").click(function() {
    $(".p3").toggle();
});