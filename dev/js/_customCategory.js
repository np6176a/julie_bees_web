$(document).ready(function () {
    $(".slideout-menu-toggle").on("click", function (event) {
        event.preventDefault();
        var slideout_menu = $(".slideout-menu");
        var menu_width = $(".slideout-menu").width();
        slideout_menu.toggleClass("open");

        if (slideout_menu.hasClass("open")) {
            slideout_menu.animate({left: "0px"});
        } else {
            slideout_menu.animate({left: -menu_width}, 250);
        }
    })
});