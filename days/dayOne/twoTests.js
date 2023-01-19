// const intervalDone = [];
let timeTwoTests = null;

async function start2tests() {
    return new Promise(resolve => {
        document.getElementById("startButton").style.display = "inline";
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        document.getElementById("startButton").onclick = function () {
            getMillisec();
            document.getElementById("startButton").style.display = "none";
            studySessionData.doneDay1 = "startDayOne";
            platform.saveSession(studySessionData);
            // msCount();
            let startIntervalTest = async function () {
                let startSwitch = await startInterval2Tests();
                if (startSwitch == "done1") {
                    // intervalDone.push("done1");
                    setTimeout(() => {
                        reset_blueCar();
                        reset_redCar();
                        document.getElementById("startSwitchTestButton").style.display = "inline";
                        document.getElementById("iframe-element").src = "../../timer/timer.html";
                        document.getElementById('iframe-element').classList.remove('hidden');
                        document.getElementById("iframe-element").style.display = "inline";
                    }, 1000);
                    setTimeout(() => {
                        document.getElementById("startSwitchTestButton").style.display = "none";
                        document.getElementById("iframe-element").style.display = "none";
                        document.getElementById("iframe-element").src = "";
                        document.getElementById("redButton").style.display = "inline";
                        document.getElementById("blueButton").style.display = "inline";
                        document.getElementById("redButton").style.left = "0%";
                        document.getElementById("blueButton").style.left = "80%";
                        let startSwitchTest = async function () {
                            let endSwitch = await startIntervalSwitch();
                            if (endSwitch == "done2") {
                                setTimeout(() => {
                                    // reset_blueCar();
                                    // reset_redCar();
                                    document.getElementById("startAfterSwitchTestButton").style.display = "inline";
                                    document.getElementById("iframe-element2").style.top = "1%"
                                    document.getElementById("iframe-element2").src = "../../timer/timer2.html";
                                    document.getElementById('iframe-element2').classList.remove('hidden');
                                    document.getElementById("iframe-element2").style.display = "inline";
                                }, 1000)
                                setTimeout(() => {
                                    document.getElementById("blueButton").style.left = "0%";
                                    document.getElementById("redButton").style.left = "80%";
                                    document.getElementById("startAfterSwitchTestButton").style.display = "none";
                                    document.getElementById("iframe-element2").style.display = "none";
                                    document.getElementById("iframe-element2").src = "";
                                    document.getElementById("redButton").style.display = "inline";
                                    document.getElementById("blueButton").style.display = "inline";
                                    let afterSwitchTest = async function () {
                                        let afterSwitch = await startInterval2Tests2();
                                        if (afterSwitch == "done3") {
                                            // document.getElementById("blueButton").style.display = "none";
                                            // document.getElementById("redButton").style.display = "none";
                                            reset_blueCar();
                                            reset_redCar();
                                            setTimeout(() => {
                                                document.getElementById("startYellowTestButton").style.display = "inline";
                                            }, 1000)
                                            setTimeout(() => {
                                                document.getElementById("iframe-element").src = "../../timer/timer.html";
                                                document.getElementById("iframe-element").style.display = "inline";
                                                document.getElementById("iframe-element").style.top = "18%";
                                            }, 4000)
                                            setTimeout(() => {
                                                document.getElementById("redButton").style.display = "inline";
                                                document.getElementById("blueButton").style.display = "inline";
                                                document.getElementById("startYellowTestButton").style.display = "none";
                                                document.getElementById("iframe-element").src = "";
                                                document.getElementById("iframe-element").style.display = "none";
                                                let startYellow = async function () {
                                                    let endYellowTest = await startIntervalYellow();
                                                    if (endYellowTest == "done4") {
                                                        reset_blueCar();
                                                        reset_redCar();
                                                        reset_yellowCar();
                                                        // document.getElementById("blueButton").style.display = "none";
                                                        // document.getElementById("redButton").style.display = "none";
                                                        setTimeout(() => {
                                                            document.getElementById("endYellowTestButton").style.display = "inline";
                                                            document.getElementById("iframe-element2").style.top = "5%"
                                                            document.getElementById("iframe-element2").style.display = "inline";
                                                            document.getElementById("iframe-element2").src = "../../timer/timer2.html";
                                                        }, 1000)
                                                        setTimeout(() => {
                                                            document.getElementById("endYellowTestButton").style.display = "none";
                                                            document.getElementById("iframe-element2").style.display = "none";
                                                            document.getElementById("iframe-element2").src = "";
                                                            // document.getElementById("redButton").style.display = "inline";
                                                            // document.getElementById("blueButton").style.display = "inline";
                                                            // intervalDone.push("done5");
                                                            let endYellow = async function () {
                                                                let doneTwoTests = await startInterval2Tests3();
                                                                if (doneTwoTests == "done5") {
                                                                    resolve("doneDayOne");
                                                                }
                                                            }
                                                            endYellow();
                                                        }, 7000)
                                                    }
                                                }
                                                startYellow()
                                            }, 20000)
                                        }

                                    }

                                    afterSwitchTest();
                                }, 7000)
                            }
                        }
                        startSwitchTest();
                    }, 17000)

                }
            }
            startIntervalTest();
        }
    })
}