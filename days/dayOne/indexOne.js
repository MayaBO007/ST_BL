

// move to main function
function timeline() {
    platform.getAllSessions().then((data) => {
        console.log(data);
        studySessionData = data[0];
        let updatedDates = updateDates();
        if (updatedDates.fullDate.getDate() == Number(dayDate())) {
            deleteFromSessionData();
            let goOne = async function () {
                let doneDay1 = await start2tests(); // add promise and resolve
                if (doneDay1 == "doneDayOne") {
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
            goOne();
        } else {
            document.getElementById("endOfGame").style.display = "inline";
        }
    })
}


// let getlastData = await getData();
// if (getlastData == "gotData") {
//     studySessionData = savedData[0][savedData[0].length - 1];
//     let updatedDates = updateDates();
