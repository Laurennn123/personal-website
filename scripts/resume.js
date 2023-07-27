function changingWidth(width) {
    $("#fa-bar-icon").click(function() {
        $("#navigation-bar-container-in-resume").css("width", "" + width + "%");
        $("#fa-bar-icon").css("display", "none");
    });
}

$("#close-button").click(function() {
    $("#navigation-bar-container-in-resume").css("width", "0%");
    $("#fa-bar-icon").css("display", "inline-block");
});

if(window.matchMedia("(min-width: 576px)").matches) {
    changingWidth(15);
} else {
    changingWidth(100);
    $("#resume-section").css("opacity", "100%");
}