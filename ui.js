class UI {
  mostrarPerfil(usuario) {
    //muestro el perfil del usuario que recibo por parametro usando template liteals para crear elementos html dinamicamente
    document.getElementById("divPerfil").innerHTML = `
    <div class="card card-body mt-2 mb-3">
      <div class="row">
          <div  class="col-md-3">
            <img class="img-fluid mb-2" src = ${usuario.avatar_url}>
            <a href="${usuario.html_url}" target="_blank" class ="btn btn-primary btn-block mb-4">Ver Perfil</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Repos Publicos: ${usuario.public_repos}</span>
          <span class="badge badge-secondary">Gists Publicos: ${usuario.public_gists}</span>
          <span class="badge badge-info">Seguidores: ${usuario.followers}</span>
          <span class="badge badge-dark">Siguiendo: ${usuario.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Usuario: ${usuario.login}</li>
            <li class="list-group-item">Empresa: ${usuario.company}</li>
            <li class="list-group-item">Sitio Web: ${usuario.blog}</li>
            <li class="list-group-item">Ubicacion: ${usuario.location}</li>
            <li class="list-group-item">Miembro Desde: ${usuario.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3>Ultimos Repositorios</h3>
    <div id="divRepos"></div>
  

`;
  }
  //mostrar los repositorios
  mostrarRepos(repos) {
    let filaRepo = "";
    //por cada repositorio individual creo una fila con la informacion que quiero mostrar usando template literals
    repos.forEach(function (repo) {
      filaRepo += `
        <div class="card card-body mb-1">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-info badge-position">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary badge-position">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div> `;
    });

    document.getElementById("divRepos").innerHTML = filaRepo;
  }
  //muestro mensaje de alerta
  mostrarAlerta(msj, clase) {
    //quito alertas anteriores
    this.removerAlerta();
    //creo un elemento div y le asigno las clases pasadas por parametro.
    const divAlerta = document.createElement("div");
    divAlerta.className = clase;
    //creo un textNode con el mensaje recibido por parametro y se lo agrego al elemento div creado anteriormente
    divAlerta.appendChild(document.createTextNode(msj));
    //agrego el div de alerta, colocandolo antes que el buscador.
    document.getElementById("divBusqueda").prepend(divAlerta);

    //uso setTimeout para quitar la alerta pasados 3 segundos de su creacion
    setTimeout(() => {
      this.removerAlerta();
    }, 3000);
  }
  //quito mensaje de alerta.
  removerAlerta() {
    const msjAlerta = document.querySelector(".alert");
    //si ya existe mensaje de alerta, es removido. esto previene que se generen multiples mensajes de alerta
    if (msjAlerta) {
      msjAlerta.remove();
    }
  }
  //limpio el pefil
  limpiarPerfil() {
    document.getElementById("divPerfil").innerHTML = "";
  }
}
