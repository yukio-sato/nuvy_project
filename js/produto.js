document.addEventListener("DOMContentLoaded", () => {
	let tbProdutos = [
		["Teclado Mecânico RGB Estético e Gamer","VENDIDO"],
		["Microfone Rose Streaming","COMPRAR"],
		["Mouse Gamer Razer White","Apenas 5 no estoque!"],
	];
	class produto {
		constructor(tbItem){
			this.item = tbItem[0];
			this.state = tbItem[1];
		}
		showItem(){
			document.getElementById("infoItem").textContent = this.item;
			document.getElementById("infoItem2").textContent = this.state;
		}
	}
	if (localStorage.getItem("produtoAtual") >= 0) {
		let selectedItem = new produto(tbProdutos[localStorage.getItem("produtoAtual")]);
		selectedItem.showItem();
	}
});