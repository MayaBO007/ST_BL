
const expDay = [];

function randColor() { // 1 or 0 - random choice of car color
    const colorArry = [0, 1];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)]
    if (car == 0) {
        blueChoice.push(now);
        allChoices.push(now);
    } else {
        redChoice.push(now);
        allChoices.push(now);
    }
    return car
};
// Random car choise yellow tesr:
function randColorYellow() { // 2 or 1 or 0
    const colorArry = [0, 1, 2];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)];
    if (car == 0) {
        redChoiceYellow.push(now);
    } else if (car == 1) {
        blueChoiceYellow.push(now)
    } else {
        yellowChoiceYellow.push(now)
    }
    allChoicesYellow.push(now);
    return car
};

// Random car choise switch test:
function randColorSwitch() {
    const colorArry = [0, 1];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)]
    if (car == 0) {
        blueChoiceSwitch.push(now);
    } else {
        redChoiceSwitch.push(now)
    }
    allChoicesSwitch.push(now);
    return car
};

// Random car choise dev test:
function randColorDev() {
    const colorArry = [0, 1];
    let car = colorArry[Math.floor(Math.random() * colorArry.length)]
    if (car == 0) {
        blueChoiceDev.push(now);
    } else {
        redChoiceDev.push(now)
    }
    allChoicesDev.push(now);
    return car
};

//Random count array
const countArry = [17, 18, 19, 20, 21, 22, 23];
const choseCount = Array.from({ length: 1000 });
for (let i = 0; i < choseCount.length; i++) {
    let count = countArry[Math.floor(Math.random() * countArry.length)];
    choseCount.fill(count, i);
};

indexV1 = 0;
indexV2 = 1;

// Random count choise function:
function randCountAirplane() {
    indexV1++
    indexV2++
    return (choseCount.slice(indexV1, indexV2));
};


const speedArry = [0.6, 0.75, 0.9];
const choseSpeed = Array.from({ length: 1000 });
for (let i = 0; i < choseSpeed.length; i++) {
    let speed = speedArry[Math.floor(Math.random() * speedArry.length)];
    choseSpeed.fill(speed, i);
};

indexC1 = 0;
indexC2 = 1;
// indexV1 = 0;
// indexV2 = 1;

// // Random car choise function:
// function randSpeedInterval() {
//     indexV1++
//     indexV2++
//     return (choseSpeed.slice(indexV1, indexV2));
// };

function randSpeedCar() {
    indexC1++
    indexC2++
    return (choseSpeed.slice(indexC1, indexC2));
};

function randDevButton() {
    const buttonArry = [0, 1];
    let buttonChoise = buttonArry[Math.floor(Math.random() * buttonArry.length)];
    devButton.push(buttonChoise);
    if (buttonChoise == 0) {
        button = "startDevtestButtonBlue";
    } else {
        button = "startDevtestButtonRed";
    } devButton.push(buttonChoise);
    return button
}



