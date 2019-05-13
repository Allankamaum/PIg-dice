$(document).ready(function() {
  $(".submit").click(function() {
    $(".big").fadeIn();
  });
  $(".new").click(function() {
    $(".big").fadeOut();
  });









  
});


//Actions when player enters name
// $("#playerNames").submit(function (event) {
//     event.preventDefault();
//     $("#rulesDefinitions").hide();
//     $("form").hide();
//     $(".newGame").show();
//     $(".newGame").click(function () { //Makes the 'New Game' title clickeable and the form reappear.
//         $("form").show();
//         $('#gamingArea').hide();
//         $(".newGame").hide();
//         resetFields();
//     });
