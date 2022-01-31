//  CUADRADO

function PerimetroCuadrado(lado) {
  return lado * 4;
};

function areacuadrado(lado) {
  return lado * lado;
};

// TRIANGULO

function PerimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
};

function AreaTriangulo(bae, altura) {
  return (base * altura) / 2;
};

// CIRCULO

function DiametroCirculo(radio) {
  return radio * 2;
};

const PI = Math.PI

function PerimetroCirculo(radio) {
  const diametro = DiametroCirculo(radio);
  return diametro * PI
};

function areaCirculo(radio) {
  return (radio * radio) * PI;
};

// Aqui interactuamos con el HTML

function CalcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  
  const perimetro = PerimetroCuadrado(value)
  alert(perimetro);
};

function CalcularArea() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  
  const Area = areacuadrado(value)
  alert(Area);

};

// Triangulo isoscéles

function AlturaTrianguloisosceles(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
      alert(isoscéles)
      const altura =
      math.RaizCuadrada (lado1**2 - lado2**2)
      console.log(altura)
      const input = documente.getElementByid("InputCuadrado")
      const value = input.value
  } else {
      alert("Ingresa datos de un triángulo isoscéles")
  }
};