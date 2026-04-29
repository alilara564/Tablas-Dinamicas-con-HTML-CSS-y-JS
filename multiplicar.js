
function generarTabla(numero){
    let tabla = document.getElementById("cmpTabla");
    tabla.innerHTML = "";
    for(let i = 1; i <= 12; i++){
        let fila = document.createElement("div");
        fila.className = "fila";
        fila.textContent = `${numero} X ${i} = ${numero * i}`;
        tabla.appendChild(fila);
    }
    
}

