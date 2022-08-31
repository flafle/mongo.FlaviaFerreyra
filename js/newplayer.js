class Player {
       constructor (nombre, score) {
          this.nombre = nombre ;
          this.score = score;
       }
    };
    
    let players = [] ;
  
  if(localStorage.getItem("players")) {
    players = JSON.parse( localStorage.getItem("players"));
  } else {
    localStorage.setItem("players", JSON.stringify(players));

  };
//consulto 
  const formPlayers = document.getElementById("formPlayers");

  formPlayers.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target)
    let datForm = new FormData(e.target);

    let player = new Player(datForm.get("namePlayer"), datForm.get("puntosPlayer"));

    players.push(player);
    console.log(players);
    localStorage.setItem("players", JSON.stringify(players));
    formPlayers.reset();

  });