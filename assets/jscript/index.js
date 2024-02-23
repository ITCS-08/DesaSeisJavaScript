
const nuevoValorInput = document.querySelector("input");
const tbody = document.querySelector("tbody");
const btn = document.querySelector("button");
const apiUrl = `https://mindicador.cl/api/`;
const arrayValor = []

// Evento donde botón valida valor ingresado 
btn.addEventListener("click", () => {

  const { value: nuevoValor } = nuevoValorInput;

  if (nuevoValor) {

    convertirValor(nuevoValor)
    refresh()
  } else {

    alert("Debe escribir un valor para evaluar");

  }
});

const convertirValor = (nuevoValor) => {
  var comboTipoMoneda = parseFloat(document.getElementById("comboTipoMoneda").value);
  console.log("Nuevo valor : ", nuevoValor);
  console.log("Combo Tipo de Moneda : ", comboTipoMoneda);

  if (comboTipoMoneda == -1) {
    comboTipoMoneda = 0;
  } else if (comboTipoMoneda == 0) {
    comboTipoMoneda = 36794.5;
  } else if (comboTipoMoneda == 1) {
    comboTipoMoneda = 38262.89;
  } else if (comboTipoMoneda == 2) {
    comboTipoMoneda = 967.52;
  } else if (comboTipoMoneda == 3) {
    comboTipoMoneda = 758.87;
  } else if (comboTipoMoneda == 4) {
    comboTipoMoneda = 1045.97;
  } else if (comboTipoMoneda == 5) {
    comboTipoMoneda = 0.7;
  } else if (comboTipoMoneda == 6) {
    comboTipoMoneda = 64343;
  } else if (comboTipoMoneda == 7) {
    comboTipoMoneda = -1;
  } else if (comboTipoMoneda == 8) {
    comboTipoMoneda = 7.25;
  } else if (comboTipoMoneda == 9) {
    comboTipoMoneda = 3.82;
  } else if (comboTipoMoneda == 10) {
    comboTipoMoneda = 8.48;
  } else if (comboTipoMoneda == 11) {
    comboTipoMoneda = 51862.86;
  }

  var resultado = nuevoValor * comboTipoMoneda;
  console.log("Resultado", resultado);

  // Mostrando el resultado
  document.getElementById("resultado").innerText = "Resultado: " + resultado;


};

async function getValuesMonedas() {

  try {

    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log("Los datos del JSON son:", data);
   
    // Saca valores de Json y los pasa a un arreglo
    for (const key in data) {
      if (data.hasOwnProperty(key) && key !== 'version' && key !== 'autor' && key !== 'fecha') {
        arrayValor.push(data[key]);
      }
    }

    console.log("Los valores en arreglo son: ", arrayValor);

    for (var i = 0; i < arrayValor.length; i++) {

      console.log("Código:", arrayValor[i].codigo);
      console.log("Nombre:", arrayValor[i].nombre);
      console.log("Unidad de medida:", arrayValor[i].unidad_medida);
      console.log("Fecha:", arrayValor[i].fecha);
      console.log("Valor:", arrayValor[i].valor);
      console.log("--------------------------------");

    }

  } catch (error) {
    alert(error.message + "Error en la conversion de moneda")
  }

}
getValuesMonedas();



