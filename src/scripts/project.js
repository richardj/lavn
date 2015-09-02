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