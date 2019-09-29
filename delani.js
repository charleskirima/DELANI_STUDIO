$(document).ready(function(){
    $("a").hover(function(){
      $(this).css("background-color", "white");
      }, function(){
      $(this).css("background-color", "#555");
    });
  });
 

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }