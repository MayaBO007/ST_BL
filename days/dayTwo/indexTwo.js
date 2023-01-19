function timeline() {
    let startDayTwo = async function () {
        platform.getAllSessions().then((data) => {
            getIndexSessionData(data).then((i) => {
                studySessionData = data[i];
                let updatedDates = updateDates();
                if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
                    if (window.matchMedia("(orientation: landscape)").matches) {
                        document.getElementById("fiveAM").style.display = "inline";
                    } else {
                        document.getElementById("fiveAM_hor").style.display = "inline";
                    }
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
                        let goTwo = async function () {
                            deleteFromSessionData();
                            document.getElementById("startButton").style.display = "inline";
                            document.getElementById("redButton").style.display = "inline";
                            document.getElementById("blueButton").style.display = "inline";
                            document.getElementById("gameScreen").style.display = "inline";
                            document.getElementById("startButton").onclick = function () {
                                let my_awesome_script = document.createElement('script');
                                my_awesome_script.setAttribute('src', '../../functions/orientation.js');
                                // my_awesome_script.src = "../functions/orientation.js";
                                document.body.appendChild(my_awesome_script);

                                document.getElementById("startButton").style.display = "none";
                                studySessionData.doneDay2 = "stratDayTwo";
                                platform.saveSession(studySessionData);
                                getMillisec();
                                // msCount();
                                let startIntervalTest = async function () {
                                    let startTrainning = await startInterval2Tests2();
                                    button = randDevButton();
                                    if (startTrainning == "done3") {
                                        setTimeout(() => {
                                            document.getElementById(button).style.display = "inline";
                                            document.getElementById("iframe-element").style.top = "1%"
                                            document.getElementById("iframe-element").src = "../../timer/timer.html";
                                            document.getElementById('iframe-element').classList.remove('hidden');
                                            document.getElementById("iframe-element").style.display = "inline";
                                        }, 1000)
                                        setTimeout(() => {
                                            document.getElementById(button).style.display = "none";
                                            document.getElementById("iframe-element").style.display = "none";
                                            let startDevaluation = async function () {
                                                let doneDayTwo = await startDevTest(); // add promise and resolve
                                                if (doneDayTwo == "doneDayTwo") {
                                                    studySessionData.doneDay2 = "doneDayTwo";
                                                    studySessionData.expDaysDate = updatedDates.fullDate;
                                                    platform.saveSession(studySessionData, true)
                                                    // check what's going on here
                                                    showWinnings()
                                                    // document.getElementById("endOfDayMessage").style.display = "none";
                                                    // document.getElementById("todayWins").innerHTML = '';
                                                    // document.getElementById("redWins").innerHTML = '';
                                                    // document.getElementById("blueWins").innerHTML = '';
                                                    setTimeout(() => {
                                                        document.getElementById("endOfGame").style.display = "inline";
                                                    }, 7000);

                                                }
                                            }
                                            startDevaluation();
                                        }, 16000);
                                    }
                                }
                                startIntervalTest();
                            }
                        }
                        goTwo()
                    }
                } else {
                    document.getElementById("endOfGame").style.display = "inline";
                }
            });
        });
    }
    startDayTwo();
}