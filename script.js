$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    const target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 70 }, 650);
      $('.navbar-collapse').collapse('hide');
    }
  });

  $('#consultForm').on('submit', function (event) {
    event.preventDefault();
    $('#formMessage').removeClass('d-none');
    this.reset();
    setTimeout(function () {
      $('#formMessage').addClass('d-none');
    }, 4000);
  });
});
