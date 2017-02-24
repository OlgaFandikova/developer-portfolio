const Initialize = {
    scrollToFixed: function() {
        $('.navbar-scrolltofixed').scrollToFixed()
    },
    wow: function() {
        var wow = new WOW({
            mobile: false
        });
        wow.init()
    },
    parallax: function() {
        $(window).stellar()
    }
}

const Togglers = {
    header: function () {
        $('.toogle-nav').on('click', function() {
            $('.responsive-menu').slideToggle()
        })
    }
}

$(document).ready(function() {
    Initialize.scrollToFixed()
    Initialize.wow()
    Initialize.parallax()

    Togglers.header()
})
