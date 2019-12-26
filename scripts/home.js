$(document).ready(function() {

  $("#home1").removeClass("imghover");
  $("#home2").removeClass("imghover");
  $("#home3").removeClass("imghover");
  $("#home4").removeClass("imghover");
  $("#home5").removeClass("imghover");

  $("#home1").mouseover(function() {
    $("#hometext1").removeClass("hidden");
    $("#home1").addClass("imghover");
  });
  $("#home2").mouseover(function() {
    $("#hometext2").removeClass("hidden");
    $("#home2").addClass("imghover");
  });
  $("#home3").mouseover(function() {
    $("#hometext3").removeClass("hidden");
    $("#home3").addClass("imghover");
  });
  $("#home4").mouseover(function() {
    $("#hometext4").removeClass("hidden");
    $("#home4").addClass("imghover");
  });
  $("#home5").mouseover(function() {
    $("#hometext5").removeClass("hidden");
    $("#home5").addClass("imghover");
  });

  $("#home1").mouseout(function() {
    $("#hometext1").addClass("hidden");
    $("#home1").removeClass("imghover");
  });
  $("#home2").mouseout(function() {
    $("#hometext2").addClass("hidden");
    $("#home2").removeClass("imghover");
  });
  $("#home3").mouseout(function() {
    $("#hometext3").addClass("hidden");
    $("#home3").removeClass("imghover");
  });
  $("#home4").mouseout(function() {
    $("#hometext4").addClass("hidden");
    $("#home4").removeClass("imghover");
  });
  $("#home5").mouseout(function() {
    $("#hometext5").addClass("hidden");
    $("#home5").removeClass("imghover");
  });

});
