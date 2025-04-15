// Define as variáveis iniciais com os dados do herói
let nome = "Goku";
let xp = 1000; // XP do herói (valor de exemplo)
let nivel = ""; // Variável que receberá o nível do herói

// Verifica e atribui o nível com base na quantidade de XP
if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

// Cria a mensagem final utilizando template literals (modo mais moderno)
let mensagem = `O Herói ${nome} está no nível ${nivel}`;

// Exibe a mensagem no console
console.log(mensagem);
