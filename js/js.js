function abrirVentana(){
    var ventana = document.getElementById('ventana');
    ventana.classList.add("ventanaActivar");
    

}
function CerrarVentana(){
    var ventana = document.getElementById('ventana');
    ventana.classList.remove("ventanaActivar");
}

function ExpandirVentana(){
    var ventana = document.getElementById('ventana');
    ventana.classList.add("Expandir");
}

function minimizarVentana(){
    var ventana = document.getElementById('ventana');
    ventana.classList.remove("Expandir");

}



