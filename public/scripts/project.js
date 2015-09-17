var app = angular.module('lavn', []);

$(function() {

  $('.menu-button').on('click', function(event){
    if ($('body').hasClass('navigation-open')) {
      $('body').removeClass('navigation-open');
    }
    else {
      $('body').addClass('navigation-open');
    }
  });

  $('.mobile.open .close').on('click', function(event){
    $('body').removeClass('navigation-open');
  });

  / * faq */

  $('.question-answer .trigger').on('click', function(event) {
    if ($(this).parents('.question-answer').hasClass('open')) {
      $(this).parents('.question-answer').removeClass('open');
    }
    else {
      $(this).parents('.question-answer').addClass('open');
    }
  });


  /* logo switching */

  $(document).on('scroll', function(e) {    
    if ($(document).scrollTop() > 100 ) {
      $('.header, .menu-button').addClass('small');

      $('.logo.large').addClass('hide');
      $('.logo.medium').removeClass('hide');
    }
    else {
      $('.header, .menu-button').removeClass('small');
      $('.logo.large').removeClass('hide');
      $('.logo.medium').addClass('hide');
    }
  });

  $(document).on('ready', function() {

  });
});



(function() {
  var counter = function() {
    var date_now = new Date().getTime();
    var date_future = new Date('10,1,2015').getTime();

    diff = countdown(date_now, date_future, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

    $('#countdown .days:first strong').html(diff.days.toString());
    $('#countdown .hours:first strong').html(diff.hours.toString());
    $('#countdown .minutes:first strong').html(diff.minutes.toString());
    $('#countdown .seconds:first strong').html(diff.seconds.toString());
  };
  window.setInterval(counter, 1000);
}).call(this);