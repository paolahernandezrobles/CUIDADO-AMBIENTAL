/// Variables
const url = "https://raw.githubusercontent.com/paolahernandezrobles/GREEN-PLANET-API/master/";
let boton_activo = null;

// HTML
const el_lista = document.getElementById("lista");
const el_imagen = document.querySelector("#boton-seleccionado img");
const el_nombre = document.querySelector("#boton-seleccionado h2");
const el_desc = document.querySelector("#boton-seleccionado p");
////
fetch(url + "datos.json").then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  console.log(datos);
  //base de datos
  for(let i = 0; i < datos.length; i+=1) {
    // Crear boton de HTML
    let boton = document.createElement("button");
    boton.innerHTML = datos[i].nombre;
    // Alimentar la lista de los botones
    el_lista.appendChild(boton);
    // Agregar evento de dar clic a cada boton
    boton.addEventListener("click", function() {
      // Cambiar imagen
      el_imagen.src = url + datos[i].imagen;
      // Cambiar nombre
      el_nombre.innerHTML = datos[i].nombre;
      // Cambiar descripción 
      el_desc.innerHTML = datos[i].descripcion;
      // Checar si el botón activo existe y quitarle la clase "seleccionado"
      if(boton_activo != null) {
        boton_activo.classList.remove("seleccionado");
      }
      // Agregar clase de seleccionado
      boton.classList.add("seleccionado");
      // Dejar como botón activo el botón seleccionado
      boton_activo = boton;
    });
    // Darle clic siempre al primer elemento
    if(i == 0) {
      boton.click();
    }
  }
}).catch(function(error) {
  console.log(error);
});