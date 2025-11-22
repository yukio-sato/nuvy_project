document.addEventListener("DOMContentLoaded", () => {
	const email = document.getElementById("txtEmail");
	const senha = document.getElementById("txtSenha");
	document.getElementById("popupEntrar").addEventListener("submit", (h) => {
		h.preventDefault();
		let info = localStorage.getItem("user").split(",");
		if (info && email.value == info[0]) {
			if (senha.value == info[1]){
				alert("Logado com sucesso!");
				localStorage.setItem("logado",true);
				document.location.href = "index.html";
			} else {
				alert("Dados Incorretos");
			}
		} else {
			alert("Dados Incorretos");
		}
	});
});