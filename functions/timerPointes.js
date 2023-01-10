let criterion = [];

async function onloadPics() {
    return new Promise(resolve => {
        document.getElementById("redButton").style.display = "inline";
        document.getElementById("blueButton").style.display = "inline";
        document.getElementById("gameScreen").style.display = "inline";
        resolve("OK");
    })
};

// let now = null;
function msCount() {
    msIntAll = setInterval(function setTimer() {
        now = now + 10;
        if (now >= 1000000) {
            clearInterval(msIntAll);
        }
    }, 10);
};

async function getIndexSessionData(data) {
    let i = data.length - 1;
    while (i >= 0) {
        if (data[i].hasOwnProperty("doneDay1")) {
            break;
        }
        i--;
    }
    return i;
};

function dayDate() {
    if (studySessionData.startDate.substring(2, 3) == ":") {
        let dayDate = studySessionData.startDate.substring(0, 2);
        return dayDate;
    } else {
        let dayDate = studySessionData.startDate.substring(1, 2);
        return dayDate;
    }
}
// const d = new Date();
// function getStartDate() {
//     let day = d.getDate();
//     let month = 1 + d.getMonth();
//     let year = d.getFullYear();
//     day = checkTime(day);
//     month = checkTime(month);
//     return day + ':' + month + ":" + year;
// }

const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let ms = d.getMilliseconds();
h = checkTime(h);
m = checkTime(m);
s = checkTime(s);
ms = checkTime(ms);
let startTime = h + ":" + m + ":" + s + ":" + ms;


// function getStartDate() {
//     let day = d.getDate();
//     let month = 1 + d.getMonth();
//     let year = d.getFullYear();
//     day = checkTime(day);
//     month = checkTime(month);
//     return day + ':' + month + ":" + year;
// }


function checkTime(i) {
    if (i < 10) { i = "0" + i }
    else { i = i };
    return i;
};


function getTodayStartTime() {
    let todayStartDetails = new Date();
    let hToday = todayStartDetails.getHours();
    let mToday = todayStartDetails.getMinutes();
    let sToday = todayStartDetails.getSeconds();
    let msToday = todayStartDetails.getMilliseconds();
    hToday = checkTime(hToday);
    mToday = checkTime(mToday);
    sToday = checkTime(sToday);
    msToday = checkTime(msToday);
    let startTimeToday = hToday + ":" + mToday + ":" + sToday + ":" + msToday;
    return startTimeToday;
}

function getTodayDate() {
    let todayStartDetails = new Date();
    let dayToday = todayStartDetails.getDate();
    let monthToday = 1 + todayStartDetails.getMonth();
    let yearToday = todayStartDetails.getFullYear();
    dayToday = checkTime(dayToday);
    monthToday = checkTime(monthToday);
    let today = dayToday + ':' + monthToday + ":" + yearToday;
    return (today);

}

function timeToWait() {
    let todayEndDetails = new Date();
    let hToday = todayEndDetails.getHours();
    let mToday = todayEndDetails.getMinutes();
    let sToday = todayEndDetails.getSeconds();
    let msToday = todayEndDetails.getMilliseconds();
    hChange = (28 - checkTime(hToday)) * 3600000;
    mChange = (60 - checkTime(mToday)) * 60000;
    sChange = (60 - checkTime(sToday)) * 1000;
    msChange = (999 - checkTime(msToday));

    let msToWait = hChange + mChange + sChange + msChange;
    return (msToWait);
}


let studySessionData = {
    startDate: "",
    doneInstructions: "",
    doneDay1: "",
    doneDay2: "",
    expDaysDate: ""
};

function deleteFromSessionData() {
    delete studySessionData._id;
    delete studySessionData.createdAt;
    delete studySessionData.subId;
}

function updateDates() {
    let fullDate = new Date();
    let timeNow = getTodayStartTime();
    let today = getTodayDate();
    // if (saveData.doneDays == undefined){
    if (studySessionData.doneInstructions == "") {
        yesterday = null;
        yesterdayPlusOne = null
    } else if ((studySessionData.doneDay1 == "") && (studySessionData.doneInstructions != "")) {
        yesterday = null;
        yesterdayPlusOne = null;
    } else {
        // let yesterday = new Date(saveData.expDays.date= new Date(jatos.studySessionData.expDaysDate);
        yesterday = new Date(studySessionData.expDaysDate)
        nextDay = new Date(studySessionData.expDaysDate)
        yesterdayPlusOne = nextDay.setDate(nextDay.getDate() + 1);
        yesterdayPlusOne = new Date(yesterdayPlusOne)
    }
    return { fullDate, timeNow, today, yesterday, yesterdayPlusOne }
}


const todayHeb = ":היום הרווחת";
const redCoinsHeb = ":מטבעות אדומים";
const blueCoinsHeb = ":מטבעות כחולים";
const seeYouTomorrowHeb = "(:!נתראה מחר";


function showWinnings() {
    let redWinsLength = correctRedPress.length + correctRedPressYellow.length + correctRedPressSwitch.length; //+ correctRedPressDevtest.length
    let blueWinsLength = correctBluePress.length + correctBluePressSwitch.length + correctBluePressYellow.length; //+ correctBluePressDevtest.length
    if (devButton[0] == 0) {
        redWinsLength = redWinsLength + correctRedPressDevtest.length;
    } else {
        blueWinsLength = blueWinsLength + correctBluePressDevtest.length;
    }
    if (studySessionData.doneDay2 == "doneDayTwo") {
        document.getElementById("blueButton").style.display = "none";
        document.getElementById("redButton").style.display = "none";
        document.getElementById("endOfDayMessage").style.display = "inline";
        document.getElementById("todayWins").innerHTML = todayHeb;
        document.getElementById("redWins").innerHTML = redWinsLength + " " + redCoinsHeb;
        document.getElementById("blueWins").innerHTML = blueWinsLength + " " + blueCoinsHeb;
    } else {
        document.getElementById("blueButton").style.display = "none";
        document.getElementById("redButton").style.display = "none";
        document.getElementById("endOfDayMessage").style.display = "inline";
        document.getElementById("todayWins").innerHTML = todayHeb;
        document.getElementById("redWins").innerHTML = redWinsLength + " " + redCoinsHeb;
        document.getElementById("blueWins").innerHTML = blueWinsLength + " " + blueCoinsHeb;
        document.getElementById("seeYouTomorrow").innerHTML = seeYouTomorrowHeb;
    }
};

let breaks = [];

function timeToFive() {
    let updatedDates = updateDates();
    let hours = updatedDates.fullDate.getHours();
    let minutes = updatedDates.fullDate.getMinutes();
    timeToWait = ((24 - hours) * 60 + (60 - minutes) + 300) * 1000;
    return timeToWait;
}

function timeToFiveSameDay() {
    let updatedDates = updateDates();
    let hours = updatedDates.fullDate.getHours();
    let minutes = updatedDates.fullDate.getMinutes();
    timeToWait = ((5 - hours) * 60 + (60 - minutes)) * 1000;
    return timeToWait;
}

//jQuery plugin
// jQuery.fn.ForceNumericOnly =
//     function () {
//         return this.each(function () {
//             $(this).keydown(function (e) {
//                 var key = e.charCode || e.keyCode || 0;
//                 // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
//                 return (
//                     key == 8 ||
//                     key == 9 ||
//                     key == 46 ||
//                     (key >= 37 && key <= 40) ||
//                     (key >= 48 && key <= 57) ||
//                     (key >= 96 && key <= 105));
//             })
//         })
//     };


// ***** consts: **** 

const correctRedPress = [];
const correctBluePress = [];
const incorrectRedPress = [];
const incorrectBluePress = [];
const redChoice = [];
const blueChoice = [];
const allRedPresses = [];
const allBluePresses = [];
const allCorrectFirstPress = [];
const allChoices = [];

const correctRedPressSwitch = [];
const correctBluePressSwitch = [];
const incorrectRedPressSwitch = [];
const incorrectBluePressSwitch = [];
const redChoiceSwitch = [];
const blueChoiceSwitch = [];
const allRedPressesSwitch = [];
const allBluePressesSwitch = [];
const allCorrectFirstPressSwitch = [];
const allChoicesSwitch = [];

const correctRedPressYellow = [];
const correctBluePressYellow = [];
const incorrectRedPressYellow = [];
const incorrectBluePressYellow = [];
const redChoiceYellow = [];
const blueChoiceYellow = [];
const yellowChoiceYellow = [];
const allRedPressesYellow = [];
const allBluePressesYellow = [];
const allCorrectFirstPressYellow = [];
const allChoicesYellow = [];
const howManyYellows = [];

const correctRedPressDevtest = [];
const correctBluePressDevtest = [];
const incorrectRedPressDevtest = [];
const incorrectBluePressDevtest = [];
const redChoiceDev = [];
const blueChoiceDev = [];
const allRedPressesDev = [];
const allBluePressesDev = [];
const allCorrectFirstPressDev = [];
const allChoicesDev = [];
const devButton = [];



let countingCars = null;