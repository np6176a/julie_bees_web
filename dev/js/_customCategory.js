//
//    $(".slideout-menu-toggle").on("click", function (event) {
//        event.preventDefault();
//        var slideout_menu = $(".slideout-menu");
//        var menu_width = $(".slideout-menu").width();
//        slideout_menu.toggleClass("open");
//
//        if (slideout_menu.hasClass("open")) {
//            slideout_menu.animate({left: "0px"});
//        } else {
//            slideout_menu.animate({left: -menu_width}, 250);
//        }
//    });
//});

$(document).ready(function () {
    function mediaqueryresponse(mql){
        if (mql.matches){ // if media query matches
//          #remove the other event namespace
            var click_handler_left = function(event) {
                event.preventDefault();
                var slideout_menu = $(".slideout-menu");
                var menu_width = $(".slideout-menu").width();
                slideout_menu.toggleClass("open");
                console.log("clicked lefty");
                if (slideout_menu.hasClass("open")) {
                    console.log("animate left");
                    slideout_menu.animate({left: "0px"});
                } else {
                    console.log("closing animate left");
                    slideout_menu.animate({left: -menu_width}, 250);
                }
            };

            $(".sidemenu").unbind('click.right_sidemenu');
//          #add current namespace
            $('.sidemenu').bind('click.left_sidemenu', click_handler_left);
            console.log("The condition " + mql.media + " has been met");

            //the closing button inside the menu
            $(".slideout-menu-toggle").unbind('click.right_menu');
//          #add current namespace
            $('.slideout-menu-toggle').bind('click.left_menu', click_handler_left);
        }
        else{
            var click_handler_right = function(event) {
                event.preventDefault();
                var slideout_menu = $(".slideout-menu");
                var menu_width = $(".slideout-menu").width();
                slideout_menu.toggleClass("open");
                console.log("clicked right");
                if (slideout_menu.hasClass("open")){
                    console.log("animate right");
                    slideout_menu.animate({right: "0px"});
                } else {
                    console.log("close animate right");
                    console.log(slideout_menu);
                    slideout_menu.animate({right: -menu_width}, 250);
                }
            }
//          Remove the other event namespace
            $(".sidemenu").unbind('click.left_sidemenu');
//          Add current namespace
            $('.sidemenu').bind('click.right_sidemenu', click_handler_right);
            console.log("Condition not met yet");

            //the closing button inside the menu
            $(".slideout-menu-toggle").unbind('click.left_menu');
//          Add current namespace
            $('.slideout-menu-toggle').bind('click.right_menu', click_handler_right);
            console.log("Condition not met yet");
        }
    }

    var mql = window.matchMedia("all and (min-width: 770px)");
    mediaqueryresponse(mql); // call listener function explicitly at run time
    mql.addListener(mediaqueryresponse); // attach listener function to listen in on state changes
});