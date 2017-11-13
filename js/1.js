$(document).ready(function () {

	// Task 1

	$('#btn1').on('click', function(){
		$.post(
			"php/a1.php",
			{
				num1: 7,
				num2: 9
			},
			function (data) {
			$('#numbers').html('И ты сам не додумался, что ' + data);
			}
		);
	});


	// Task 2

	$('#btn2').on('click', function(){
		$.post(
			"php/a2.php",
			{
				year: 1987,
			},
			ifSuccess2
		);
		function ifSuccess2 (data) {
			$('#years').html('Хотя не все потеряно! ' + data);
		}
	});


	// Task 3

	$('#btn3').on('click', function(){
		$.post(
			"php/a3.php",
			{
				sex: $('input[name=sex1]:checked').val(),
				height: $('input[name=height1]').val()
			},
			ifSuccess3
		);
		function ifSuccess3 (data) {
			$('#weight').html('Слышь дистрофан! ' + data);
		}
	});


	// Task 4

	$('input[name=height2]').on('change', function(){
		$('#height').html($(this).val());
	});

	$('#btn4').on('click', function(){
		$.post(
			"php/a3.php",
			{
				sex: $('input[name=sex2]:checked').val(),
				height: $('input[name=height2]').val()
			},
			ifSuccess4
		);
		function ifSuccess4 (data) {
			$('#weight2').html('Ты все равно дистрофан! ' + data);
		}
	});


	// Task 5

	$('#btn5').on('click', function(){
		$.post(
			"php/mail.php",
			{
				fio: $('input[name=fio]').val(),
				email: $('input[name=email]').val(),
				phone: $('input[name=phone]').val(),
			},
			ifSuccess5
		);
		function ifSuccess5 (data) {
			$('#letter').html('Не боись! ' + data);
		}
	});


	// Task 6

	$('img[alt="Бананка"]').on('click', function(){
		$.get(
			"php/goods.php",
			{
				art : 1
			},
			goodsOut
		);

		function goodsOut (data) {		
			var parser = $.parseJSON(data);
			var	out = parser.name + ' - имя товара' + '<br>' + parser.weight + ' - вес товара' + '<br>' + parser.cost + ' - стоимость товара' + '<br>' + parser.img + ' - ссылка на картинку.';
			$('#food').html(out);

		}		
	});

	$('img[alt="Помидорка"]').on('click', function(){
		$.get(
			"php/goods.php",
			{
				art : 2
			},
			goodsOut
		);

		function goodsOut (data) {		
			var parser = $.parseJSON(data);
			var	out = parser.name + ' - имя товара' + '<br>' + parser.weight + ' - вес товара' + '<br>' + parser.cost + ' - стоимость товара' + '<br>' + parser.img + ' - ссылка на картинку.';
			$('#food').html(out);

		}		
	});



	//----------------

});