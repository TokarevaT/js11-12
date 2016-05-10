(function ($) {
    $.fn.myFirstPlugin = function (imgs) {

        var $div = this;
        var $leftButton = $('<div class="carousel-arrow-left"><span>Влево</span></div>');
        var $rightButton = $('<div class="carousel-arrow-right"><span>Вправо</span></div>');

        var $carouselContent = '<div class="carousel-hider"><ul class="carousel-list">';

        for (var i = 0; i < imgs.length; i++) {
            $carouselContent = $carouselContent + '<li class="carousel-element"><img src="' + imgs[i].src + '"><p>' + imgs[i].text + '</p></li>';
        }

        $carouselContent = $carouselContent + '</ul></div>';

        $div.append($leftButton);
        $div.append($carouselContent);
        $div.append($rightButton);

        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = imgs.length;
        var minimumOffset = -((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;

        $leftButton.click(function () {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                $('.carousel-list').animate({ left: currentLeftValue + "px" }, 500);
            }
        })

        $rightButton.click(function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                $('.carousel-list').animate({ left: currentLeftValue + "px" }, 500);
            }
        })
    }
    return this;
})(jQuery);