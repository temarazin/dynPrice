/**
 * Created by temarazin on 18.06.2015.
 */

/*

 css class .dp-quality
 css class .dp-cost
 css class .dp-result
 css class .dp-total

*/
$(document).ready(function() {

    $('.dp-quality').click(function () {
        if ($('input').is('.inp_kol') == false) {
            k = $(this).text();
            $(this).html('<input class="inp_kol" type="number" min=0 value="' + k + '">');
            $('.inp_kol').focus();
        }
    });

    $('.dp-quality').focusout(function () {
        k = $('.inp_kol').val();
        $(this).text(k);
        //$(this).siblings('.p_sum').text(parseFloat($(this).siblings('.p_cost').text()) * k);
        $(this).siblings('.dp-result').text(parseFloat($(this).siblings('.dp-cost').text().replace(/[^0-9]*/,"")) * k);
        s = 0;
        $('.dp-result').each(function() {
            t = $(this).text();
            t = t.replace(/\D\./g,'');
            s += Number(t);
        });

        (s > 0) ? ($('.dp-total').text('Total: ' + s + '$')) : ($('.dp-total').text(''));
    });

});