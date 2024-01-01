// Variavel criada para armazenar nome e (xp) do heroi
let nomeDoHeroi = "Super Heroi"
let xpDoHeroi = 0

//Variavel criada par armazenar o nivel e para ultilizar na estrutura de decisão
let nivelDoHeroi 

if (xpDoHeroi >= 9001){
    nivelDoHeroi = "Imortal"
}else if (xpDoHeroi >= 8001){
    nivelDoHeroi = "Ascendente"
}else if (xpDoHeroi >= 7001){
    nivelDoHeroi = "Platina Diamante"
}else if (xpDoHeroi >= 6001){
    nivelDoHeroi = "Ouro"
}else if (xpDoHeroi >= 2001){
    nivelDoHeroi = "Prata"
}else if (xpDoHeroi >= 1001){
    nivelDoHeroi = "Bronze"
}else {
    nivelDoHeroi = "Ferro"
}
//Mensagem criada para aparecer no final do codigo 
console.log ("O heroi:\n" + nomeDoHeroi + "\nEsta no nivel:\n" + nivelDoHeroi)