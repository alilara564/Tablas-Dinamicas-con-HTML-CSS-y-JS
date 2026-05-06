function generarDesdeInput() {
    const input = document.querySelector(".inputNumero");
    const mensaje = document.getElementById("msmError");
    const valor = input.value.trim();

    // Validación
    if (valor === "" || isNaN(valor) || valor <= 0) {
        mensaje.classList.add("activo");
        input.classList.add("error");
        return;
    }

    // Quitar error si todo está bien
    mensaje.classList.remove("activo");
    input.classList.remove("error");

    generarTabla(parseInt(valor));
}




function generarTabla(){
    let tabla = document.getElementById("cmpTabla");
    let numero = parseInt(document.getElementById("inputNumero").value);
    tabla.innerHTML = "";
    for(let i = 1; i <= 12; i++){
        let fila = document.createElement("div");
        fila.className = "fila";
        fila.textContent = `${numero} X ${i} = ${numero * i}`;
        tabla.appendChild(fila);
    }
    
}

