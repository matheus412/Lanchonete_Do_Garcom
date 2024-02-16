  // Evento de clique para o ícone do menu (burguer)
  document.getElementById('burguer').addEventListener('click', function() {
      var menu = document.getElementById('itens');
      if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          document.body.classList.remove('menu-active'); 
      } else {
          menu.classList.add('active');
          document.body.classList.add('menu-active');
      }
  });

  // Evento de clique para cada item do menu
  var menuItems = document.querySelectorAll('#itens ul li a');
  menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
          var menu = document.getElementById('itens');
          menu.classList.remove('active');
          document.body.classList.remove('menu-active'); 
      });
  });
  
  // Observador de interseção para as imagens
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