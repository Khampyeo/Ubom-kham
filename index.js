var menuIcon = document.querySelector(".header .menu-icon");
var headerMenu = document.querySelector(".header .header__menu")
var menuList = document.querySelector(".header .menu__list");
var menuOpen = 0;
menuIcon.onclick = function () {
    if (!menuOpen) {
        headerMenu.style.maxWidth = "800px"
        menuList.style.display = "flex";
        menuOpen = 1;
    }
    else {
        menuList.style.display = "none";
        headerMenu.style.maxWidth = "50px"
        menuOpen = 0;
    }
}
// 

var menuIcon2 = document.querySelector(".header-stick .menu-icon");
var headerMenu2 = document.querySelector(".header-stick .header__menu")
var menuList2 = document.querySelector(".header-stick .menu__list");
var menuOpen2 = 0;
menuIcon2.onclick = function () {
    if (!menuOpen2) {
        headerMenu2.style.maxWidth = "800px"
        menuList2.style.display = "flex";
        menuOpen2 = 1;
    }
    else {
        menuList2.style.display = "none";
        headerMenu2.style.maxWidth = "50px"
        menuOpen2 = 0;
    }
}
$('.review__list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },]
});
$('.counter').countUp({
    'time': 1000,
    'delay': 10
});

// 
let mybutton = document.querySelector(".head-page__button");
let stickyHeader = document.querySelector(".header-stick");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
    scrollFunctionHeader();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // mybutton.style.opacity = "1";
        mybutton.style.transform = "translateY(0)";

    } else {
        // mybutton.style.opacity = "0";
        mybutton.style.transform = "translateY(200px)"
    }

}

function scrollFunctionHeader() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        stickyHeader.style.transform = "translateY(0)";


    } else {
        stickyHeader.style.transform = "translateY(-100%)";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}