let productCost = 5;
let productTx = productCost * 20 / 100 + productCost;
let totalProductCost = productTx
let productSale = 10;
let productProfit = productSale - totalProductCost;

if (productCost <= 0 || productSale <= 0 ) {
    console.log ("Error!! valor de productCost ou productSale deve ser maior que zero!");
}else{
    console.log(productProfit * 1000)
}



