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

  $('.ui:not(.container, .grid)').each(function() {
    $(this).popup({
      on: 'hover',
      variation: 'small inverted',
      exclusive: true,
      content: $(this).attr('class')
    });
  });

  $('#comments').on('click', function() {
    $('.ui.right.sidebar.vertical').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    return console.log('sidebar');
  });

}).call(this);
