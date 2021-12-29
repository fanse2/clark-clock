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

    let mToday = moment();

    document.querySelector('#clock-digital').innerHTML = today.toLocaleTimeString();
    document.querySelector('#calendar').innerHTML = today.toLocaleDateString();
    
    document.querySelector('#clock-digital-s').innerHTML = mToday.tz('Asia/Seoul').format('LTS'); 
    document.querySelector('#calendar-digital-s').innerHTML = mToday.tz('Asia/Seoul').format('YYYY년 MM월 DD일') + "<br>" + mToday.tz('Asia/Seoul').format('ll'); 

    
    movPen(s);

    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}