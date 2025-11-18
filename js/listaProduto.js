document.addEventListener("DOMContentLoaded", () => {
	const btnBuy = document.querySelectorAll(".btnBuy");
	btnBuy.forEach(btnNow => {
		btnNow.addEventListener("click", () => {
			localStorage.setItem("produtoAtual", btnNow.id)
			window.location.href = "produto.html";
		});
	});
});