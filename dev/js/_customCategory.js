$(document).ready(function () {
    $(".slideout-menu-toggle").on("click", function (e) {
        e.preventDefault();
        var t = $(".slideout-menu"), n = $(".slideout-menu").width();
        t.toggleClass("open"), t.hasClass("open") ? t.animate({left: "0px"}) : t.animate({left: -n}, 250)
    })
});