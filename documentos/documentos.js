let btnAgregar = document.getElementById('btnAgregar');
let btnDocumentoActual = document.getElementById('btnDocumentoActual');
let btnDocumentoAntiguo = document.getElementById('btnDocumentoAntiguo');
let documentos = [];

function agregarDocumento() {
    let identificador = document.getElementById('identificador').value;
    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;
    let contenido = document.getElementById('contenido').value;
    let fecha = document.getElementById('fecha').value;


    let nuevoDocumento = {
        "identificador": Number(identificador),
        "titulo": titulo,
        "autor": autor,
        "contenido": contenido,
        "fecha":Number(fecha),
    }

    documentos.push(nuevoDocumento);

    mostrarDocumentos();
}

function mostrarDocumentos() {
    let contenedor = document.getElementById('tblDocumentos');
    let tabla = '';

    for (let documento of documentos) {
        tabla +=
      `<tr>
            <td>${documento.identificador}</td>
            <td>${documento.titulo}</td>
            <td>${documento.autor}</td>
            <td>${documento.contenido}</td>
            <td>${documento.fecha}</td>
        </tr>
        `
    }

    contenedor.innerHTML = tabla;


}

function  listarDocumentoActual() {

    let max = documentos[0].fecha;
    for (let documento of documentos){
        if(max < documento.fecha){
            max = documento.fecha;
            autor=documento.autor;
            titulo=documento.titulo;
            contenido=documento.contenido;
        }
    } 
    
    let contenedor_resultado = document.getElementById('resultado1');
    contenedor_resultado.innerHTML = 
    `<p> Documento mas actual: año ${max},</p>
     <p>Datos del Documento: titulo ${titulo}, autor ${autor}, contenido ${contenido}</p> `;

}

function  listarDocumentoMasAntiguo() {
    

    let min = documentos[0].fecha;
    for (let documento of documentos){
        if(min > documento.fecha){
            min = documento.fecha;
            autor=documento.autor;
            titulo=documento.titulo;
            contenido=documento.contenido;
        }
    } 
    
    let contenedor_resultado = document.getElementById('resultado2');
    contenedor_resultado.innerHTML = 
    `<p> Documento mas antiguo: año ${min},</p>
     <p>Datos del Documento: titulo ${titulo}, autor ${autor}, contenido ${contenido}</p> `;

}




btnAgregar.addEventListener('click', agregarDocumento);
btnDocumentoActual.addEventListener('click', listarDocumentoActual);
btnDocumentoAntiguo.addEventListener('click', listarDocumentoMasAntiguo);