$(function(){
    $('.form__button__registr').click(function () {
      $('.registration').show();
    $('.form-reg').show();
    });
 
    $('.form-reg__close').click(function () {
      $('.login').hide();
    $('.form').hide();
    });
});

$(function(){
    $('.registr').click(function () {
      $('.modal').show();
    });
});

$(function(){
    $('.form__link__forget').click(function () {
      $('.password').show();
    $('.form-pasw').show();
    });
 
    $('.form-pasw__close').click(function () {
      $('.login').hide();
    $('.form').hide();
    });
});


$(function(){
    $('.eml-otpr').click(function () {
      $('.form-password__code').show();
    });
});
