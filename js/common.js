$(document ).ready(function() {
	$('#small-modal-button').click(function() {
		$('.overlay').css('display', 'block');
		$('.small-modal').css('display', 'block');
	});

	$('#medium-modal-button').click(function() {
		$('.overlay').css('display', 'block');
		$('.medium-modal').css('display', 'block');
	});

	$('#large-modal-button').click(function() {
		$('.overlay').css('display', 'block');
		$('.large-modal').css('display', 'block');
	});

	$('.close-modal').click(function() {
		$('.small-modal').css('display', 'none');
		$('.medium-modal').css('display', 'none');
		$('.large-modal').css('display', 'none');
		$('.overlay').css('display', 'none');
	});
});