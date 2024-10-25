$(document).ready(function () {
    $('.accordion-header').on('click', function () {
        var target = $(this).data('target');

        // Fecha qualquer outro conteúdo aberto
        $('.accordion-content').not($(target)).slideUp();
        $('.accordion-header').not($(this)).removeClass('active');

        // Alterna a abertura do conteúdo associado ao header clicado
        $(target).slideToggle();
        $(this).toggleClass('active');
    });
});
