function cambiarImagenIMC(nuevaImagen) {
    let imcImageElement = document.getElementById('imc-image');
    
    imcImageElement.src = `img/${nuevaImagen}.png`;
    
    imcImageElement.style.display = 'block';
}


function calcularIMC(event) {
    event.preventDefault();
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = peso / (altura * altura);

    let resultado = '';
    let imagen = '';
    let mensaje = ' ';

    if (imc < 18.5) {
        resultado = `Peso bajo: ${imc.toFixed(2)}`;
        imagen = 'Imcbajopeso'; 
       mensaje = 'Estas debajo del peso normal. Es considerables que consultes con un profesional de la salud'
    } else if (imc >= 18.5 && imc < 25) {
        resultado = `Peso normal: ${imc.toFixed(2)}`;
        imagen = 'Imcpesonormal';
        mensaje = '¡Estas en el rango en el rango de peso normal! Sigue manteniendo un estilo de vida saludable';
    } else if (imc >= 25 && imc < 30) {
        resultado = `Tienes sobrepeso: ${imc.toFixed(2)}`;
        imagen = 'Imcsobrepeso';
        mensaje = 'Tienes sobrepeso. Considera en tu dieta y nivel de actividad fisica.'
    } else {
        resultado = `Tienes obesidad: ${imc.toFixed(2)}`;
        imagen = 'Imcobeso';
        mensaje = 'Tienes obesidad. Es recomendable que busques asesoramiento para mejorar tu salud.'
    }
    document.getElementById('resultado').textContent = resultado;
    cambiarImagenIMC(imagen);
    document.getElementById('mensaje').textContent = mensaje;
}
