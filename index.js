
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
    }

    if(moment > currentDate) {
        textElement.className = "col-10 future"
    }
}

var nineAm = moment().set({"hour":9, "minute":0, "second":0})
var tenAm = moment().set({"hour":10, "minute":0, "second":0})
var elevenAm = moment().set({"hour":11, "minute":0, "second":0})
var twelvePm = moment().set({"hour":12, "minute":0, "second":0})
var onePm = moment().set({"hour":13, "minute":0, "second":0})
var twoPm = moment().set({"hour":14, "minute":0, "second":0})
var threePm = moment().set({"hour":15, "minute":0, "second":0})
var fourPm = moment().set({"hour":16, "minute":0, "second":0})
var fivePm = moment().set({"hour":17, "minute":0, "second":0})

getTense(nineAm, "nineAmElement")


currentDay();