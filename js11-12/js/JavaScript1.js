
$(document).ready(function () {
    var imgs = [
        { src: '../img/108040.jpg', text: 'Описание 1' },
        { src: '../img/1252077103_240x320_wallpapers-12.jpg', text: 'Описание 2' },
    { src: '../img/133.jpg', text: 'Описание 3' },
    { src: '../img/dragon_3.gif', text: 'Описание 4' },
    { src: '../img/tiger.jpg', text: 'Описание 5' },
    { src: '../img/images.jpg', text: 'Описание 6' },
    { src: '../img/tigr_5.jpg', text: 'Описание 7' },
    { src: '../img/192515785.jpg', text: 'Описание 8' },
    { src: '../img/426417157.jpg', text: 'Описание 9' },
    { src: '../img/images (1).jpg', text: 'Описание 10' },
    { src: '../img/239432549.jpg', text: 'Описание 11' },
    { src: '../img/flavers_2.gif', text: 'Описание 12' }
    ];

    $('.carousel').myFirstPlugin(imgs);
    //var leftUIEl = $('.carousel-arrow-left');
    //var rightUIEl = $('.carousel-arrow-right');
    //var elementsList = $('.carousel-list');

    //var pixelsOffset = 240;
    //var currentLeftValue = 0;
    //var elementsCount = elementsList.find('li').length;
    //var minimumOffset = -((elementsCount - 5) * pixelsOffset);
    //var maximumOffset = 0;

    //leftUIEl.click(function () {
    //    if (currentLeftValue != maximumOffset) {
    //        currentLeftValue += 240;
    //        elementsList.animate({ left: currentLeftValue + "px" }, 500);
    //    }
    //});

    //rightUIEl.click(function () {
    //    if (currentLeftValue != minimumOffset) {
    //        currentLeftValue -= 240;
    //        elementsList.animate({ left: currentLeftValue + "px" }, 500);
    //    }
    //});
});
