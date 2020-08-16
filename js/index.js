$(".toggle").click(function(){ 
    $(this).find(".toggleContainer").toggleClass("active"); $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});



$(".searchButton").click(function(){
    $(".searchButton").toggleClass("active");
    if ($(".searchButton").hasClass("active")) {
        $(".searchBar").css("height", "75vh");
        $("#searchForm").css("opacity","1");
        $(".searchIcon").removeClass("fa-search").addClass("fa-times");
        $("#searchForm").append("<br/><h2 style='color:white;'>Search</h2>");
    }
    else {
        $(".searchBar").css('height', "0vh");
        $("#searchForm").css("opacity","0");
        $(".searchIcon").removeClass("fa-times").addClass("fa-search");
    }
});

function fade() {
    $('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);

$('button').click(function(){
    $('button.buttonClicked').removeClass('buttonClicked')
        $(this).addClass('buttonClicked');
});