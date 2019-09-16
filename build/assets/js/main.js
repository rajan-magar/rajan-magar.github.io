
// Sticky Header
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#header').addClass('sticky-header');
        $('#header .mo-row').removeClass('sticky-border');
    } else {
        $('#header').removeClass('sticky-header');
        $('#header .mo-row').addClass('sticky-border');
    }
});
$('.quiz-cta').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$('.hero-btn a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
$('.jobs-nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$('.output-desc a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
$('.product-nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
// slick testimonial carousel

$('.quotes').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true
});
$('.product-slide').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: false
});
$('.mob-product-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: false
});
$('.blog-article').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: false
});
$('.push-notif-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 4000,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false
            }
        },
        {
        breakpoint: 480,
            settings: {
                arrows: false
            }
        }
    ]
});
$('.user-sec-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 8000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: false
});
$('.prod05-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 5,
    adaptiveHeight: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                // slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
                // slidesToScroll: 2
            }
        },
        {
        breakpoint: 480,
            settings: {
                slidesToShow: 1,
                // slidesToScroll: 1
            }
        }
    ]
});
// Accordion Mobile header

var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');
var pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function(event) {

  if (this.classList.contains('active')) {
      this.classList.remove('active');
      sidebarBox.classList.remove('active');
  } else {
      this.classList.add('active');
      sidebarBox.classList.add('active');
  }
});

// accordion js

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active2');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active2')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active2');

            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });
});


// flows

// Modal popup

$('.modal-toggle1').on('click', function(e) {
    e.preventDefault();
    $('.flow-modal1').toggleClass('is-visible');

    if ($('.flow-modal1').hasClass("is-visible")) {
        $('body').css("overflow", "hidden");
    } else {
        $('body').css("overflow", "visible");
    }
});

$('.modal-toggle2').on('click', function(e) {
    e.preventDefault();
    $('.flow-modal2').toggleClass('is-visible');

    if ($('.flow-modal2').hasClass("is-visible")) {
        $('body').css("overflow", "hidden");
    } else {
        $('body').css("overflow", "visible");
    }
});

$('.modal-toggle3').on('click', function(e) {
    e.preventDefault();
    $('.flow-modal3').toggleClass('is-visible');

    if ($('.flow-modal3').hasClass("is-visible")) {
        $('body').css("overflow", "hidden");
    } else {
        $('body').css("overflow", "visible");
    }
});

// slide down arrow

$('.down-arrow-img a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
    scrollTop: target
    }, 500);
    event.preventDefault();
});
$('.down-arrow-img1 a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
    scrollTop: target
    }, 500);
    event.preventDefault();
});

// Hover wave circles

$(function(){
    $(".circle-1").hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    })
	$(".circle-2").hover(function(){
        $(".circle-1").removeClass("hover");
    });
	$(".circle-3").hover(function(){
        $(".circle-1").removeClass("hover");
    });
	$(".circle-4").hover(function(){
        $(".circle-1").removeClass("hover");
    });
	$(".circle-5").hover(function(){
        $(".circle-1").removeClass("hover");
	});
});

$('.modal-toggle-bigbasket').on('click', function(e) {
    e.preventDefault();
    $('.modal-big').toggleClass('is-visible');

    if ($('.modal-big').hasClass("is-visible")) {
        $('body').css("overflow", "hidden");
    } else {
        $('body').css("overflow", "visible");
    }
});

$('.modal-toggle-sportscafe').on('click', function(e) {
    e.preventDefault();
    $('.modal-sports').toggleClass('is-visible');

    if ($('.modal-sports').hasClass("is-visible")) {
        $('body').css("overflow", "hidden");
    } else {
        $('body').css("overflow", "visible");
    }
});

$('.modal-toggle-sivvi').on('click', function(e) {
    e.preventDefault();
    $('.modal-sivvi').toggleClass('is-visible');

    if ($('.modal-sivvi').hasClass("is-visible")) {
        $('body').css("overflow", "hidden");
    } else {
        $('body').css("overflow", "visible");
    }
});

$('.modal-toggle-gaana').on('click', function(e) {
    e.preventDefault();
    $('.modal-gaana').toggleClass('is-visible');

    if ($('.modal-gaana').hasClass("is-visible")) {
        $('body').css("overflow", "hidden");
    } else {
        $('body').css("overflow", "visible");
    }
});

$('.modal-toggle-helpchat').on('click', function(e) {
    e.preventDefault();
    $('.modal-help').toggleClass('is-visible');

    if ($('.modal-help').hasClass("is-visible")) {
        $('body').css("overflow", "hidden");
    } else {
        $('body').css("overflow", "visible");
    }
});

$('.modal-toggle-shopo').on('click', function(e) {
    e.preventDefault();
    $('.modal-shopo').toggleClass('is-visible');

    if ($('.modal-shopo').hasClass("is-visible")) {
        $('body').css("overflow", "hidden");
    } else {
        $('body').css("overflow", "visible");
    }
});


// product page

$('.js-collab-item1').hover(function(e) {
    e.preventDefault();
    $('.js-collab-item1').addClass('is-active');
    $("#highlight-images").addClass("detail-one");

    $("#highlight-images").removeClass("detail-two");
    $("#highlight-images").removeClass("detail-three");
    $("#highlight-images").removeClass("detail-four");

    $(".js-collab-item2").removeClass("is-active");
    $(".js-collab-item3").removeClass("is-active");
    $(".js-collab-item4").removeClass("is-active");
});
$('.js-collab-item2').hover(function(e) {
    e.preventDefault();
    $('.js-collab-item2').addClass('is-active');
    $("#highlight-images").addClass("detail-two");

    $("#highlight-images").removeClass("detail-one");
    $("#highlight-images").removeClass("detail-three");
    $("#highlight-images").removeClass("detail-four");


    $(".js-collab-item1").removeClass("is-active");
    $(".js-collab-item3").removeClass("is-active");
    $(".js-collab-item4").removeClass("is-active");

});
$('.js-collab-item3').hover(function(e) {
    e.preventDefault();
    $('.js-collab-item3').addClass('is-active');
    $("#highlight-images").addClass("detail-three");

    $("#highlight-images").removeClass("detail-one");
    $("#highlight-images").removeClass("detail-two");
    $("#highlight-images").removeClass("detail-four");

    $(".js-collab-item1").removeClass("is-active");
    $(".js-collab-item2").removeClass("is-active");
    $(".js-collab-item4").removeClass("is-active");
});
$('.js-collab-item4').hover(function(e) {
    e.preventDefault();
    $('.js-collab-item4').addClass('is-active');
    $("#highlight-images").addClass("detail-four");

    $("#highlight-images").removeClass("detail-one");
    $("#highlight-images").removeClass("detail-two");
    $("#highlight-images").removeClass("detail-three");

    $(".js-collab-item1").removeClass("is-active");
    $(".js-collab-item2").removeClass("is-active");
    $(".js-collab-item3").removeClass("is-active");
});


// nativ and product page toggle section


$('.link-header').on('click', function () {
    var divID = $(this).attr('data-box');
    $('.card-image').removeClass('active');
    $('#' + divID).addClass('active');

    if ($('.card-image1').hasClass('active')) {
        $('.link-header1').addClass('active');
    } else {
        $('.link-header1').removeClass('active');
    }

    if ($('.card-image2').hasClass('active')) {
        $('.link-header2').addClass('active');
    } else {
        $('.link-header2').removeClass('active');
    }

    if ($('.card-image3').hasClass('active')) {
        $('.link-header3').addClass('active');
    } else {
        $('.link-header3').removeClass('active');
    }
});
$('.links-header').on('click', function () {
    var divID1 = $(this).attr('data-box');

    $('.cards-image').removeClass('active1');
    $('#' + divID1).addClass('active1');

    if ($('.card-image4').hasClass('active1')) {
        $('.link-header4').addClass('active1');
    } else {
        $('.link-header4').removeClass('active1');
    }

    if ($('.card-image5').hasClass('active1')) {
        $('.link-header5').addClass('active1');
    } else {
        $('.link-header5').removeClass('active1');
    }

    if ($('.card-image6').hasClass('active1')) {
        $('.link-header6').addClass('active1');
    } else {
        $('.link-header6').removeClass('active1');
    }
});





$(function(){
	$(".pointers .pointer1").hover(function(){
        $(".hotspot .line1").toggleClass("line-active1");
        $(".pointers-sec .pointers-img1").toggleClass("pointers-img-show");
        $(".pointers-sec .primary1").toggleClass("highlight");
    });
    $(".pointers .pointer2").hover(function(){
        $(".hotspot .line2").toggleClass("line-active2");
        $(".pointers-sec .pointers-img2").toggleClass("pointers-img-show");
        $(".pointers-sec .primary2").toggleClass("highlight");
    });
    $(".pointers .pointer3").hover(function(){
        $(".hotspot .line3").toggleClass("line-active3");
        $(".pointers-sec .pointers-img3").toggleClass("pointers-img-show");
        $(".pointers-sec .primary3").toggleClass("highlight");
    });
});



(function($) {
    $('.accordion .anchor').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('.anchor.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

$('#cookies-box').animate({
     left: '10px'
 }, 2000);


window.randomize = function() {
	$('.circle4x').attr('data-progress', (40));
}
setTimeout(window.randomize, 200);

$('.circle75').click(window.randomize);

// circle 35%

window.randomize = function() {
	$('.circle35').attr('data-progress', (35));
}
setTimeout(window.randomize, 200);

$('.circle92').click(window.randomize);

// circle 2.5x


window.randomize = function() {
	$('.circle2_5x').attr('data-progress', (25));
}
setTimeout(window.randomize, 200);



(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		// browser window scroll (in pixels) after which the "back to top" link is shown
		offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offsetOpacity = 1200,
		scrollDuration = 700
		scrolling = false;
	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});
		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
		( windowTop > offsetOpacity ) && addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}

	function scrollTop(duration) {
	    var start = window.scrollY || document.documentElement.scrollTop,
	        currentTime = null;

	    var animateScroll = function(timestamp){
	    	if (!currentTime) currentTime = timestamp;
	        var progress = timestamp - currentTime;
	        var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
	        window.scrollTo(0, val);
	        if(progress < duration) {
	            window.requestAnimationFrame(animateScroll);
	        }
	    };

	    window.requestAnimationFrame(animateScroll);
	}

	Math.easeInOutQuad = function (t, b, c, d) {
 		t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	};

	//class manipulations - needed if classList is not supported
	function hasClass(el, className) {
	  	if (el.classList) return el.classList.contains(className);
	  	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
		var classList = className.split(' ');
	 	if (el.classList) el.classList.add(classList[0]);
	 	else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
	 	if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
	}
	function removeClass(el, className) {
		var classList = className.split(' ');
	  	if (el.classList) el.classList.remove(classList[0]);
	  	else if(hasClass(el, classList[0])) {
	  		var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
	  		el.className=el.className.replace(reg, ' ');
	  	}
	  	if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
	}
})();

var isoCountries = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Laos',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestine',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syria',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Vietnam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};

function getCountryName (countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}

function getIpinfo() {
    if (navigator.userAgent.match(/bot|spider/i)) {
        // It is a bot. We might want to set some defaults here, or do nothing.
    } else {
        $.get("https://ipinfo.io?token=1cd3c14e212f57", function (response) {
            var cn_code = response.country;
            var cn_name = getCountryName (cn_code);

            console.log(cn_name);

            let MENA = ["Algeria", "Armenia", "Bahrain", "Egypt", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Libya", "Morocco", "Oman", "Palestine", "Qatar", "Saudi Arabia", "Syria", "Tunisia", "United Arab Emirates", "Yemen", "Afghanistan", "Azerbaijan", "Chad", "Comoros", "Cyprus", "Djibouti", "Eritrea", "Ethiopia", "Georgia", "Mali", "Mauritania", "Niger", "Northern Cyprus", "Sahrawi Arab Democratic Republic", "Somalia", "Sudan", "Turkey" ];

            let SEA = ["Brunei", "Cambodia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam"];

            let Europe = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia And Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City" ];

            if (MENA.includes(cn_name)) {
                $("#client-logo1 img").attr("src", "../assets/img/mo-logo/middle-east/apparel.png");
                $("#client-logo2 img").attr("src", "../assets/img/mo-logo/middle-east/awok.png");
                $("#client-logo3 img").attr("src", "../assets/img/mo-logo/middle-east/holidayme.png");
                $("#client-logo4 img").attr("src", "../assets/img/mo-logo/middle-east/landmark.png");
                $("#client-logo5 img").attr("src", "../assets/img/mo-logo/middle-east/mashreq.png");
                $("#client-logo6 img").attr("src", "../assets/img/mo-logo/middle-east/samsung.png");
                $("#client-logo7 img").attr("src", "../assets/img/mo-logo/middle-east/vodafone.png");
                $("#client-logo8 img").attr("src", "../assets/img/mo-logo/middle-east/wadi.png");
            }
            else if (SEA.includes(cn_name)) {
                $("#client-logo1 img").attr("src", "../assets/img/mo-logo/sea/bukalapak-logo.png");
                $("#client-logo2 img").attr("src", "../assets/img/mo-logo/sea/McAfee.png");
                $("#client-logo3 img").attr("src", "../assets/img/mo-logo/sea/oyo.png");
                $("#client-logo4 img").attr("src", "../assets/img/mo-logo/sea/samsung.png");
                $("#client-logo5 img").attr("src", "../assets/img/mo-logo/sea/tokopedia.png");
                $("#client-logo6 img").attr("src", "../assets/img/mo-logo/sea/traveloka.png");
                $("#client-logo7 img").attr("src", "../assets/img/mo-logo/sea/viu.png");
                $("#client-logo8 img").attr("src", "../assets/img/mo-logo/sea/vodafone.png");
            }
            else if (Europe.includes(cn_name)) {
                $("#client-logo1 img").attr("src", "../assets/img/mo-logo/europe/billboard.png");
                $("#client-logo2 img").attr("src", "../assets/img/mo-logo/europe/deutsche-telekom.png");
                $("#client-logo3 img").attr("src", "../assets/img/mo-logo/europe/hearst.png");
                $("#client-logo4 img").attr("src", "../assets/img/mo-logo/europe/McAfee.png");
                $("#client-logo5 img").attr("src", "../assets/img/mo-logo/europe/oyo.png");
                $("#client-logo6 img").attr("src", "../assets/img/mo-logo/europe/samsung.png");
                $("#client-logo7 img").attr("src", "../assets/img/mo-logo/europe/travelodge.png");
                $("#client-logo8 img").attr("src", "../assets/img/mo-logo/europe/vodafone.png");
            }
            else if (cn_name === "India") {
                $("#client-logo1 img").attr({src: "../assets/img/mo-logo/india/airtel.png", srcset: "../assets/img/mo-logo/india/airtel-1x.png 1x, ../assets/img/mo-logo/india/airtel.png 2x"});
                $("#client-logo2 img").attr({src: "../assets/img/mo-logo/india/Bigbasket.png", srcset: "../assets/img/mo-logo/india/Bigbasket-1x.png 1x, ../assets/img/mo-logo/india/Bigbasket.png 2x"});
                $("#client-logo3 img").attr({src: "../assets/img/mo-logo/india/Future-group.png", srcset: "../assets/img/mo-logo/india/Future-group-1x.png 1x, ../assets/img/mo-logo/india/Future-group.png 2x"});
                $("#client-logo4 img").attr({src: "../assets/img/mo-logo/india/gaana.png", srcset: "./assets/img/mo-logo/india/gaana-1x.png 1x, ./assets/img/mo-logo/india/gaana.png 2x"});
                $("#client-logo5 img").attr({src: "../assets/img/mo-logo/india/McAfee.png", srcset: "../assets/img/mo-logo/india/McAfee-1x.png 1x, ../assets/img/mo-logo/india/McAfee.png 2x"});
                $("#client-logo6 img").attr("src", "../assets/img/mo-logo/india/oyo.png");
                $("#client-logo7 img").attr({src: "../assets/img/mo-logo/india/samsung.png", srcset: "../assets/img/mo-logo/india/samsung-1x.png 1x, ../assets/img/mo-logo/india/samsung.png 2x"});
                $("#client-logo8 img").attr({src: "../assets/img/mo-logo/india/vodafone.png", srcset: "../assets/img/mo-logo/india/vodafone-1x.png 1x, ../assets/img/mo-logo/india/vodafone.png 2x"});
            }
            else if (cn_name === "United States" || cn_name === "Canada" ) {
                $("#client-logo1 img").attr("src", "../assets/img/mo-logo/us/billboard.png");
                $("#client-logo2 img").attr("src", "../assets/img/mo-logo/us/hearst.png");
                $("#client-logo3 img").attr("src", "../assets/img/mo-logo/us/McAfee.png");
                $("#client-logo4 img").attr("src", "../assets/img/mo-logo/us/oyo.png");
                $("#client-logo5 img").attr("src", "../assets/img/mo-logo/us/samsung.png");
                $("#client-logo6 img").attr("src", "../assets/img/mo-logo/us/Tmobile.png");
                $("#client-logo7 img").attr("src", "../assets/img/mo-logo/us/travelodge.png");
                $("#client-logo8 img").attr("src", "../assets/img/mo-logo/us/vodafone.png");
            }
            else if (cn_name === "Indonesia") {
                $("#client-logo1 img").attr("src", "../assets/img/mo-logo/indonesia/blibli.png");
                $("#client-logo2 img").attr("src", "../assets/img/mo-logo/indonesia/bukalapak-logo.png");
                $("#client-logo3 img").attr("src", "../assets/img/mo-logo/indonesia/kredivo.png");
                $("#client-logo4 img").attr("src", "../assets/img/mo-logo/indonesia/ralali.png");
                $("#client-logo5 img").attr("src", "../assets/img/mo-logo/indonesia/tiket-com.png");
                $("#client-logo6 img").attr("src", "../assets/img/mo-logo/indonesia/tokopedia.png");
                $("#client-logo7 img").attr("src", "../assets/img/mo-logo/indonesia/traveloka.png");
                $("#client-logo8 img").attr("src", "../assets/img/mo-logo/indonesia/viu.png");
            }
            else {
                $("#client-logo1 img").attr("src", "../assets/img/mo-logo/row/airtel.png");
                $("#client-logo2 img").attr("src", "../assets/img/mo-logo/row/billboard.png");
                $("#client-logo3 img").attr("src", "../assets/img/mo-logo/row/McAfee.png");
                $("#client-logo4 img").attr("src", "../assets/img/mo-logo/row/oyo.png");
                $("#client-logo5 img").attr("src", "../assets/img/mo-logo/row/samsung.png");
                $("#client-logo6 img").attr("src", "../assets/img/mo-logo/row/Tmobile.png");
                $("#client-logo7 img").attr("src", "../assets/img/mo-logo/row/tokopedia.png");
                $("#client-logo8 img").attr("src", "../assets/img/mo-logo/row/vodafone.png");
            }

        }, "jsonp");
    }
}
getIpinfo();