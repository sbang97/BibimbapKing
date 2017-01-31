
$(document).ready(function() {
      $('.slider').slider({full_width: true, Indicators: false});
});

var options = [
    {selector: '#faq-container', offset: 100, callback: function(el) {
        Materialize.showStaggeredList($(el));
    }}
];
Materialize.scrollFire(options);