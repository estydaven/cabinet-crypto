 $('document').ready(function(){
    $('.open-menu').on('click', function(){
        $('.aside').toggleClass('mobile-open');
    });
    $('.home-work__header').click(function () {
        $(this).toggleClass('home-work--expand').next().slideToggle();
        $('.home-work__header').not(this).removeClass('home-work--expand').next().slideUp();
    });
});

const moreButton = document.querySelectorAll('.more');
const moreWrapper = document.querySelectorAll('.more-hidden');

$(window).on('load resize', function() {
    if ($(window).width() < 481) {
        const changeLectionCondition = () => {
            moreWrapper.forEach((el) => {
                el.classList.toggle('more-hidden');
                if (el.classList.contains('more-hidden')) {
                    moreButton.innerText = '+';
                } else {
                    moreButton.innerText = '-';
                } 
            });   
        }   
        
        moreButton.forEach((el) => {
            el.style.display = 'block';
            el.addEventListener('click', changeLectionCondition);
        })
    } 
});

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();  
});

$('#save-btn').click(function(e){
    e.preventDefault();
});

$('.edit_crypto').on('click', function() {
    let editWrapper = $(this).parent().parent().parent().parent().find('.editing'),
        cryptoWrapper = $(this).closest('.crypto__wrap');
        
        cryptoWrapper.addClass('hidden');
        editWrapper.removeClass('hidden');        
});
$('.promotion__button_denied').on('click', function() {
    let cryptoWrapper = $(this).parent().parent().parent().parent().find('.crypto__wrap'),
        editWrapper = $(this).closest('.editing');
        
        cryptoWrapper.removeClass('hidden');
        editWrapper.addClass('hidden');        
});

$(document).ready(function () {  
    $('.homework-hidden').hide();  
    $(".show_hide").on("click", function () {
        var txt = $(".homework-hidden").is(':visible') ? 'Правильный ответ' : 'Скрыть правильный ответ';
        $(".show_hide").text(txt);
        $('.homework-hidden').slideToggle(200);
    });
});
$(document).ready(function () {  
    $('.homework-hidden2').hide(); 
    $(".show_hide2").on("click", function () {
        var txt = $(".homework-hidden2").is(':visible') ? 'Правильный ответ' : 'Скрыть правильный ответ';
        $(".show_hide2").text(txt);
        $('.homework-hidden2').slideToggle(200);
    });
});