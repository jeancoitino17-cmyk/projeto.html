// 1. Mapear os elementos do HTML do Nubank
const btnConfirmar = document.getElementById('btn-confirmar');
const inputCpf = document.getElementById('input-cpf');
const nomeCartao = document.getElementById('nome-cartao');
const btnVotar = document.getElementById('btn-votar');

// 2. Lógica para o botão "Confirmar" do CPF
btnConfirmar.addEventListener('click', () => {
    const cpfValor = inputCpf.value.trim();

    // Validação simples: verifica se o campo está vazio ou tem poucos caracteres
    if (cpfValor === '' || cpfValor.length < 11) {
        alert('Por favor, digite um CPF válido para confirmar o seu voto!');
    } else {
        alert('Voto processado com sucesso! O seu nome foi enviado para a Arena.');
        
        // Altera o nome no cartão dinamicamente para "Rodolfo Mori" como na aula
        nomeCartao.textContent = "Rodolfo Mori"; 
    }
});

// 3. Lógica para o botão "Votar Agora" (leva o utilizador até ao campo de texto)
btnVotar.addEventListener('click', () => {
    inputCpf.focus();
    inputCpf.style.borderColor = "var(--purple)"; // Dá um destaque roxo ao campo
});