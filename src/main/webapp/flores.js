onload = () => {
    document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btnLogin").addEventListener("click", function () {
        let login = document.getElementById("nameFriend").value.trim().toLowerCase(); // Elimina espacios y convierte a minúsculas
        let audioElement = document.getElementById("audioElement");
        let audioElementa = document.getElementById("audioElementa");

        if (login === "aylin") { // Compara con el nombre en minúsculas
            setTimeout(function () {
                window.location.href = "floresAylin.html"; // Redirige a la página de Aylin
            }, 2000); // Esperar 2 segundos antes de redirigir
        } else if (login === "madai") {
            setTimeout(function () {
                window.location.href = "floresMadai.html"; // Redirige a la página de Madai
            }, 2000); // Esperar 2 segundos antes de redirigir
        } else if (login === "cristina") {
            setTimeout(function () {
                window.location.href = "floresCristina.html"; // Redirige a la página de Cristina
            }, 2000); // Redirige a la página de Cristina
        } else if (login === "silvana") {
            setTimeout(function () {
                window.location.href = "floresSilvana.html"; // Redirige a la página de Silvana
            }, 2000); // Redirige a la página de Silvana
        } else {
            alert("Hazta pa poner tu nombre eres sonsa");
        }
    });
});
