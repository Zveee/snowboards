//= jquery-3.1.0.min.js
//= jquery-migrate-1.4.1.min.js
//= slick.min.js


$(document).ready(function(){
  $('.cards__inner').slick({
    slidesToShow: 1,
    autoplay: false,
    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a>'+(i+1)+'</a>';
    },
  });
});

