let amount = prompt("Введи кол-во USD: ");
let currency = prompt("На что меняем?: EUR, UAN илии AZN? ");
let result;

const usdToEur = 0.95;
const usdToUan = 40.0;
const usdToAzn = 2.7;

switch (currency) {
    case "EUR":
        result = amount * usdToEur;
        console.log(`Сумма в EUR: ${result}`);
        break;
    case "UAN":
        result = amount * usdToUan;
        console.log(`Сумма в UAN: ${result}`);
        break;
    case "AZN":
        result = amount * usdToAzn;
        console.log(`Сумма в AZN: ${result}`);
        break;
    default:
        console.log("Такой валютые нет (у меня)");
}
