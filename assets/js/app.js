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






$(document).ready(function () {
	$("a.scrollDown").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				window.location.hash = hash;
			});
		}
	});
});

// End 

$('.selectLanguage .btn').click(function () {
	$(this).parent().toggleClass('active')
})

$(document).click(function (event) {
	if (!$(event.target).closest(".selectLanguage .btn").length) {
		$('.selectLanguage').removeClass('active');
	}
});

// End 


$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$('#tabs-nav li').click(function () {
	$('#tabs-nav li').removeClass('active');
	$(this).addClass('active');
	$('.tab-content').hide();

	var activeTab = $(this).find('a').attr('href');
	$(activeTab).fadeIn();
	return false;
});

// End



var swiper = new Swiper(".productDetail .gallery .slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".productDetail .gallery .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".productDetail .next_arrow ",
		prevEl: ".productDetail .prev_arrow",
	},
});