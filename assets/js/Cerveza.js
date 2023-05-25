import { Beer } from "../js/Beer.js";
import beers from "../db/beers.json" assert { type: "json" }; //automaticamente hace un cast (pues es lo que está utilizando como valores default.)

let beersObjeto = beers.map(
    (beer) => new Beer(beer.name, beer.price, beer.image),
);

let valueRange = prompt("Buscar cerveza menor a: ");
valueRange = parseFloat(valueRange);


let filtered = beersObjeto.filter(
    (beer) => beer.getValueInFloat() < valueRange,
);

console.log(filtered);

filtered.forEach((beer) => beer.getDivCardBeer("storage-beer"));


let totalAmount = filtered.reduce(
    (acc, beer) => acc + beer.getValueInFloat(),
    0,
);

console.log(totalAmount);