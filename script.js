

const listadoPerfiles = document.querySelector("#listadoPerfiles")
const usuarioPerfil = document.querySelector("#usuarioImagen")
const formUsuario = document.querySelector("#formUsuario")
const botonUsuario = document.querySelector("#botonUsuario")
const nombreUsuario = document.querySelector("#areaUsuario")

formUsuario.addEventListener("submit", (e) =>{
    e.preventDefault();
    datos = formUsuario.children[0].value
    localStorage.setItem("nombre", datos)
})
const pintarPerfiles = (perfiles) => {
    listadoPerfiles.innerHTML= "";
    for(const perfil of perfiles){
        let listadoPefiles = document.createElement("button")
        listadoPefiles.className = "boton";
        listadoPefiles.id = perfil.id;
        listadoPefiles.innerHTML = `<span>${perfil.imagen}</span>`
        listadoPefiles.onclick = () => {
            usuarioPerfil.innerHTML = `<span>${perfil.imagen}</span>`
            localStorage.clear()
            localStorage.setItem("perfil", perfil.imagen)
        }
    listadoPerfiles.appendChild(listadoPefiles)
    }
}

const insertarPerfiles = () =>{
    listadoPerfiles.innerHTML= "<p>Cargando...</p>";
    return fetch ("perfiles.json")
}
insertarPerfiles()
.then(perfiles => perfiles.json())
.then((perfiles) =>{
    pintarPerfiles(perfiles)
}) .catch((error)=>{
    listadoPerfiles.innerHTML = "";
    listadoPerfiles.innerHTML = "Ha ocurrido un error";
})

