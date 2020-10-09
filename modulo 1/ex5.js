function Habilidades(usuarios){
    for (usuario of usuarios) {
        console.log(
            "O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(",")
        );
    }
}
var usuario = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

Habilidades(usuario);
