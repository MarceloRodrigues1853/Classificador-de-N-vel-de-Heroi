# Desafio: Classificador de Nível de Herói ⚔️💥

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![DIO Challenge](https://img.shields.io/badge/DIO-Challenge-4c1)](https://dio.me)

## Sobre o Projeto

Este projeto foi criado para resolver o desafio de classificar o nível de um herói com base na experiência (XP) dele.  
Utilizamos conceitos básicos de **variáveis**, **operadores**, **laços de repetição** e **estruturas de decisão** para definir o nível do herói conforme sua XP.

### Regras para Classificação

- **XP menor do que 1.000**: *Ferro*
- **XP entre 1.001 e 2.000**: *Bronze*
- **XP entre 2.001 e 5.000**: *Prata*
- **XP entre 5.001 e 7.000**: *Ouro*
- **XP entre 7.001 e 8.000**: *Platina*
- **XP entre 8.001 e 9.000**: *Ascendente*
- **XP entre 9.001 e 10.000**: *Imortal*
- **XP maior ou igual a 10.001**: *Radiante*

## Exemplo de Código

```javascript
// Define as variáveis iniciais do herói
let nome = "Goku";
let xp = 1000; // XP do herói (valor de exemplo)
let nivel = ""; // Será definido baseado no XP

// Estrutura de decisão para classificar o herói
if (xp < 1000) {
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

// Monta a mensagem final com template literals (modo moderno)
let mensagem = `O Herói ${nome} está no nível ${nivel}`;

// Exibe a mensagem no console
console.log(mensagem);
