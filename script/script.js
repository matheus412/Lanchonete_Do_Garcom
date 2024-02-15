document.addEventListener("DOMContentLoaded", function() {
    var imagens = document.querySelectorAll('#fotos-prato img');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    });

    imagens.forEach(function(imagem) {
        observer.observe(imagem);
    });
});
