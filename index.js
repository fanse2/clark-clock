let arrPendulum =['- /','-  |','-   \\','-  |'];

function movPen(n){
    let pen = document.querySelector("#pendulum");
    pen.textContent = arrPendulum[n%4];
    //pen.innerHTML(arrPendulum[n%4]);
}
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    //document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('clock').innerHTML = today.toLocaleTimeString();
    document.getElementById('calender').innerHTML = today.toLocaleDateString();
    
    movPen(s);

    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}