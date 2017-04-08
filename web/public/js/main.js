$(document).ready(function() {

    var Initialize = {

        scrollToFixed: function() {
            $('.navbar-scrolltofixed').scrollToFixed();
        },

        wow: function() {
            var wow = new WOW({
                mobile: false
            });
            wow.init();
        },

        parallax: function() {
            $(window).stellar();
        }
    };

    var Togglers = {

        header: function () {
            $('.toogle-nav').on('click', function() {
                $('.responsive-menu, .navbar').toggleClass('open');
            })
        }
    };

    var $navbarItem = $('.nav-menu a, .footer-nav a');

    var Navbar = {

        init: function() {
            $(document).on('scroll', this.onScroll);
        },

        onScroll: function() {
            var scrollPos = $(document).scrollTop();

            $navbarItem.each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr('href'));

                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $navbarItem.removeClass('active');
                    currLink.addClass('active');
                } else {
                    currLink.removeClass('active');
                }
            });
        },

        click: function() {
            $navbarItem.on('click', function (e) {
                e.preventDefault();
                $(document).off('scroll');

                $navbarItem.each(function () {
                    $(this).removeClass('active');
                });
                $(this).addClass('active');

                var $target = $(this.hash);

                $('html, body').stop().animate({
                    scrollTop: $target.offset().top + 2
                }, 500, 'swing', function () {
                    $(document).on('scroll', this.onScroll);
                });
            });
        }
    };

    Initialize.scrollToFixed();
    Initialize.wow();
    Initialize.parallax();

    Togglers.header();

    Navbar.init();
    Navbar.click();
});
