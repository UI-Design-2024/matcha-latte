$(document).ready(function() {
    $('#choices li').click(function() {
        var selected_index = parseInt($(this).attr('data-index'));
        var correct_index = {{ quiz['correct_answer'] }};
        if (selected_index === correct_index) {
            $(this).addClass('correct');
        } else {
            $(this).addClass('incorrect');
            $('#choices li[data-index="' + correct_index + '"]').addClass('correct');
        }
        $('#choices li').off('click');
    });
});