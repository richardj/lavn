var app = angular.module('lavn', []);

  // window.onerror = function(){  return true;} 

init();

function init() {
  loadCountDown();
}

var countdown = function() {
  var date_now = new Date().getTime();
  var date_future = new Date('10,1,2015').getTime();

  diff = countdown(date_now, date_future, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
  document.getElementById('countdown').value = diff.toString();
  console.log("asdas");
};

function loadCountDown() {
  window.setInterval(countdown, 1000);
};


$(function() {
  /* mobile navigation switch */

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



  /* change logo when scrolling */

  $(document).on('scroll', function(event) {
    if ($(document).scrollTop() > 100) {
      $('body').addClass('small-logo');
    }
    else {
      $('body').removeClass('small-logo');
    }
    console.log($(document).scrollTop());
  });


  /* Modal activation and deactivation */
  $('.modal .close').on('click', function(event) {
    $(this).parents('.modal-wrapper').hide();
    $('.overlay').hide();
  });
});