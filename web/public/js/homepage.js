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

    //drag and drop contacts
    var $socialIcon              = $('.social-icon'),
        $droppableContainer      = $('.droppable-container');

    $socialIcon.draggable({containment: '.drag-and-drop-container'});

    $droppableContainer.droppable({
        drop: handleDropEvent
    });

    function handleDropEvent(event, ui) {
        window.open(ui.draggable.context.attributes['data-href'].value, '_blank');
        $socialIcon.draggable('option', 'revert', true);
        setTimeout(function() {
            $socialIcon.draggable('option', 'revert', false);
        }, 100);
    }

    //Google Map
    var mapCenter = {lat: 56.495785, lng: 85.056898};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: mapCenter.lat, lng: mapCenter.lng},
        zoom: 12,
        scrollwheel: false,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: {lat: mapCenter.lat, lng: mapCenter.lng},
        map: map,
        icon: $('#map').data('marker')
    });

});
