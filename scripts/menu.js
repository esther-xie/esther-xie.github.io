$(document).ready(function() {

  $("#menud").on("click", function () {
    if ($("#dropdownd").hasClass("hidden", true)){
      $("#dropdownd").removeClass("hidden");
      $("#menud").addClass("clicked");
      $("#dropdownr").addClass("hidden");
      $('#menur').removeClass("clicked");
    } else{
      $("#dropdownd").addClass("hidden");
      $("#menud").removeClass("clicked");
    }
  });

  $("#menur").on("click", function () {
    if ($("#dropdownr").hasClass("hidden", true)){
      $("#dropdownr").removeClass("hidden");
      $('#menur').addClass("clicked");
      $("#dropdownd").addClass("hidden");
      $("#menud").removeClass("clicked");
    } else{
      $("#dropdownr").addClass("hidden");
      $('#menur').removeClass("clicked");
    }
  });
});
