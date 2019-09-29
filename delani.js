$(document).ready(function(){
    $("img").hover(function(){
      $(this).css("background-color", "white");
      }, function(){
      $(this).css("background-color", "grey");
    });
  });
 

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }