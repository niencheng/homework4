$(document).ready(function () {
  $('.header-icon').click(function (e) {
    e.preventDefault();
    $('.header-list').toggleClass('active');
  })
});