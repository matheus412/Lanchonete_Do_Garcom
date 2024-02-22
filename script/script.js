  // Evento de clique para o ícone do menu (burguer)
  document.getElementById('burguer').addEventListener('click', function() {
      var menu = document.getElementById('itens');
      if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          document.body.classList.remove('menu-active'); 
          burguer.textContent = 'menu';
      } else {
          menu.classList.add('active');
          document.body.classList.add('menu-active');
          burguer.textContent = 'close';
      }
  });

  // Evento de clique para cada item do menu
  var menuItems = document.querySelectorAll('#itens ul li a');
  menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
          var menu = document.getElementById('itens');
          menu.classList.remove('active');
          document.body.classList.remove('menu-active');
          burguer.textContent = 'menu'; 
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

  // validação formulário

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (fullname.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
    } else if (!isValidEmail(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        event.preventDefault();
    }
});

function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}