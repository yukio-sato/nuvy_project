document.addEventListener("DOMContentLoaded", () => {
	const email = document.getElementById("txtEmail");
	const password = document.getElementById("txtSenha");
	const nm = document.getElementById("txtNome");
	document.getElementById("popupCadastrar").addEventListener("submit", (h) => {
		h.preventDefault();
		let tb = [email.value, password.value, nm.value];
		localStorage.setItem("user", tb);
		alert("Cadastrado com sucesso!");
		document.location.href = "entrar.html";
	});
});