/**
 * Created by temarazin on 18.06.2015.
 */

$(document).ready(function() {

    var quality = $('.dp-quality');	// ����������
    var cost = $('.dp-cost');		// ����
	var res = $('.dp-result');		// �����
	var total = $('.dp-total');		// �����


    var k;

	function changePrice(coun) {
		var slct = $(coun).parent('.dp-quality');
		var t;
		k = $(coun).val();
		slct.siblings('.dp-result').text(parseFloat(slct.siblings('.dp-cost').text().replace(/[^0-9]*/,"")) * k);
		var s = 0;
		res.each(function() {
			t = $(this).text();
			t = t.replace(/\D\./g,'');
			s += Number(t);
		});
		(s > 0) ? (total.text('Total: ' + s + '$')) : (total.text(''));
	}

	    quality.click(function () {
	        if ($('input').is('.inp_kol') == false) {
	            k = $(this).text();
	            $(this).html('<input class="inp_kol" type="number" min=0 value="' + k + '">');

	            $('.inp_kol').focus();

				$('.inp_kol').bind("change", function () {
					changePrice(this);

				});

				$('.inp_kol').bind("focusout", function () {
					changePrice(this);
					$(this).parent().text(k);
				});
	        }
	    });

});