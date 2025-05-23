//Faço com que os botões Sobre, Projeto e Contato no menu 
// role até a seção destinada usando o Scroll e smooth para suavizar a rolagem.
var menuSobre = document.getElementById('sobreBut');
var sectionSobre = document.getElementById('sobre');

menuSobre.addEventListener('click', function() {
    sectionSobre.scrollIntoView({ behavior: 'smooth' });
});

var menuProjetos = document.getElementById('projetosBut');
var sectionProjetos = document.getElementById('projetos');

menuProjetos.addEventListener('click', function() {
    sectionProjetos.scrollIntoView({ behavior: 'smooth' });
});

var menuContato = document.getElementById('contatoBut');
var sectionContato = document.getElementById('contato');

menuContato.addEventListener('click', function() {
    sectionContato.scrollIntoView({ behavior: 'smooth' });
});

//mensagem de alerta quando envia o formulario
var contatoForm = document.getElementById('contatoForm');

contatoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Obrigada! Sua mensagem foi enviada!');
  contatoForm.reset();
});