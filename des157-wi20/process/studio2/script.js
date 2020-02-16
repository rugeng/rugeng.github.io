(function(){

"use strict";

    var phone = document.querySelector('#phone');
    var laptop = document.querySelector('#laptop');
    var headphones = document.querySelector('#headphones');

    var phoneoverlay = document.querySelector('#phoneoverlay');
    var phoneclose = document.querySelector('#phoneclose');
    var laptopoverlay = document.querySelector('#laptopoverlay');
    var laptopclose = document.querySelector('#laptopclose');
    var headphonesoverlay = document.querySelector('#headphonesoverlay');
    var headphonesclose = document.querySelector('#headphonesclose');

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

    headphones.addEventListener('click', function () {
        headphonesoverlay.style.display='block';
    })
    headphonesclose.addEventListener('click', function (){
        headphonesoverlay.style.display = 'none';
    })
}());