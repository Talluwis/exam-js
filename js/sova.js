$(document).ready(function () {
    // Объявление перемен
    const button = document.querySelector('.button');
    const login = document.querySelector('.login');
    const open = document.querySelector('.info-btn');
    const close = document.querySelector('.close-logo');
    const box = document.querySelector('.info-box');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const slides = document.querySelectorAll('.slide');
    const slideIcons = document.querySelectorAll('.slide-icon');
    const numberOfSlides = slides.length;
    let slideNumber = 0;
    //Авторизация
    button.addEventListener('click', () => {
        $('.enter').fadeOut();
        $('input').prop('disabled', true);
    });

    login.addEventListener('click', () => {
        $('.enter').fadeIn();
    });
    //Слайдер
    nextBtn.addEventListener('click', () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove('active');
        });

        slideNumber++;
        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add('active');
        slideIcons[slideNumber].classList.add('active');
    })

    prevBtn.addEventListener('click', () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove('active');
        });

        slideNumber--;
        if (slideNumber < 0) {
            slideNumber = numberOfSlides - 1;
        }

        slides[slideNumber].classList.add('active');
        slideIcons[slideNumber].classList.add('active');
    });
    //Скрытный текст
    let flag = false;

    jQuery('.description').click(function AddDelete() {
        if (flag) {
            jQuery('p').hide(300);
            $('.description').text('+');
        } else {
            jQuery('p').show(300);
            $('.description').text('•');
        }
        flag = !flag;
    });
    //Модальное окно с информацией
    open.addEventListener('click', () => {
        box.classList.add('active');
        box.classList.remove('close');
    });
    close.addEventListener('click', () => {
        box.classList.remove('active');
        box.classList.add('close');
    });
});