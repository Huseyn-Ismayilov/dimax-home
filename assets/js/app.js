$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 60) {
		$(".site_header").addClass("scroll_down");
	} else {
		$(".site_header").removeClass("scroll_down");
	}
});



$('.toggle').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
	$('.toggle').toggleClass('opened')
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});




// var swiper = new Swiper(".content_slider .slider", {
// 	slidesPerView: 1,
// 	spaceBetween: 30,
// 	pagination: {
// 		el: ".content_slider .swiper-pagination",
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: ".content_slider .next_arrow ",
// 		prevEl: ".content_slider .prev_arrow",
// 	},
// });

