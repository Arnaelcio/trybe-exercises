let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info['recorrente'] = 'Sim'
console.log(info)

for (let mostrar in info){
  console.log(mostrar)
}