//Contato
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    // Validação
    if(nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    // Conclui a validação do formulário
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    this.reset();
});

// Efeito para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});