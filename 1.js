Math.round
let celsias = Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Цельсий: ${celsias}\nФаренгейт: ${Math.round((9 / 5) * celsias + 32)}`)