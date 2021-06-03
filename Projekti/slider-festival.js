// for sunnyhill part
$('.left-sunny').click(function() {
    var currentSlide = $('.slide-sunny.active-sunny');
    var prevSlide = currentSlide.prev();

    currentSlide.removeClass('active-sunny');
    prevSlide.addClass('active-sunny');

    if (prevSlide.length == 0) {
        $('.slide-sunny').last().addClass('active-sunny');
    }
});

// for dokufest part
$('.left-doku').click(function() {
    var currentSlide = $('.slide-doku.active-doku');
    var prevSlide = currentSlide.prev();

    currentSlide.removeClass('active-doku');
    prevSlide.addClass('active-doku');

    if (prevSlide.length == 0) {
        $('.slide-doku').last().addClass('active-doku');
    }
});

// for hardhfest part
$('.left-hardh').click(function() {
    var currentSlide = $('.slide-hardh.active-hardh');
    var prevSlide = currentSlide.prev();

    currentSlide.removeClass('active-hardh');
    prevSlide.addClass('active-hardh');

    if (prevSlide.length == 0) {
        $('.slide-hardh').last().addClass('active-hardh');
    }
});

// for prifest part
$('.left-pri').click(function() {
    var currentSlide = $('.slide-pri.active-pri');
    var prevSlide = currentSlide.prev();

    currentSlide.removeClass('active-pri');
    prevSlide.addClass('active-pri');

    if (prevSlide.length == 0) {
        $('.slide-pri').last().addClass('active-pri');
    }
});

const myError = new Error('minor error when using the sliders, the 3 photos go: 1, 3, 2. Nevermind, fixed at frontend HTML!');
console.log(myError.message);
try {
    console.log(myError)
} catch (err) {
    console.error(err)
}