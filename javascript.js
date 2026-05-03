function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Lógica para verificar se é par ou ímpar
    if (result % 2 === 0) {
        alert(`O número ${result} é PAR`);
    } else {
        alert(`O número ${result} é ÍMPAR`);
    }
}