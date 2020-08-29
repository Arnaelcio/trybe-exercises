let chessPiece = "cavalo";

switch (chessPiece.toLowerCase()) {
    case "peão":
        console.log(chessPiece + "-->" + " De maneira geral, os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas.");
        break;
    case "torre":
        console.log(chessPiece + "-->" + " Se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.");
        break;
    case "cavalo":
        console.log(chessPiece + "-->" + " O movimento do cavalo forma um “L”. Única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em um ângulo reto.");
        break;
    case "bispo":
        console.log(chessPiece + "-->" + " Se move em uma linha reta diagonalmente no tabuleiro.");
        break;
    case "rainha":
        console.log(chessPiece + "-->" + " Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados");
        break;
    case "rei":
        console.log(chessPiece + "-->" + " Se move para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor.");
        break;
    default:
        console.log(chessPiece + ". !! Não existe essa peça no xadrez !!");

        break;
}




