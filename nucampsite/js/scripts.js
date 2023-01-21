$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });


});

/*$(function() {
    $("#reserveButton").click(function() {

    })
});*/

//$('#reserveButton').modal('click');

//$('#loginButton').modal('click');

$(function(){
    $("#reserveButton").on("click", function(){
        $("#reserveModal").modal('show');
    });
});

$(function(){
    $("#loginButton").on("click", function(){
        $("#loginModal").modal('show');
    });
});


    /*$('#reserveButton').click(function () {
        $("#reserveModal").modal()
    });

    $("#loginButton").click(function(){
        $('#loginModal').modal()
    });*/

/*});*/
