// Eliminar la clase 'container' del cuerpo
window.onload = () => {
    document.body.classList.remove("container");
};

// Ejecutar al hacer clic en el botón
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btnLogin").addEventListener("click", function () {
        let login = document.getElementById("nameFriend").value;

        // Redirigir dependiendo del nombre ingresado
        if (login == "Aylin") {
            window.location.href = "floresA.html";
        } else if (login == "Madai") {
            window.location.href = "floresM.html";
        } else if (login == "Cristina") {
            window.location.href = "floresC.html";
        } else if (login == "Silvana") {
            window.location.href = "floresS.html";
        } else {
            // Si el nombre no es ninguno de los anteriores
            alert("Hazta pa poner tu nombre eres sonsa primer letra mayuscula burra");
            //window.location.hre = "error.html"; // Puedes redirigir a una página de error o a otra diferente
        }
    });
});
