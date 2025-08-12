export default class Route {
    constructor(url, title, pathHtml, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
    }
}


//autorize est un tableau de chaine de caractères
/*
[]  -> tout le monde peut y accéder
["disconnected"]  -> reservé aux utilisateurs connectés
["client"]  -> reservé aux utilisateurs avec le role client
["admin"]  -> reservé aux utilisateurs avec le role admin
["admin", "client"]  -> reservé aux utilisateurs avec le role admin ou client
*/