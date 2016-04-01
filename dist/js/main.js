(function() {
  console.log('it works!!');

  $('.ui.menu .ui.dropdown').dropdown({
    on: 'hover'
  });

  $('.ui.menu a.item').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.ui.dropdown').dropdown();

  $('.ui.buttons .dropdown.button').dropdown({
    action: 'combo'
  });

  $('.ui.dropdown').dropdown({
    on: 'click'
  });

  $('.special.card .image').dimmer({
    on: 'hover'
  });

  $('.star.rating').rating();

  $('.card .dimmer').dimmer({
    on: 'hover'
  });

  $('#comments').on('click', function() {
    return $('#sidebar').sidebar({
      transition: 'push',
      dimPage: false,
      debug: true
    }).sidebar('toggle');
  });

}).call(this);
