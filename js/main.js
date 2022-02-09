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

const editButtons = document.querySelectorAll('.edit_crypto');
let cryptoWrapper = document.querySelectorAll('.crypto__wrap');
let editWrapper = document.querySelectorAll('.editing');

function editCrypto() {
    cryptoWrapper.forEach((el) => {
        el.style.display = 'none';
    })
    editWrapper.forEach((elem) => {
        elem.style.display = 'block';
    })
}

editButtons.forEach((el) => {
    el.addEventListener('click', editCrypto);
})