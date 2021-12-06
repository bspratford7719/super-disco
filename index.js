var nineAm = moment().set({"hour":9, "minute":0, "second":0})
var tenAm = moment().set({"hour":10, "minute":0, "second":0})
var elevenAm = moment().set({"hour":11, "minute":0, "second":0})
var twelvePm = moment().set({"hour":12, "minute":0, "second":0})
var onePm = moment().set({"hour":13, "minute":0, "second":0})
var twoPm = moment().set({"hour":14, "minute":0, "second":0})
var threePm = moment().set({"hour":15, "minute":0, "second":0})
var fourPm = moment().set({"hour":16, "minute":0, "second":0})
var fivePm = moment().set({"hour":17, "minute":0, "second":0})


const currentDate = moment()

function currentDay (){
    var currentMoment = moment().format('LLLL')
    var dayElement = document.getElementById("currentDay");
    dayElement.innerText = currentMoment;
}

function getTense(moment, id) {
    var textElement = document.getElementById(id);
    if(moment < currentDate) {
        textElement.className = "col-10 past"
        return;
    }

    //present
    if(moment.hour() === currentDate.hour()) {
        textElement.className = "col-10 present"
        return;
    }

    if(moment > currentDate) {
        textElement.className = "col-10 future"
        return;
    }
}

function getUserInputFromLocalStorage(textAreaID){
    var userInput = localStorage.getItem(textAreaID)
    document.getElementById(textAreaID).value = userInput
}

function saveBtn(textAreaID){
    var userInput = document.getElementById(textAreaID).value;
    localStorage.setItem(textAreaID, userInput);
}

document.getElementById('save9').addEventListener("click", function () { saveBtn("nineAmElement")})
document.getElementById('save10').addEventListener("click", function () { saveBtn("tenAmElement")})
document.getElementById('save11').addEventListener("click", function () { saveBtn("elevenAmElement")})
document.getElementById('save12').addEventListener("click", function () { saveBtn("twelvePmElement")})
document.getElementById('save1').addEventListener("click", function () { saveBtn("onePmElement")})
document.getElementById('save2').addEventListener("click", function () { saveBtn("twoPmElement")})
document.getElementById('save3').addEventListener("click", function () { saveBtn("threePmElement")})
document.getElementById('save4').addEventListener("click", function () { saveBtn("fourPmElement")})
document.getElementById('save5').addEventListener("click", function () { saveBtn("fivePmElement")})

getTense(nineAm, "nineAmElement")
getTense(tenAm, "tenAmElement")
getTense(elevenAm, "elevenAmElement")
getTense(twelvePm, "twelvePmElement")
getTense(onePm, "onePmElement")
getTense(twoPm, "twoPmElement")
getTense(threePm, "threePmElement")
getTense(fourPm, "fourPmElement")
getTense(fivePm, "fivePmElement")

getUserInputFromLocalStorage("nineAmElement")
getUserInputFromLocalStorage("tenAmElement")
getUserInputFromLocalStorage("elevenAmElement")
getUserInputFromLocalStorage("twelveAmElement")
getUserInputFromLocalStorage("onePmElement")
getUserInputFromLocalStorage("twoPmElement")
getUserInputFromLocalStorage("threePmElement")
getUserInputFromLocalStorage("fourPmElement")
getUserInputFromLocalStorage("fivePmElement")

currentDay();