$(function() {
  var sideNav = $('#side-nav');
  var sideNavBtn = $('#side-nav-btn');
  var openNav = 'open-side-nav';

  sideNavBtn.click(function(){
    sideNav.toggleClass(openNav);
    sideNavBtn.toggleClass(openNav);
  });
});
