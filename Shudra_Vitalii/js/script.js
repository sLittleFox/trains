

function ourTrain() {
    let cities = ["kyiv", "lviv", "harkiv", "dnipro", "odessa"];

let distances = {
        kyiv: {
            lviv: 539, 
            odessa: 475, 
            dnipro: 187, 
            harkiv: 489
        },

        lviv: {
            kyiv: 539, 
            harkiv: 1025, 
            odessa: 786, 
            dnipro: 1012
        },

        dnipro:  {
            kyiv: 187, 
            harkiv: 217, 
            odessa: 453, 
            lviv: 1012
        },

        harkiv:  {
            kyiv: 489, 
            dnipro: 217, 
            odessa: 673, 
            lviv: 1025
        },

        odessa:  {
            kyiv: 475, 
            dnipro: 453, 
            harkiv: 673, 
            lviv: 786
    }
};

        
let pointFromIndex = Math.floor(Math.random() * 5);

let pointFrom = (cities[pointFromIndex]);

let filtered = cities.filter(function departPoint(value) {
    return value != pointFrom;
});

let pointToIndex = Math.floor(Math.random() * 4);

let pointTo = (filtered[pointToIndex]);

let randDepartTime = Math.floor(Math.random() * 10080); // випадковий час відправлення (в хвилинах)

let hours = randDepartTime / 420;

let minutesDepart = Math.floor((randDepartTime / 7) % 60); // рандомні хвилини

let hoursDepart = Math.floor(hours * 1) / 1; // рандомні години

let randLetter = String.fromCharCode(Math.floor(Math.random()*(1040-1071))+1071); // рандомна літера

let randNubmer = Math.floor(Math.random() * (999-100) + 100); // випадковий номер потягу

let trainNumber = randNubmer + randLetter; // номер потягу

let trainSpeed = Math.floor(Math.random() * (120 - 80) + 80); // швидкість потягу 

let dist = distances [pointFrom] [pointTo];

if (hoursDepart < 10) {
    hoursDepart = "0"+hoursDepart; // Додаємо нуль перед годинами, якщо необхідно 06:34
} 

if (minutesDepart < 10) {
    minutesDepart = "0"+minutesDepart; // Додаємо нуль перед хвилинами, якщо необхідно 13:06
}
let departTime = hoursDepart + ":" + minutesDepart;

let movementTime = (dist / trainSpeed) * 60; // час в дорозі в хвилинах


let tickerPrice = Math.floor((movementTime / 60 * 40.251) * 100) / 100; // Вартість квитка

let travelTimeMinutes = randDepartTime / 420 + movementTime;

if (travelTimeMinutes > 1440) {
    travelTimeMinutes = travelTimeMinutes - 1440;   // якщо більше 24-х годин
}

let minutesTravelTime = Math.floor(travelTimeMinutes % 60);

let hoursTravelTime = Math.floor((travelTimeMinutes / 60) * 1) / 1; 


if (hoursTravelTime < 10) {
    hoursTravelTime = "0"+hoursTravelTime; // Додаємо нуль перед годинами, якщо необхідно 06:34
} 

if (minutesTravelTime < 10) {
    minutesTravelTime = "0"+minutesTravelTime; // Додаємо нуль перед хвилинами, якщо необхідно 13:06
}

let arrivalTime = (randDepartTime / 7) + travelTimeMinutes;

let arrivalTimeHours = Math.floor((arrivalTime / 60) * 1) / 1; 

let arrivalTimeMinutes = Math.floor(arrivalTime % 60);

if (arrivalTimeHours < 10) {
    arrivalTimeHours = "0"+arrivalTimeHours; // Додаємо нуль перед годинами, якщо необхідно 06:34
} 

if (arrivalTimeMinutes < 10) {
    arrivalTimeMinutes = "0"+arrivalTimeMinutes; // Додаємо нуль перед хвилинами, якщо необхідно 13:06
}

let arrivalPoint = arrivalTimeHours + ":" + arrivalTimeMinutes;

let travelTime = hoursTravelTime + ":" + minutesTravelTime;

let presentMinutes = new Date();

let minutesNow = presentMinutes.getMinutes(); // хвилини на данний момент

let presentHours = new Date();

let hoursNow = presentHours.getHours(); // години на данний момент

let timeInMinutes = (hoursNow * 60) + minutesNow;

presentDay = Math.floor(((randDepartTime / 1440) * 1) / 1) + 1; // день відправлення (пн - 1...нд - 7) 

let weekDay;

switch (presentDay) {
    case 1: weekDay = ("Понеділок");
    break;
    case 2: weekDay = ("Вівторок");
    break;
    case 3: weekDay = ("Середа");
    break;
    case 4: weekDay = ("Четвер");
    break;
    case 5: weekDay = ("П'ятниця");
    break;
    case 6: weekDay = ("Субота");
    break;
    case 7: weekDay = ("Неділя"); 
}

    console.log(pointFrom + " - Місто відправлення");
    console.log(pointTo + " - Місто прибуття");
    console.log(trainNumber + " - № потягу");
    console.log(weekDay + " - день відправлення");
    console.log(departTime + " - час відправлення");
    console.log(travelTime + " - час в дорозі");
    console.log(arrivalPoint + " - час прибуття");
    console.log(tickerPrice + " - вартість квитка");
    console.log("");
}

let numbersOfTrains = prompt("Введіть кількість потягів (1 - 20)!", []);

for (let i = 0;   i < numbersOfTrains; i++) {
    ourTrain();
}