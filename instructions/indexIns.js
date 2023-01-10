
// move to main function
function timeline() {
    let updatedDates = updateDates();
    studySessionData.startDate = startDate;
    studySessionData.doneInstructions = "stratIns";
    let goIns = async function () {
        let doneInstructions = await startFirstDay();
        if (doneInstructions == "doneInstructions") {
            studySessionData.doneInstructions = "doneInstructions";
            studySessionData.expDaysDate = updatedDates.fullDate;
            platform.saveSession(studySessionData, true);
            document.getElementById("ins12").style.display = "inline";
            document.getElementById("ins12").addEventListener("click", function () {
                setTimeout(() => {
                    platform.goToUrl("days/dayOne/dayOne.html");
                }, 200)
            });
        } else {
            moveToDay()
        }
    }
    goIns();
}


