document.addEventListener('DOMContentLoaded', function () {
            document.getElementById("btnLogin").addEventListener("click", function () {
                let login = document.getElementById("nameFriend").value;
                let audioElement = document.getElementById("audioElement");
                let audioElementa = document.getElementById("audioElementa");

                if (login === "Aylin") { // Reproduce el audio Floricienta
                    setTimeout(function () {
                        window.location.href = "floresA.html"; // Redirige a la página de Aylin
                    }, 2000); // Esperar 2 segundos antes de redirigir
                } else if (login === "Madai") {
                    //audioElementa.play(); // Reproduce el audio "Mi Corazón"
                    setTimeout(function () {
                        window.location.href = "prueba.html"; // Redirige a la página de Madai
                    }, 2000); // Esperar 2 segundos antes de redirigir
                } else if (login === "Cristina") {
                    window.location.href = "floresC.html"; // Redirige a la página de Cristina
                } else if (login === "Silvana") {
                    window.location.href = "floresS.html"; // Redirige a la página de Silvana
                } else {
                    alert("Hazta pa poner tu nombre eres sonsa");
                }
            });
        });