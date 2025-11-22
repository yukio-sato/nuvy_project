document.addEventListener("DOMContentLoaded", () => {
	let tbProdutos = [
		{
			nm: "Teclado Mecânico RGB Estético e Gamer",
			qt: 0,
			img: "https://i.pinimg.com/736x/f8/72/83/f872836d981b8ea8900f1e6f1bfdb937.jpg",
			vl: 199.90,
			desc: "Teclado RGB e gamer.",
		},
		{
			nm: "Microfone Rose Streaming",
			qt: 5,
			img: "https://i.pinimg.com/736x/2c/6a/6a/2c6a6adcefced7d386f89f39d84fe17f.jpg",
			vl: 159.90,
			desc: "Microfone bastante utilizado, cor rosa e funciona.",
		},
		{
			nm: "Mouse Gamer Razer White",
			qt: 2,
			img: "https://i.pinimg.com/1200x/dd/dc/bf/dddcbfe68957cec1bb8548cc706e1362.jpg",
			vl: 189.90,
			desc: "O MELHOR MOUSE QUE VOCÊ PODERÁS COMPRAR, ESTÁ NA PROMOÇÃO E USE O CUPOM #####!",
		},
	];
	class produto {
		constructor(tbItem){
			this.item = tbItem.nm;
			this.state = tbItem.qt;
			this.src = tbItem.img;
			this.cost = tbItem.vl;
			this.info = tbItem.desc;
		}
		showItem(){
			document.getElementById("infoName").textContent = this.item; // nome do item
			document.getElementById("infoImg").setAttribute("src",this.src); // imagem to item

			let sold = this.state > 0; // condição para mostrar se foi vendido ou não
			document.getElementById("infoState").textContent = sold ? "Comprar" : "Esgotado"; // exibe o texto baseado no seu estado de venda
			if (!sold){ document.getElementById("infoState").classList.replace("btnBuy","btnSold"); } // Desabilita o botão se já foi vendido

			let vlTxt = this.cost.toString().replaceAll('.',','); // string do preço que substitui os pontos para virgula
			let cond = Math.ceil(this.cost) != Math.floor(this.cost); // verificação se tem casas decimais
			document.getElementById("infoCost").textContent = "Valor NuVy: R$"+(cond ? vlTxt.padEnd(Math.ceil(this.cost).toString().length+3,'0') : vlTxt); // texto exibido em preços com formatação de dinheiro

			document.getElementById("infoDesc").textContent = this.info
		}
	}
	if (localStorage.getItem("produtoAtual") >= 0) {
		let selectedItem = new produto(tbProdutos[localStorage.getItem("produtoAtual")]);
		selectedItem.showItem();
	}
});