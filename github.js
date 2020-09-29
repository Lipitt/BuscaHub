//defino clase y sus propiedades
class Github {
  constructor() {
    //en caso de usar token, habilitar esta propiedad y colocar el token
    /* this.config = {
      headers: {
        Authorization: "token TOKEN_AQUI",
      },
    };*/
    this.repo_cantidad = 4;
    this.repo_orden = "created: asc";
  }

  async traerUsuario(usuario) {
    //uso async/await para esperar a que se resuelva el fetch antes de guardar en la variable
    const respuestaPerfil = await fetch(
      //paso como parametro de fetch la url necesaria para traer a los usuarios, usando la variable recibida por parametro para completar
      //version sin token
      `https://api.github.com/users/${usuario}`

      //version con token
      /*`https://api.github.com/users/${usuario}`,
      this.config*/
    );
    const respuestaRepos = await fetch(
      //similar a la url anterior pero usando tambien las propiedades para manejar cantidad y orden de lo recibido
      //version sin token
      `https://api.github.com/users/${usuario}/repos?per_page=${this.repo_cantidad}&sort=${this.repo_orden}`

      //version con token
      /*`https://api.github.com/users/${usuario}/repos?per_page=${this.repo_cantidad}&sort=${this.repo_orden}`,
        this.config*/
    );
    //uso await nuevamente para guardar los datos despues de que hayan sido convertidos a objetos
    const perfil = await respuestaPerfil.json();
    const repos = await respuestaRepos.json();
    //devuelvo los dos arrays
    return {
      perfil,
      repos,
    };
  }
}
