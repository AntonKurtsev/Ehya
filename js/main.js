
var modalBtn = $('.modal-open-btn');
var modalOverlay = $('.modal-overlay');
var modal = $('.sign-up-modal');
var modalCloseBtn = $('.sign-up-modal__close-btn');
var headerMenuItem = $('.menu__item');
var dropdownMenu = $('.dropdown-menu');
var dropdownMenuItem = $('.dropdown-menu__item');
var dropdownSubmenu = $('.dropdown-submenu');
var dropdownSubmenuItem = $('.dropdown-submenu__item')

function closeModal() {
    modalOverlay.removeClass('modal-overlay--active');
    modal.removeClass('sign-up-modal--active');
    $('.sign-up-modal__form').trigger('reset');
};

function closeDropdownMenu() {
    dropdownMenu.removeClass('dropdown-menu--active');
    dropdownSubmenu.removeClass('dropdown-submenu--active');
    dropdownMenuItem.removeClass('dropdown-menu__item--hovered');
    headerMenuItem.removeClass('menu__item--hovered');
};

$(document).ready(function () {

    // Modal open/close
    modalBtn.on('click', function () {
        modalOverlay.addClass('modal-overlay--active');
        modal.addClass('sign-up-modal--active');
        closeMobileMenu();
    });

    modalCloseBtn.on('click', function() {
        closeModal();
    });

    modalOverlay.on('click', function() {
        closeModal();
    });

    $(document).keyup(function (e) { 
        if (e.which === 27) {
            closeModal();
        }
    });

    // Header dropdown menu
    $('.menu__item').hover(function() {
        // $('.menu__item').removeClass('menu__item--hovered');
        if ($(this).hasClass('menu__item--dropdown')) {
            // $(this).addClass('menu__item--hovered');
            $(this).children('.dropdown-menu').slideDown(500);
        } else {
            $('.dropdown-menu').slideUp(500);
            // $('.menu__item').removeClass('menu__item--hovered')
        }
    }, function() {
        $('.dropdown-menu__item').removeClass('dropdown-menu__item--hovered');
        $('.dropdown-menu').slideUp(1);
    });

    $('.dropdown-menu__item').hover(function() {
        $('.dropdown-menu__item').removeClass('dropdown-menu__item--hovered');
        if ($(this).hasClass('dropdown-menu__item--dropdown')) {
            $(this).addClass('dropdown-menu__item--hovered');
            $(this).children('.dropdown-submenu').slideDown(500);
        } else {
            $('.dropdown-submenu').slideUp(1);
            $('.dropdown-menu__item').removeClass('dropdown-menu__item--hovered');
        }
    }, function() {
        $('.dropdown-submenu').slideUp(1);
        $('.dropdown-menu__item').removeClass('dropdown-menu__item--hovered');
    });

    // Header xhange when scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 124) {
            $('.header').addClass('header-scroll');
        } else {
            $('.header').removeClass('header-scroll');
        }
    });

    // Quickstart tabs
    var tabsButton = $('.quickstart__button');
    var tabsCodeSample = $('.quickstart__code-sample');
    var tabsExplanationItem = $('.quickstart__explanation-item');

    tabsButton.click(function () {
        var activeCodeSample = $(this).attr('data-target');
        var activeExplanationItem = $(this).attr('data-target');
        tabsButton.removeClass('quickstart__button--active');
        tabsCodeSample.removeClass('quickstart__code-sample--active');
        tabsExplanationItem.removeClass('quickstart__explanation-item--active');
        $(this).addClass('quickstart__button--active');
        $('#' + activeCodeSample).addClass('quickstart__code-sample--active');
        $('#' + activeExplanationItem + '-req').addClass('quickstart__explanation-item--active');
    });

    // Questions accordeon
    $('.accordeon__question').click(function () {
        $('.accordeon__answer').not($(this).next()).slideUp(500);
        $('.accordeon__item').not($(this).parent()).removeClass('accordeon__item--active');
        $(this).next().slideToggle(500);
        $(this).parent().toggleClass('accordeon__item--active');
        $('.accordeon__icons').not($(this).children()).removeClass('accordeon__icons--active');
        $(this).children().toggleClass('accordeon__icons--active');
    });

    var questionsSlider = new Swiper('.questions-slider__container', {
        direction: 'horizontal',
        loop: true,
        speed: 700,
        grabCursor: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    });

    $('.questions-slider__slide').hover(function () {
        questionsSlider.autoplay.stop();
    }, function () {
        questionsSlider.autoplay.start();
    });

    // Plan price toogle
    var cardPrice = $('.plan-card__price-value');
    $('.pricing-plan__switcher-btn').click(function() {
        $('#toogle-circle').toggleClass('pricing-plan__switcher-circle--annually');
        cardPrice.toggleClass('plan-card__price-value--hidden');
    });

    // FAQ accordeon
    $('.faq__question').click(function () {
        $('.faq__answer').not($(this).next()).slideUp(500);
        $('.faq__item').not($(this).parent()).removeClass('faq__item--active');
        $(this).next().slideToggle(500);
        $(this).parent().toggleClass('faq__item--active');
        $('.faq__icons').not($(this).children()).removeClass('faq__icons--active');
        $(this).children().toggleClass('faq__icons--active');
    });

    // Mobile menu
    function closeMobileMenu() {
        $('.mobile-menu').removeClass('mobile-menu--active');
        $('.mobile-menu__submenu-list').slideUp(500);
        $('.mobile-menu__link').removeClass('mobile-menu__link--active');
        closeMobileSubmenu();
    };
    function closeMobileSubmenu() {
        $('.mobile-menu__subsubmenu-list').slideUp(500);
        $('.mobile-menu__submenu-link--dropdown').removeClass('mobile-menu__submenu-link--active');
    };

    $('.mobile-menu-open-btn').click(function () {
        $('.mobile-menu').addClass('mobile-menu--active');
    });

    $('.mobile-menu__close-btn').click(function () {
        closeMobileMenu();
    });

    $('.mobile-menu__overlay').click(function() {
        closeMobileMenu();
    });

    $('.mobile-menu__link--dropdown').click(function() {
        $('.mobile-menu__link').not($(this)).removeClass('mobile-menu__link--active');
        $('.mobile-menu__submenu-list').not($(this).next()).slideUp(500);
        $(this).toggleClass('mobile-menu__link--active');
        $(this).next().slideToggle(500);
        closeMobileSubmenu();
    });

    $('.mobile-menu__submenu-link--dropdown').click(function() {
        $('.mobile-menu__subsubmenu-list').not($(this).next()).slideUp(500);
        $('.mobile-menu__submenu-link--dropdown').not($(this)).removeClass('mobile-menu__submenu-link--active');
        $(this).next().slideToggle(500);
        $(this).toggleClass('mobile-menu__submenu-link--active');
    });
})

// function accordeon (block) {
//     console.log($('.' + block + '__icons'));
//     $('.' + block + '__answer').not($(this).next()).slideUp(500);
//     $('.' + block + '__item').not($(this).parent()).removeClass('faq__item--active');
//     $(this).next().slideToggle(500);
//     $(this).parent().toggleClass(block + '__item--active');
//     $('.faq__icons').not($(this).children()).removeClass(block + '__icons--active');
//     $(this).children().toggleClass(block + '__icons--active');
// }