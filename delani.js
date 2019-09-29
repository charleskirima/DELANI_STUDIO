$(document).ready(function(){
    $("img").hover(function(){
      $(this).css("background-color", "white");
      }, function(){
      $(this).css("background-color", "grey");
    });
  });
 

  function showName() {
    alert("Message recieved...Thank you for the input");
  }