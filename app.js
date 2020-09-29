//instancio clases y defino variables
const github = new Github();
const ui = new UI();
const barraBusqueda = document.querySelector("#barraBusqueda");

//agrego un event listener para que cada vez que se toque una tecla se realice una busqueda en la api de github.
//es importante que el evento sea "keyup" y no "keydown"
barraBusqueda.addEventListener("keyup", (e) => {
  //capturo el valor ingresado en una variable
  const valorIngresado = e.target.value;
  //el condicional esta para evitar que se realize una busqueda cuando se presionen teclas con el campo vacio, como barra espaciadora.
  if (valorIngresado !== "") {
    //utilizo el metodo de la clase github para buscar lo que el usuario ingrese
    github.traerUsuario(valorIngresado).then((data) => {
      if (data.perfil.message === "Not Found") {
        //en caso de que el texto ingresado no corresponda a un perfil, muestro una alerta
        //paso por parametro el mensaje y las clases de bootstrap de la alerta
        ui.mostrarAlerta("Usuario no encontrado", "alert alert-danger");
      } else {
        //si el perfil esxsite, lo muestro junto con sus repositorios, pasando por parametro los respectivos arrays.
        ui.mostrarPerfil(data.perfil);
        ui.mostrarRepos(data.repos);
      }
    });
  } else {
    //si el campo de texto esta vacio, se limpia el perfil que se esta observando
    ui.limpiarPerfil();
  }
});
