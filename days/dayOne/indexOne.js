

// move to main function
function timeline() {
    let startDayOne = async function () {
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
                        let goOne = async function () {
                            deleteFromSessionData();
                            let doneDayOne = await start2tests(); // add promise and resolve
                            if (doneDayOne == "doneDayOne") {
                                studySessionData.doneDay1 = "doneDayOne";
                                studySessionData.expDaysDate = updatedDates.fullDate;
                                platform.saveSession(studySessionData, true)
                                document.getElementById("endDayMsg").style.display = "inline";
                                document.getElementById("endDayMsg").addEventListener("click", function () {
                                    showWinnings()
                                    setTimeout(() => {
                                        platform.goToUrl("days/dayTwo/dayTwo.html");
                                    }, 7000)
                                })
                            }
                        }
                        goOne()
                    }
                } else {
                    document.getElementById("endOfGame").style.display = "inline";
                }
            })
        });
    }
    startDayOne()
}


// let getlastData = await getData();
// if (getlastData == "gotData") {
//     studySessionData = savedData[0][savedData[0].length - 1];
//     let updatedDates = updateDates();
