document.getElementById("parceiroForm").addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data)

    const response = await fetch('parceiros.json');
    const listaParceiros = await response.json();

    console.log("Fetched listaParceiros:", listaParceiros);

    listaParceiros.push(data)

    console.log("Fetched listaParceiros atualizada:", listaParceiros);
});