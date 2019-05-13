$(document).ready(function() {
  $(".submit").click(function() {
    $(".big").fadeIn();
  });
  $(".new").click(function() {
    $(".big").fadeOut();
  });
  var name1, roundCounts1, totalPoints1, name2, roundCounts2, totalPoints2;

  totalPoints1 = 0;
  roundCounts1 = 0;
  totalPoints2 = 0;
  roundCounts2 = 0;


  $("#roll1").click(function() {
    randomNo = Math.floor(Math.random() * 6) + 1;

    if (randomNo === 1) {
      alert("OH dang you have rolled a 1. Its player 2's turn");
      roundCounts1 = 0;
      $("#count1").text(roundCounts1);
      totalPoints1 += roundCounts1;
      $("#total1").text(totalPoints1);
      $(".hide1").hide();
    } else {
      $("#turn1").text(randomNo);
      roundCounts1 += randomNo;
      $("#count1").text(roundCounts1);
    }

  });


});
