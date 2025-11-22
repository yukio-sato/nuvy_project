document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.length > 0 && localStorage.getItem("logado")){
        document.getElementById("logoutBtn").removeAttribute("hidden");
	} else {
        document.getElementById("cadastrarBtn").removeAttribute("hidden");
        document.getElementById("entrarBtn").removeAttribute("hidden");
    }
});