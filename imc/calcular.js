function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura)) {
        const IMC = peso / (altura * altura);
        document.getElementById("res").textContent = IMC.toFixed(2);

        if (IMC < 18.5) {
            document.getElementById("resultado").textContent = "Bajo peso";
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            document.getElementById("resultado").textContent = "Peso Normal";
        } else if (IMC >= 25 && IMC <= 29.9) {
            document.getElementById("resultado").textContent = "Tienes Sobrepeso";
        } else if (IMC >= 30 && IMC <= 34.9) {
            document.getElementById("resultado").textContent = "Tienes Obesidad";
        }       
        } else {
        alert("datos incorrectos");
        }
}
