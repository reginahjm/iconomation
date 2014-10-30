// add icons
$('.playspace').append('<i class="em em-articulated_lorry"></i>');
$('.playspace').append('<i class="em em-blue_car"></i>');
$('.playspace').append('<i class="em em-tractor"></i>');


// set the initial positions

$('.em-articulated_lorry').css({
  top: 200,
  left: 400
});

$('.em-blue_car').css({
  top: 200,
  left: 300
});

$('.em-tractor').css({
  top: 200,
  left: 100
});

// play!
$('.em-articulated_lorry').animate({
  left: 300
}, 1000);

// $('.em-blue_car').animate({
//   left: 50
// }, 1000);

// after 660ms...
setTimeout(function() {
	$('.em-blue_car').animate({
  	left: 50
  }, 800, 'easeOutQuart');
},660);

setTimeout(function(){
  // ...move the ball
  $('.em-tractor').animate({
    left:0
  }, 2000, 'easeOutQuart');

}, 660);


