// sticky hearder


$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#header').addClass('sticky-header');
        $('#header .mo-row').removeClass('sticky-border');
    } else {
        $('#header').removeClass('sticky-header');
        $('#header .mo-row').addClass('sticky-border');
    }
});

// Tabs


$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");

    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});
/* Extra class "tab_last"
   to add border to right side
   of last tab */
$('ul.tabs li').last().addClass("tab_last");



// slick

$('#main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    arrows: false
});
$('#homepage_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    adaptiveHeight: false,
    arrows: false
});



function init() {
    let iframe = document.getElementsByTagName('iframe');
    for (let i = 0; i < iframe.length; i++) {
        if (iframe[i].getAttribute('data-src')) {
            iframe[i].setAttribute('src', iframe[i].getAttribute('data-src'))
        }
    }
}
window.onload = init;


// youtube video
// var tag = document.createElement('script');
// tag.id = 'iframe-demo';
// tag.src = 'https://www.youtube.com/iframe_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// var player;
// function onYouTubeIframeAPIReady() {
//     var elems1 = document.getElementsByClassName('yt-player');
//     for(var i = 0; i < elems1.length; i++) {
//
//         player = new YT.Player(elems1[i], {
//             events: {
//                 //'onReady': onPlayerReady,
//                 'onStateChange': onPlayerStateChange
//             }
//         });
//     }
// }
// function onPlayerReady(event) {
//
// }
// function handleVideo(playerStatus) {
//     if (playerStatus == -1) {
//         // unstarted
//         $('#main-slider').slick('slickPause');
//     } else if (playerStatus == 0) {
//         // ended
//         $('#main-slider').slick('slickPlay');
//
//     } else if (playerStatus == 1) {
//         // playing = green
//         $('#main-slider').slick('slickPause');
//     } else if (playerStatus == 2) {
//         // paused = red
//         $('#main-slider').slick('slickPlay');
//     } else if (playerStatus == 3) {
//         // buffering = purple
//     } else if (playerStatus == 5) {
//         // video cued
//     }
// }
// function onPlayerStateChange(event) {
//     handleVideo(event.data);
// }
//
// $(function() {
//     $('#main-slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         pauseOnFocus: false,
//         pauseOnHover: false,
//         dots: true,
//         infinite: true,
//         adaptiveHeight: true,
//         arrows: false
//     });
//
// });
//
// $('#main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     $('.yt-player').each(function(){
//         this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
//     });
// });




var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    var elems1 = document.getElementsByClassName('yt-player');
    for(var i = 0; i < elems1.length; i++) {

        player = new YT.Player(elems1[i], {
            events: {
                //'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}
function onPlayerReady(event) {

}
function handleVideo(playerStatus) {
    if (playerStatus == -1) {
        // unstarted
        $('.slider-for').slick('slickPause');
    } else if (playerStatus == 0) {
        // ended
        $('.slider-for').slick('slickPlay');

    } else if (playerStatus == 1) {
        // playing = green
        $('.slider-for').slick('slickPause');
    } else if (playerStatus == 2) {
        // paused = red
        $('.slider-for').slick('slickPlay');
    } else if (playerStatus == 3) {
        // buffering = purple
    } else if (playerStatus == 5) {
        // video cued
    }
}
function onPlayerStateChange(event) {
    handleVideo(event.data);
}

$(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        loop: true,
        centerMode: true,
        focusOnSelect: true
    });

});

$('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.yt-player').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
    });
});
