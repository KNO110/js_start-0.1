let year = prompt("Введіть рік:");

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Цей рік високосний");
} else {
    console.log("Цей рік не високосний, напевно");
}
