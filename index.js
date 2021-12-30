let arrPendulum =['- /','-  |','-   \\','-  |'];

const kClock = {
    name : "seoul",
    title : "서울(Seoul, Korea)",
    tFormat : "LTS",
    dFormat : "YYYY[년] MM[월] DD[일]",
    timeZone : "Asia/Seoul",
    tTag : "#clock-digital-s",
    dTag : "#calendar-digital-s",
    titleTag : "#title-digital-s"
}
const rClock = {
    name : "rome",
    title : "Rome, Italy",
    tFormat : "LTS",
    dFormat : "ll",
    timeZone : "Europe/Rome",
    tTag : "#clock-digital-r",
    dTag : "#calendar-digital-r",
    titleTag : "#title-digital-r"
}
//America/New_York
const nClock = {
    name : "newyork",
    title : "New York, US",
    tFormat : "LTS",
    dFormat : "ll",
    timeZone : "America/New_York",
    tTag : "#clock-digital-n",
    dTag : "#calendar-digital-n",
    titleTag : "#title-digital-n"
}
//America/Los_Angeles
const lClock = {
    name : "losangeles",
    title : "Los Angeles, US",
    tFormat : "LTS",
    dFormat : "ll",
    timeZone : "America/Los_Angeles",
    tTag : "#clock-digital-l",
    dTag : "#calendar-digital-l",
    titleTag : "#title-digital-l"
}

function movPen(n){
    let pen = document.querySelector("#pendulum");
    pen.textContent = arrPendulum[n%4];
}

function showTime(mObj,today){
    document.querySelector(mObj.tTag).innerHTML = today.tz(mObj.timeZone).format(mObj.tFormat); 
    document.querySelector(mObj.dTag).innerHTML = today.tz(mObj.timeZone).format(mObj.dFormat);
    document.querySelector(mObj.titleTag).innerHTML = mObj.title;
    document.querySelector(mObj.tTag).parentElement.style.backgroundColor = "#FFFF99";
}

class MainClock {
    constructor(t){
        this.tTag = "#clock-digital";
        this.dTag = "#calendar";
        this.titleTag = "#clock-title";
        
        this.today = t;
    }
    showLocale(){   //local time
        document.querySelector(this.tTag).innerHTML = this.today.format('LTS');
        document.querySelector(this.dTag).innerHTML = this.today.format('ll');
        document.querySelector(this.titleTag).innerHTML = "Local Time";
    }
    
}

function startTime() {
    let today = moment();

    const mClock = new MainClock(today);
    mClock.showLocale();

    //document.querySelector('#clock-digital').innerHTML = today.format('LTS');
    //document.querySelector('#calendar').innerHTML = today.format('ll');
    
    showTime(kClock,today);
    showTime(rClock,today);
    showTime(nClock,today);
    showTime(lClock,today);
    
    movPen(today.unix());

    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}