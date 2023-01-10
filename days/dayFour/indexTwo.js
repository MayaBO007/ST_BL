function timeline() {
    let startDayFour = async function () {
        platform.getAllSessions().then((data) => {
            getIndexSessionData(data).then((i) => {
                studySessionData = data[i];
                let updatedDates = updateDates();
                if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
                    document.getElementById("fiveAM").style.display = "inline";
                    setTimeout(() => {
                        moveToDay();
                    }, timeToFive());
                }
                else if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {)
                    if (0 <= updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
                        document.getElementById("fiveAM").style.display = "inline";
                        setTimeout(() => {
                            moveToDay();
                        }, timeToFiveSameDay());
                    } else {
                        let goFour = async function () {
                            deleteFromSessionData();
                            document.getElementById("startButton").style.display = "inline";
                            document.getElementById("redButton").style.display = "inline";
                            document.getElementById("blueButton").style.display = "inline";
                            document.getElementById("gameScreen").style.display = "inline";
                            document.getElementById("startButton").onclick = function () {
                                document.getElementById("startButton").style.display = "none";
                                studySessionData.doneDay4 = "stratDayFour";
                                platform.saveSession(studySessionData);
                                msCount();
                                let startIntervalTest = async function () {
                                    let startTrainning = await startInterval2Tests2();
                                    button = randDevButton();
                                    if (startTrainning == "done3") {
                                        document.getElementById(button).style.display = "inline";
                                        document.getElementById("iframe-element").style.top = "1%"
                                        document.getElementById("iframe-element").src = "../../timer/timer.html";
                                        document.getElementById('iframe-element').classList.remove('hidden');
                                        document.getElementById("iframe-element").style.display = "inline";
                                        setTimeout(() => {
                                            document.getElementById(button).style.display = "none";
                                            document.getElementById("iframe-element").style.display = "none";
                                            let startDevaluation = async function () {
                                                let doneDayFour = await startDevTest(); // add promise and resolve
                                                if (doneDayFour == "doneDayFour") {
                                                    studySessionData.doneDay4 = "doneDayFour";
                                                    studySessionData.expDaysDate = updatedDates.fullDate;
                                                    platform.saveSession(studySessionData, true)
                                                    // check what's going on here
                                                    showWinnings()
                                                    setTimeout(() => {
                                                        document.getElementById("endOfDayMessage").style.display = "none";
                                                        document.getElementById("todayWins").innerHTML = '';
                                                        document.getElementById("redWins").innerHTML = '';
                                                        document.getElementById("blueWins").innerHTML = '';
                                                        document.getElementById("seeYouTomorrow").innerHTML = '';
                                                        document.getElementById("endOfGame").style.display = "inline";
                                                    }, 5000);
                                                    document.getElementById("endOfGame").style.display = "inline";

                                                }
                                            }
                                            startDevaluation();
                                        }, 5000);
                                    }
                                }
                                startIntervalTest();
                            }
                        }
                        goFour()
                    }
                } else {
                    document.getElementById("endOfGame").style.display = "inline";
                }
            });
        });
    }
    startDayFour();
}