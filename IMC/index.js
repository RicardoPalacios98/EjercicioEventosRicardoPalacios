function calculateIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
return peso / (altura * altura)
    const imc = peso / (altura * altura);

    document.getElementById('resultado').innerHTML = `
        <p>Tu IMC es: ${imc.toFixed(2)}</p>
    `;
}
