apiWeb = 'https://api.yumserver.com/17050/products';

function mostrarTabla() {
    document.getElementById("tablaModificar").style.display = "none";
    document.getElementById("tablaDatos").style.display = "block";
}

mostrarSkin();

function buscarSkin(idBuscar) {
    fetch(apiWeb)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let skinEncontrado = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].idcod == idBuscar) {
                    document.getElementById("idModificar").value = data[i].idcod
                    document.getElementById("skinModificar").value = data[i].titulo
                    document.getElementById("pesosArgModificar").value = data[i].precioPeso
                    document.getElementById("usdModificar").value = data[i].precioDolar
                    document.getElementById("fechaModificar").value = data[i].fecha

                    let skinEncontrado = true;
                }
            }
        })
        .catch(error => console.error('Error:', error));

    document.getElementById("tablaModificar").style.display = "block";
    document.getElementById("tablaDatos").style.display = "none";
}

function mostrarSkin() {
    fetch(apiWeb)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let html = "";

            for (let i = 0; i < data.length; i++) {
                html += `
                <tr>
                <td class="titulosMostrar">${data[i].titulo}</td>
                <td class="titulosMostrar">${data[i].precioPeso}</td>
                <td class="titulosMostrar">${data[i].precioDolar}</td>
                <td class="titulosMostrar">${data[i].fecha}</td>
                <td class="titulosMostrar"><button class="accion" id="${data[i].idcod}" onclick="eliminarSkin(id)">Eliminar</td>
                <td class="titulosMostrar"><button class="accion" id="${data[i].idcod}" onclick="buscarSkin(id)">Modificar</td>
                </tr>`;
            }
            document.getElementById('resultado').innerHTML = html;
        })
    .catch(error => console.error('Error:', error));
}

function modificarSkin(idModificar) {

    let producto = {
        idcod: document.getElementById("idModificar").value,
        titulo: document.getElementById("skinModificar").value,
        precioPeso: document.getElementById("pesosArgModificar").value,
        precioDolar: document.getElementById("usdModificar").value,
        fecha: document.getElementById("fechaModificar").value
    }
    fetch(apiWeb, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)

    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
            if (data === 'OK') {
                alert("El skin se modifico correctamente");
            }
            else {
                alert("El skin no se pudo modificar");
            }

        document.getElementById("idModificar").value = '';
        document.getElementById("skinModificar").value = '';
        document.getElementById("pesosArgModificar").value = '';
        document.getElementById("usdModificar").value = '';
        document.getElementById("fechaModificar").value = '';
        
            mostrarSkin()
        })
        .catch(error => console.error('Error:', error));
}

function crearSkin() {
    let producto = {
        titulo: document.getElementById("skin").value,
        precioPeso: document.getElementById("pesosArg").value,
        precioDolar: document.getElementById("usd").value,
        fecha: document.getElementById("fecha").value
    }

    fetch(apiWeb, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
            if (data === 'OK') {
                alert("El skin se guardo correctamente");
            }
            else {
                alert("El skin no se pudo guardar");
            }

            mostrarSkin();

            producto = "";

            document.getElementById("skin").value = "",
                document.getElementById("pesosArg").value = "",
                document.getElementById("usd").value = "",
                document.getElementById("fecha").value = ""
        })
        .catch(error => console.error('Error:', error))
}

function eliminarSkin(idEliminar) {
    if (confirm("¿Estás seguro de que quieres eliminar este skin?")) {
        fetch(apiWeb, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idcod: idEliminar })
        })
            .then(response => response.text())
            .then(data => {
                console.log(data)
                if (data === 'OK') {
                    alert("EL skin se elimino correctamente");
                }
                else {
                    alert("El skin no se elimino guardar");
                }
                mostrarSkin();
            })
            .catch(error => console.error('Error:', error))
    }
}