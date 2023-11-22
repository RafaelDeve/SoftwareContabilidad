var client_name = document.getElementById("name").value
console.log(client_name)
function getClientInfo () {

}
var btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    console.log("El boton ha sido clickeado", client_name)
})

function agregarInformacion() {
 
    var id = document.getElementById("id").value;
    var nombreCliente = document.getElementById("name").value;
    var contactoCliente = document.getElementById("contacto").value;
    var ClienteRNC = document.getElementById("RNC").value;

    // Crear una nueva fila en la tabla
    var table = document.getElementById('tablaInformacion');
    var newRow = table.insertRow(table.rows.length);

   
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = id;
    cell2.innerHTML = nombreCliente;
    cell3.innerHTML = contactoCliente;
    cell4.innerHTML = ClienteRNC;
    cell5.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';



    // Limpiar el formulario
    document.getElementById('miFormulario').reset();
}

function eliminarFila(button) {
  // Obtener la fila actual que contiene el botón
  var row = button.parentNode.parentNode;

  // Eliminar la fila
  row.parentNode.removeChild(row);
}