$(document).ready(function() {

  $(".menubutt").on("click", function () {
    if ($(".navbar").hasClass("hidden", true)){
      $(".navbar").removeClass("hidden");
      $(".menubutt").addClass("menubutt1");
    } else{
      $(".navbar").addClass("hidden");
      $(".menubutt").removeClass("menubutt1")
    }
  });
});
