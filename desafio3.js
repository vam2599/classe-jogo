let heroi = {
    nome: "vinicius",
    idade: 24,
    tipo: "mago"
  };

var ataque
if (heroi.tipo === "mago") {
    ataque = "magia"
}else if (heroi.tipo === "guerreiro") {
    ataque = "espada"
}else if (heroi.tipo === "monge") {
    ataque = "artes marciais"
}else if (heroi.tipo === "ninja") {
    ataque = "shuriken"
}



console.log(`O ${heroi.tipo} atacou usando ${ataque}`)