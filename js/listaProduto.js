document.addEventListener("DOMContentLoaded", () => {
	const btnBuy = document.querySelectorAll(".btnBuy");
	btnBuy.forEach(btnNow => {
		btnNow.addEventListener("click", () => {
			localStorage.setItem("produtoAtual", btnNow.id)
			window.location.href = "produto.html";
		});
	});

	// FILTRAR PRODUTOS
    const busca = document.getElementById("busca");
    const cards = document.querySelectorAll(".card");

    busca.addEventListener("input", () => {
    	busca.addEventListener("submit", (h) => {
		    h.preventDefault();
      		const termo = document.getElementById("searchInput").value.toLowerCase();
      		cards.forEach(card => {
        		const titulo = card.querySelector("h3").textContent.toLowerCase();
        		// Se tiver os caracteres inseridos, defina o seu estilo para "Block", caso contrário para "Nada"
        		card.style.display = titulo.includes(termo) ? "block" : "none";
      		});
    	});
	});
});