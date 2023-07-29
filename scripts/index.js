var projectsAndResumePage = $("a").slice(2, 4);
var homePage = $("a").slice(1, 2);

projectsAndResumePage.hover(
    function() {
        homePage.css("opacity", "45%");
    }, function() {
        homePage.css("opacity", "100%");
    },

    homePage.hover(function() {
        homePage.css("opacity", "45%");
    }, function() {
        homePage.css("opacity", "100%");
    })
);

function changingWidth(width) {
    $("#fa-bar-icon-homepage").click(function() {
        $("#navigation-bar-container-in-resume").css("width", "" + width + "%");
        $("#fa-bar-icon-homepage").css("display", "none");
    });
}

$("#close-button").click(function() {
    $("#navigation-bar-container-in-resume").css("width", "0%");
    $("#fa-bar-icon-homepage").css("display", "inline-block");
});

if(window.matchMedia("(min-width: 576px)").matches) {
    changingWidth(15);
} else {
    changingWidth(100);
    $("#home-section").css("opacity", "100%");
}