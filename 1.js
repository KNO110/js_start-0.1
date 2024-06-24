let age = prompt("Введіть ваш вік:");

if (age < 0) {
    console.log("Неправильний вік");
} else if (age <= 12) {
    console.log("Ви дитина");
} else if (age <= 18) {
    console.log("Ви підліток");
} else if (age <= 60) {
    console.log("Ви дорослий");
} else {
    console.log("Ви пенсіонер");
}
