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

	$('.pills .buttons li').click(function() {
		$('.pills .buttons .active').removeClass("active");
		$(this).addClass("active");
	});

	$('#active').click(function() {
		$('.pills p').html('Навигация в Bootstrap имеет общую для подобного типа элементов разметку, от базового класса .nav до активных и «выключенных» состояний. Заменяйте классы-модификаторы для переключения между стилями.<br><br>Базовый компонент класса .nav создан на флексбоксе, что обеспечивает хорошую базу для создания всех типов навигационных компонентов. В него входят несколько стилей, которые «перебивают» остальные (для работы со списками), добавлены паддинги ссылок для увеличения «зоны клика», и базовые стили «выключенных» состояний.');
	});

	$('#link').click(function() {
		$('.pills p').html('Ссылка на Внешний Ресурсs определяет отношения между текущим документом и внешним ресурсом. Этот элемент чаще всего используется для ссылки на  stylesheets, а также для создания иконок сайта (как для иконок в стиле "favicon", так и для иконок домашних экранов и приложений мобильных устройств) среди прочего.');
	});

	$('#another-link').click(function() {
		$('.pills p').html('Связь ссылки - это описательный атрибут, прикрепленный к гиперссылке для определения типа ссылки или отношения между ресурсами источника и назначения. Атрибут может использоваться автоматизированными системами или может быть представлен пользователю другим способом.');
	});

	$('#disable').click(function() {
		$('.pills p').html('');
	});
});