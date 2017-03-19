$(document).ready(function() {

    //Анимация портфолио

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
        galleryLength              = $galleryItem.size();

    //Следующий
    $galleryNext.on('click', function() {
        var activeIndex = $('.gallery-item.active').index();

        if (activeIndex < galleryLength - 1) {
            $galleryItem.eq(activeIndex).removeClass('active').addClass('gallery-item-left');
            $galleryItem.eq(activeIndex + 1).removeClass('gallery-item-right').addClass('active');

            galleryItemLeftLength++;
            galleryItemRightLength--;

            $stackRight.css('height', (galleryItemRightLength + 2) * 5 + 'px');
            setTimeout(function() {
                $stackLeft.css('height', (galleryItemLeftLength + 2) * 5 + 'px');
                $galleryTitle.text($('.gallery-item.active').data('title'));
                $galleryDescriptionText.text($('.gallery-item.active').data('description'));
            }, 450)
        }
    });

    //Предыдущий
    $galleryPrev.on('click', function() {
        var activeIndex = $('.gallery-item.active').index();

        if (activeIndex > 0) {
            $galleryItem.eq(activeIndex).removeClass('active').addClass('gallery-item-right');
            $galleryItem.eq(activeIndex - 1).removeClass('gallery-item-left').addClass('active');

            galleryItemLeftLength--;
            galleryItemRightLength++;

            $stackLeft.css('height', (galleryItemLeftLength + 2) * 5 + 'px');
            setTimeout(function() {
                $stackRight.css('height', (galleryItemRightLength + 2) * 5 + 'px');
                $galleryTitle.text($('.gallery-item.active').data('title'));
                $galleryDescriptionText.text($('.gallery-item.active').data('description'));
            }, 450)
        }
    });

    //Раскрыть галерею
    $galleryOpen.on('click', function(e) {
        var text = $galleryOpen.text();

        $gallery.toggleClass('open');
        $galleryOpen.text(
            text == "Развернуть портфолио" ? "Свернуть портфолио" : "Развернуть портфолио"
        );
        e.preventDefault();
    });


    //Откытие модального окна работы из портфолию и загрузка контента

    var $modalOverlay           = $('.portfolio-modal'),
        $modal                  = $modalOverlay.find('.modal'),
        $modalLoader            = $modalOverlay.find('.modal-loader'),
        documentWidth           = parseInt(document.documentElement.clientWidth),
        windowsWidth            = parseInt(window.innerWidth),
        scrollbarWidth          = windowsWidth - documentWidth,
        startModalState         = {};

    //Открыть модальное окно
    $galleryItem.on('click', function() {
        var $item = $(this).find('.gallery-img'),
            offsetTop = $item.offset().top,
            offsetLeft = $item.offset().left,
            width = $item.width(),
            height = $item.height(),
            scrollTop = $(document).scrollTop(),
            windowsWidth = parseInt(window.innerWidth),
            windowsHeight = parseInt(window.innerHeight),
            loadContent = false,
            expirationTime = false;

        $('body').addClass('modal-open').css({'padding-right': scrollbarWidth + 'px'});
        $modalOverlay.fadeIn(150);

        $.ajax({
            url: $(this).data('content'),
            dataType: "html",
            success: function(data) {
                $modal.html(data);
                loadContent = true;
                if (expirationTime) {
                    $modal.addClass('active');
                    $modalLoader.fadeOut(200);
                }
            }
        });

        startModalState = {
            width: width + 20 + 'px',
            height: height + 20 + 'px',
            top: offsetTop - scrollTop + 'px',
            left: offsetLeft + 'px'
        };
        $modal.css(startModalState);

        setTimeout(function() {
            $modal.animate({
                width: windowsWidth + 'px',
                height: windowsHeight + 'px',
                top: 0,
                left: 0
            }, 300)
        }, 150);

        setTimeout(function() {
            expirationTime = true;
            if (loadContent) {
                $modal.addClass('active');
            } else {
                $modalLoader.fadeIn(200);
            }
        }, 350);
    });

    //Закрыть модальное окно
    $(document).on('click', '.modal-close',function() {
        $modal.removeClass('active');
        setTimeout(function() {
            $modal.animate(startModalState, 300);
            $('body').removeClass('modal-open').removeAttr('style');
        }, 200);
        setTimeout(function() {
            $modalOverlay.fadeOut(150);
        }, 500);
    });

    $(window).on('resize', function() {
        var windowsWidth = parseInt(window.innerWidth),
            windowsHeight = parseInt(window.innerHeight);

        $modal.css({
            width: windowsWidth + 'px',
            height: windowsHeight + 'px'
        });
    });
});
