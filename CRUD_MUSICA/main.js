const grupos = ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones", "Queen", "Nirvana", "The Doors", "AC/DC", "Metallica", "U2", "The Who", "Black Sabbath", "Guns N' Roses", "The Jimi Hendrix Experience", "Radiohead", "Eagles", "Deep Purple", "Santana", "The Clash", "Fleetwood Mac"];

function ocultarTodo(){
    document.getElementById("grupos").style = "display:none;";
    document.getElementById("container-grupo").style = "display:none;";
    document.getElementById("container-grupo-2").style = "display:none;";
    document.getElementById("container-grupo-3").style = "display:none;";
}

function añadirGrupo() {
    ocultarTodo();
    document.getElementById("container-grupo").style = "display:block;border: 2px solid white;border-radius: 10px;";
}

function registrarGrupo() {
    if (grupos.length < 20) {
        let nombre = document.getElementById("Grupo").value;
        grupos.push(nombre);
        document.getElementById("alert").innerHTML = '<div class="alert alert-success mt-5" role="alert">Enhorabuena! Has añadido un grupo épico.</div>'
        document.getElementById("Grupo").value = "";

    }
    else {
        document.getElementById("alert").innerHTML = '<div class="alert alert-danger mt-5" role="alert">Lo siento! El máximo de grupos épicos es 20.</div>'
    }
}

function añadirGrupoX() {

    ocultarTodo();
    document.getElementById("container-grupo-2").style = "display:block;border: 2px solid white;border-radius: 10px;";
}
function registrarGrupo2() {
    if (grupos.length < 20) {
        let nombre = document.getElementById("Grupo2").value;
        let position = document.getElementById("Position").value;
        grupos.splice(position-1,0,nombre);
        document.getElementById("alert").innerHTML = '<div class="alert alert-success mt-5" role="alert">Enhorabuena! Has añadido un grupo épico.</div>'
        document.getElementById("Grupo2").value = "";
        document.getElementById("Position").value = "";
    }
    else {
        document.getElementById("alert").innerHTML = '<div class="alert alert-danger mt-5" role="alert">Lo siento! El máximo de grupos épicos es 20.</div>'
    }
}


function eliminarPrimero(){
    grupos.shift();
    document.getElementById("alert").innerHTML = '<div class="alert alert-warning mt-5" role="alert">Has eliminado el primer grupo. Ahora tienes: '+grupos.length+' grupos</div>'
}

function eliminarUltimo(){
    grupos.pop();
    document.getElementById("alert").innerHTML = '<div class="alert alert-warning mt-5" role="alert">Has eliminado el último grupo. Ahora tienes: '+grupos.length+' grupos</div>'
}

function mostrarGrupos(){
    ocultarTodo();
    document.getElementById("grupos").value = "";
    document.getElementById("grupos").innerHTML = "<h1>Listado Grupos Epicos: "+grupos.length+"</h1><br>";
    for (let i=0; i<grupos.length;i++){
    document.getElementById("grupos").innerHTML += "<h5>Grupo "+(i+1)+": "+grupos[i]+"</h5>";
    }
    document.getElementById("grupos").style = "border: 2px solid white;border-radius: 10px;margin:20%;padding:30px;background-color:rgba(0, 0, 0, 0.568);"
  
}

function buscarGrupos(){
    ocultarTodo();
    document.getElementById("container-grupo-3").style = "display:block;border: 2px solid white;border-radius: 10px;";
}

function buscar(){
    let nombre = document.getElementById("Grupo3").value;
    let index = grupos.indexOf(nombre);
    document.getElementById("Position3").value = index+1;
}

function buscarRanking(){
    let index = parseInt(document.getElementById("Position3").value);
    let nombre = grupos[index-1];
    document.getElementById("Grupo3").value = nombre;
}