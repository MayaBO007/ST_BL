

const responsesDev = {
    correctRedPressDevtest: correctRedPressDevtest,
    correctBluePressDevtest: correctBluePressDevtest,
    incorrectRedPressDevtest: incorrectRedPressDevtest,
    incorrectBluePressDevtest: incorrectBluePressDevtest,
    redChoiceDev: redChoiceDev,
    blueChoiceDev: blueChoiceDev,
    allRedPressesDev: allRedPressesDev,
    allBluePressesDev: allBluePressesDev,
    allCorrectFirstPressDev: allCorrectFirstPressDev,
    allChoicesDev: allChoicesDev,
    devButton: devButton
};

platform.saveSession(responsesDev, true);

// 1=red, 2=blue buttons
let buttonChoice = null;
let sessionInterval = null;
let startGame = null;


document.getElementById("redButton").addEventListener("click", function () {
    allRedPressesDev.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePressesDev.push(now);
});

let startClickDev = null;
async function startDevTest() {
    return new Promise(resolve => {
        breaks = 0;
        countingCars = 0;
        let button = randDevButton();
        document.getElementById("startButton").style.display = "inline";
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        document.getElementById("startButton").onclick = function () {
            document.getElementById("startButton").style.display = "none";
            msCount();
            let startIntervalTest = async function () {
                let startSwitch = await startInterval2Tests2();
                if (startSwitch == "done4") {
                    document.getElementById(button).style.display = "inline";
                    document.getElementById("TenSecTimeout").style.top = "51%";
                    document.getElementById("TenSecTimeout").style.display = "inline";
                    setTimeout(() => {
                        document.getElementById(button).style.display = "none";
                        document.getElementById("TenSecTimeout").style.display = "none";
                        function startIntervalDevtest() {
                            count = 0;
                            reset_gif();
                            document.getElementById("break").style.display = "none";
                            document.getElementById("redButton").style.display = "inline";
                            document.getElementById("blueButton").style.display = "inline";
                            document.getElementById("gameScreen").style.display = "inline";
                            sessionIntervalTest = setInterval(
                                function carMove() {
                                    let choseCar = randColorDev();
                                    let carSpeed = randSpeedCar();
                                    reset_airplane();
                                    buttonChoice = 0;
                                    if (count >= 20) {
                                        clearInterval(sessionIntervalTest);
                                        setTimeout(startIntervalDevtest, 2000);
                                        document.getElementById("airplane").style.display = "inline";
                                        document.getElementById("airplane").style.animationPlayState = "running";
                                        platform.saveSession(responsesDev, false);
                                        count = 0;
                                        countingCars++;
                                    } else {
                                        count++;
                                        countingCars++;
                                        if (choseCar >= 0.5) {
                                            document.getElementById("redCar").style.display = "inline";
                                            document.getElementById("redCar").style.animationPlayState = "running";
                                            document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                                            document.getElementById("redButton").onclick = function () {
                                                buttonChoice = buttonChoice + 1;
                                                if (buttonChoice == 1) {
                                                    correctRedPressDevtest.push(now);
                                                    allCorrectFirstPressDev.push(now);
                                                } else {
                                                    correctRedPressDevtest.push(now);
                                                }
                                            };
                                            document.getElementById("blueButton").onclick = function () {
                                                buttonChoice = buttonChoice - 1;
                                                if (buttonChoice <= -1) {
                                                    incorrectBluePressDevtest.push(now);
                                                }
                                            };

                                            setTimeout(() => {
                                                reset_redCar();
                                            }, carSpeed * 1000);
                                        } else {
                                            document.getElementById("blueCar").style.display = "inline";
                                            document.getElementById("blueCar").style.animationPlayState = "running";
                                            document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                                            document.getElementById("redButton").onclick = function () {
                                                buttonChoice = buttonChoice - 1;
                                                if (buttonChoice <= -1) {
                                                    incorrectRedPressDevtest.push(now);
                                                };
                                            };
                                            document.getElementById("blueButton").onclick = function () {
                                                buttonChoice = buttonChoice + 1;
                                                if (buttonChoice == 1) {
                                                    correctBluePressDevtest.push(now);
                                                    allCorrectFirstPressDev.push(now);
                                                } else {
                                                    correctBluePressDevtest.push(now);
                                                }

                                            };

                                            setTimeout(() => {
                                                reset_blueCar();
                                            }, carSpeed * 1000);
                                        };
                                        if (countingCars >= 280 & breaks <= 2) {
                                            clearInterval(sessionIntervalTest);
                                            reset_redCar();
                                            reset_blueCar();
                                            reset_airplane();
                                            document.getElementById("gameScreen").style.display = "none";
                                            document.getElementById("redButton").style.display = "none";
                                            document.getElementById("blueButton").style.display = "none";
                                            document.getElementById("break").style.display = "inline";
                                            document.getElementById("secCountdown").style.display = "inline";
                                            countingCars = 0;
                                            setTimeout(startIntervalDevtest, 30000);
                                            breaks++;
                                        }

                                    };
                                    //  jatos.submitResultData(saveResponsesDev);
                                }, 0.9 * 1000);// (Maximal carSpeed)*1000
                            let sessionTimerTest = setTimeout(function timeCount() {
                                platform.saveSession(responsesDev, false);
                                document.getElementById("blueButton").style.display = "none";
                                document.getElementById("redButton").style.display = "none";
                                clearInterval(sessionIntervalTest);
                                clearTimeout(sessionTimerTest);
                                resolve("doneDayTwo");
                                reset_airplane();
                            }, 720000);
                            // }, 3000);
                        };
                        startIntervalDevtest();
                        msCount();
                    }, 6000);
                }

            }
            startIntervalTest();
        }
    })
};