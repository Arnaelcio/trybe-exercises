let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};
for (let mostrar in info) {
  if ( info[mostrar] === "Sim" && info2[mostrar] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[mostrar] + " e " + info2[mostrar]);
  }
}
