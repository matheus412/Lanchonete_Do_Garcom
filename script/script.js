///menu burguer
document.getElementById('burguer').addEventListener('click', function() {
    var menu = document.getElementById('itens');
    
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  });
///imagens

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
