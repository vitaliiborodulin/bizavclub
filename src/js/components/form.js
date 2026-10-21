$(".cal").flatpickr({
    mode: "range",
    minDate: "today",
    dateFormat: "d.m",
    // disableMobile: "true"
});

// form passengers

$(document).on('click', '.plus', function () {
    const $input = $(this).siblings('input');
    $input.val(parseInt($input.val(), 10) + 1);
});

$(document).on('click', '.minus', function () {
    const $input = $(this).siblings('input');

    let value = parseInt($input.val(), 10);

    if (value > parseInt($input.attr('min'), 10)) {
        $input.val(value - 1);
    }
});