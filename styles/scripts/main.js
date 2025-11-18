// Exemplo de código JavaScript para adicionar uma funcionalidade simples

document.addEventListener('DOMContentLoaded', () => {
    console.log("O site foi carregado com sucesso!");

    // Você pode usar o JS para manipular elementos, como adicionar classes
    // de animação ou buscar dados de uma API (mais avançado).
    
    // Exemplo: Destacar a seção de biografias após 3 segundos
    setTimeout(() => {
        const bios = document.getElementById('biografias');
        if (bios) {
            // bios.style.border = '2px dashed red'; // Exemplo de estilo
            console.log("Seção Biografias Destacada.");
        }
    }, 3000);

    // O alert no botão do HTML já é uma função simples, 
    // mas aqui você poderia adicionar algo mais complexo.
});