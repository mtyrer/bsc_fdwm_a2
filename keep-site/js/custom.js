'use strict';

var slideIndex = 0;

function showSlides() {
    var i,
        slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1; }

    try {
        slides[slideIndex - 1].style.display = "block";
    } catch (err) {

    }
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* for multicolumn items set the height for all columns */
var heightAboutSmiggy = $("#about-smiggy").height();
var heightHowItWorks = $("#how-it-works").height();
var heightMainContentArea = $(".main-content-area").height();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function mainContentAreaHeight() {

    /* if we have multiple columns on the section then apply height setting */
    if (document.documentElement.clientWidth > 768)  {
        if (heightHowItWorks > heightAboutSmiggy) {
            $(".infoblock").height(heightHowItWorks + 40);
        } else {
            $(".infoblock").height(heightAboutSmiggy + 40);
        }
    }
}

$(document).ready(function () {
       $('.dropdown-toggle').dropdown();
});

$(window).resize(function (){
    window.location.href = window.location.href;
});

$(document).ready(function () {
    $('#blog-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    });
});

showSlides();
mainContentAreaHeight();
