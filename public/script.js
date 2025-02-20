$(document).ready(function () {
    $("#menu-btn").click(function () {
        $("#menu").toggleClass("hidden flex");

        if ($("#menu").hasClass("hidden")) {
            $("#menu").slideUp(300);
        } else {
            $("#menu").hide().slideDown(300);
        }

        $(this).toggleClass("open");
    });
});