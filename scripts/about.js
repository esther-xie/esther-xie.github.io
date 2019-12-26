// When the document is ready
$(document).ready(function() {

  $("#ningbo").on("click", function () {
    if ($("#ningbo1").hasClass("hidden", true)){
      $("#ningbo1").removeClass("hidden");
    } else{
      $("#ningbo1").addClass("hidden");
    }
  });

  $("#shanghai").on("click", function () {
    if ($("#shanghai1").hasClass("hidden", true)){
      $("#shanghai1").removeClass("hidden");
    } else{
      $("#shanghai1").addClass("hidden");
    }
  });

  $("#ithaca").on("click", function () {
    if ($("#ithaca1").hasClass("hidden", true)){
      $("#ithaca1").removeClass("hidden");
    } else{
      $("#ithaca1").addClass("hidden");
    }
  });

  $("#copenhagen").on("click", function () {
    if ($("#copenhagen1").hasClass("hidden", true)){
      $("#copenhagen1").removeClass("hidden");
    } else{
      $("#copenhagen1").addClass("hidden");
    }
  });

  $("#rome").on("click", function () {
    if ($("#rome1").hasClass("hidden", true)){
      $("#rome1").removeClass("hidden");
    } else{
      $("#rome1").addClass("hidden");
    }
  });

  $("#sanf").on("click", function () {
    if ($("#sanf1").hasClass("hidden", true)){
      $("#sanf1").removeClass("hidden");
    } else{
      $("#sanf1").addClass("hidden");
    }
  });
});
