$("#fa-bar-icon").click(function() {
    $("#navigation-bar-container-in-resume").css("width", "15%");
    $("#fa-bar-icon").css("display", "none");
});

$("#close-button").click(function() {
    $("#navigation-bar-container-in-resume").css("width", "0%");
    $("#fa-bar-icon").css("display", "inline-block");
});
