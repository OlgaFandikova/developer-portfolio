$(document).ready(function() {

    var $gallery                   = $('.gallery'),
        $galleryItem               = $('.gallery-item'),
        $galleryNext               = $('.gallery-next'),
        $galleryPrev               = $('.gallery-prev'),
        $galleryOpen               = $('.gallery-open'),
        $stackLeft                 = $('.stack-left'),
        $stackRight                = $('.stack-right'),
        $galleryTitle              = $('.gallery-title'),
        $galleryDescriptionText    = $('.gallery-description-text'),
        galleryItemLeftLength      = $('.gallery-item-left').size(),
        galleryItemRightLength     = $('.gallery-item-right').size(),
        galleryLength              = $galleryItem.size()

    $galleryNext.on('click', function() {
        var activeIndex = $('.gallery-item.active').index()

        if (activeIndex < galleryLength - 1) {
            $galleryItem.eq(activeIndex).removeClass('active').addClass('gallery-item-left')
            $galleryItem.eq(activeIndex + 1).removeClass('gallery-item-right').addClass('active')

            galleryItemLeftLength++
            galleryItemRightLength--

            $stackRight.css('height', (galleryItemRightLength + 2) * 5 + 'px')
            setTimeout(function() {
                $stackLeft.css('height', (galleryItemLeftLength + 2) * 5 + 'px')
                $galleryTitle.text($('.gallery-item.active').data('title'))
                $galleryDescriptionText.text($('.gallery-item.active').data('description'))
            }, 450)
        }
    })

    $galleryPrev.on('click', function() {
        var activeIndex = $('.gallery-item.active').index()

        if (activeIndex > 0) {
            $galleryItem.eq(activeIndex).removeClass('active').addClass('gallery-item-right')
            $galleryItem.eq(activeIndex - 1).removeClass('gallery-item-left').addClass('active')

            galleryItemLeftLength--
            galleryItemRightLength++

            $stackLeft.css('height', (galleryItemLeftLength + 2) * 5 + 'px')
            setTimeout(function() {
                $stackRight.css('height', (galleryItemRightLength + 2) * 5 + 'px')
                $galleryTitle.text($('.gallery-item.active').data('title'))
                $galleryDescriptionText.text($('.gallery-item.active').data('description'))
            }, 450)
        }
    })

    $galleryOpen.on('click', function(e) {
        var text = $galleryOpen.text()

        $gallery.toggleClass('open')
        $galleryOpen.text(
            text == "Развернуть портфолио" ? "Свернуть портфолио" : "Развернуть портфолио"
        )
        e.preventDefault()
    })






    var $modalOverlay = $('.modal-overlay'),
        $modal = $('.modal'),
        documentWidth = parseInt(document.documentElement.clientWidth),
        windowsWidth = parseInt(window.innerWidth),
        scrollbarWidth = windowsWidth - documentWidth,
        startModalState = {}

    $galleryItem.on('click', function() {
        var $item = $(this).find('.gallery-img'),
            offsetTop = $item.offset().top,
            offsetLeft = $item.offset().left,
            width = $item.width(),
            height = $item.height(),
            scrollTop = $(document).scrollTop(),
            windowsWidth = parseInt(window.innerWidth),
            windowsHeight = parseInt(window.innerHeight)

        $('body').addClass('modal-open').css({'padding-right': scrollbarWidth + 'px'})
        $modalOverlay.show()

        startModalState = {
            width: width + 20 + 'px',
            height: height + 20 + 'px',
            top: offsetTop - scrollTop + 'px',
            left: offsetLeft + 'px'
        }
        $modal.css(startModalState)

        setTimeout(function() {
            $modal.animate({
                width: windowsWidth + 'px',
                height: windowsHeight + 'px',
                top: 0,
                left: 0
            }, 350)
        }, 100)
    })

    $modalOverlay.on('click', function() {
        $modal.animate(startModalState, 350)
        $('body').removeClass('modal-open').removeAttr('style')
        setTimeout(function() {
            $modalOverlay.hide()
        }, 350)
    })
})
