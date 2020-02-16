(function(){

"use strict";

    var phone = document.querySelector('#phone');
    var laptop = document.querySelector('#laptop');
    var sketchbook = document.querySelector('#sketchbook');

    var phoneoverlay = document.querySelector('#phoneoverlay');
    var phoneclose = document.querySelector('#phoneclose');
    var laptopoverlay = document.querySelector('#laptopoverlay');
    var laptopclose = document.querySelector('#laptopclose');
    var sketchbookoverlay = document.querySelector('#sketchbookoverlay');
    var sketchbookclose = document.querySelector('#sketchbookclose');

    phone.addEventListener('click', function () {
        phoneoverlay.style.display='block';
    })
    phoneclose.addEventListener('click', function (){
        phoneoverlay.style.display = 'none';
    })

    laptop.addEventListener('click', function () {
        laptopoverlay.style.display='block';
    })
    laptopclose.addEventListener('click', function (){
        laptopoverlay.style.display = 'none';
    })

    sketchbook.addEventListener('click', function () {
        sketchbookoverlay.style.display='block';
    })
    sketchbookclose.addEventListener('click', function (){
        sketchbookoverlay.style.display = 'none';
    })
}());