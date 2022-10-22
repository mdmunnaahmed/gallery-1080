"user strict";

// Preloader
$(window).on("load", function () {
	$(".preloader").fadeOut(1000);
});

// Menu Click Event
let trigger = $(".header-trigger");
let dropdown = $(".menu-sidebar");
if (trigger || dropdown) {
	trigger.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown.toggleClass("active");
			trigger.toggleClass("active");
			$(".overlay").toggleClass("active-color");
		});
	});
	dropdown.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		if (parseInt(screenSize) < parseInt(991)) {
			dropdown.removeClass("active");
			trigger.removeClass("active");
			$(".overlay").removeClass("active-color");
		}
	});
}

// Menu Click Event
let trigger2 = $(".search-trigger");
let dropdown2 = $(".search-form");
if (trigger2 || dropdown2) {
	trigger2.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown2.toggleClass("active");
			$(".overlay").toggleClass("active-color");
		});
	});
	dropdown2.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		if (parseInt(screenSize) < parseInt(991)) {
			dropdown2.removeClass("active");
			$(".overlay").removeClass("active-color");
		}
	});
}

$(".menu-close").on("click", function () {
	$(".menu").slideUp();
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
	screenSize = window.innerWidth;
});

$(".menu li a").on("click", function (e) {
	if (parseInt(screenSize) < parseInt(991)) {
		$(this).siblings(".sub-menu").slideToggle();
	}
});

// Sticky Menu
var header = document.querySelector(".header");
if (header) {
	window.addEventListener("scroll", function () {
		header.classList.toggle("sticky", window.scrollY > 0);
	});
}

//Click event to scroll to top
$(".scrollToTop").on("click", function () {
	$("html, body").animate(
		{
			scrollTop: 0,
		},
		300
	);
	return false;
});

// Shop Cart
$(".minus-plus").on("click", function () {
	var oldValue = $(this).siblings("input").val();
	if ($(this).hasClass("cart-plus")) {
		var newVal = parseFloat(oldValue) + 01;
	} else {
		if (oldValue > 1) {
			var newVal = parseFloat(oldValue) - 01;
		} else {
			newVal = 01;
		}
	}
	$(this).siblings("input").val(newVal);
});

//Faq
$(".faq-header").on("click", function (e) {
	var element = $(this).parent(".faq-item");
	if (element.hasClass("open")) {
		element.removeClass("open");
		element.find(".faq-item__content").removeClass("open");
		element.find(".faq-item__content").slideUp(300, "swing");
	} else {
		element.addClass("open");
		element.children(".faq-item__content").slideDown(300, "swing");
		element.siblings(".faq-item").children(".faq-item__content").slideUp(300, "swing");
		element.siblings(".faq-item").removeClass("open");
		element.siblings(".faq-item").find(".faq-item__content").slideUp(300, "swing");
	}
});

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".menu li a").each(function () {
	if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
		$(this).addClass("active");
	}
});

$(".logo, .sidebar-toggler-icon").on("click", function (e) {
	$(".menu-sidebar").toggleClass("menu-icon-show");
	$(".menu-sidebar").toggleClass("menu-icon-text-show");
	var menuSidebarWidth = $(".menu-sidebar").width();
	var bodyContent = $(".body-content");
	$(".sidebar-toggler-icon").toggleClass("short");
	if (parseInt(screenSize) > parseInt(991)) {
		bodyContent.css("width", screenSize - menuSidebarWidth);
	}
});

window.addEventListener("resize", function (e) {
	if (parseInt(screenSize) > parseInt(991)) {
		var menuSidebarWidth = $(".menu-sidebar").width();
		$(".body-content").css("width", screenSize - menuSidebarWidth);
	}
});

var menuBottomWidth = $(".responsive-bottom-menu").height();
$(".body-content").css("margin-bottom", menuBottomWidth + 40 + "px");

$("#photoVideo").on("change", function () {
	var selectedOption = $(this).find(":selected").val();
	console.log(selectedOption);
	if (selectedOption == "photos") {
		$("#photos").toggleClass("active show");
		$("#videos").toggleClass("active show");
		$(".modalToggle").attr("data-bs-target", "#shareModalTwo");
	}
	if (selectedOption == "videos") {
		$("#photos").toggleClass("active show");
		$("#videos").toggleClass("active show");
		$(".modalToggle").attr("data-bs-target", "#shareModalThree");
	}
});

$(".cross-btn").on("click", function () {
	$(".cross-btn").closest(".failed-text").remove();
});
$(".remove-btn").on("click", function () {
	$(".remove-btn").closest(".uploadfile-wrapper").remove();
});

$(".delete-thumb").on("click", function () {
	$(".delete-thumb").closest(".mobile-item").remove();
});
$(".delete-thumb2").on("click", function () {
	$(".delete-thumb2").closest(".mobile-item").remove();
});
$(".delete-thumb3").on("click", function () {
	$(".delete-thumb3").closest(".mobile-item").remove();
});

$(".pricing-item").on("click", function (e) {
	$(this).children(".pricing-collapse-content").slideToggle();
});

var itemCount = document.querySelectorAll(".gallery-item-count div .gallery-item");
$(".totalGalleryCount").text(itemCount.length);

$(".gallery-item input").on("click", function () {
	var numberOfChecked = $(".gallery-item input:checkbox:checked").length;
	$(".selectedGalleryCount").text(numberOfChecked);

	if (parseInt(screenSize) < parseInt(991)) {
		if (numberOfChecked >= 0) {
			$(".bottom-button-wrapper").addClass("show");
			$(".gallery-select-options").addClass("show");
		}
		if (numberOfChecked == 0) {
			$(".bottom-button-wrapper").removeClass("show");
			$(".gallery-select-options").removeClass("show");
		}
	}

	if (parseInt(screenSize) < parseInt(1199)) {
		if (numberOfChecked >= 0) {
			$(".gallery-select-options-1080").addClass("show");
		}
		if (numberOfChecked == 0) {
			$(".gallery-select-options-1080").removeClass("show");
		}
	}
});

$(".close-selection").on("click", function () {
	$(".gallery-item input").prop("checked", false);
	var numberOfChecked = $(".gallery-item input:checkbox:checked").length;
	$(".selectedGalleryCount").text(numberOfChecked);
	$(".bottom-button-wrapper").removeClass("show");
	$(".gallery-select-options").removeClass("show");
	$(".gallery-select-options-1080").removeClass("show");
});

$(".check-all").on("click", function () {
	$(".gallery-item input").prop("checked", true);
	var numberOfChecked = $("#photos .gallery-item input:checkbox:checked").length;
	var numberOfChecked = $("#videos .gallery-item input:checkbox:checked").length;
	$(".selectedGalleryCount").text(numberOfChecked);
});

$(".remove-item").on("click", function () {
	$(this).closest(".uploaded-file-item").parent("li").remove();
});
