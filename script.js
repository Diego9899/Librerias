

let formUsuario = document.querySelector("#formUsuario")
let botonUsuario = document.querySelector("#botonUsuario")
botonUsuario.addEventListener("click", () => {
    Swal.fire(
        '¡Bienvenido!',
        `${Usuario.nombre} presiona "jugar"`,
        'success'
      )
})

const Usuario = {
    nombre: formUsuario.children[0].value
}