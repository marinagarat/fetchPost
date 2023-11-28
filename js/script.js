document.getElementById("btnEnviar").addEventListener("click", () => {
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let fecha = document.getElementById("txtFecha").value;
    
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            fecha: fecha
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    
    borrarCampos();
})

function borrarCampos() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtFecha").value = "";
}