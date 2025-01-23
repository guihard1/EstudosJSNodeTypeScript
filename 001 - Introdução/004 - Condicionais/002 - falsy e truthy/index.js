//Falsy = false, 0 , "", null, undefined, NaN
//Truthy = true, 1, " ", [], {}, function(){}

if (!null) { //Isso é feito pra não ter que usar o else pra cair em um false, dessa forma vai direto pro true
    console.log("null é falsy");
}