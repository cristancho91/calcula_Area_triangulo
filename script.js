
let valorBase,valorAltura,resultado;

valorBase = document.getElementById("base");
valorAltura = document.getElementById("altura");
resultado = document.getElementById("resultado");

const calcularArea= () =>{
    let area =(valorBase.value * valorAltura.value)/2;
    let texto = `el area del triangulo es igual a: ${area}`;
    resultado.style.display = "block";
    resultado.innerHTML= texto; 
}