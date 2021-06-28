var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var start = document.getElementById('buttons__start');
var end = document.getElementById('buttons__end');
var reset = document.getElementById('buttons__reset');
var a = 0;
var b = 0;
var c = 0;
var check;
function time_run() {
    if (check == 1) {
        if (a < 360) {
                a += 6;
                second.style.transform = 'rotate(' + a + 'deg)';
                document.getElementById('clock-num__seconds').innerHTML = a/6;
        } 
        else if (a == 360) {
            a = 6;
            second.style.transform = 'rotate(' + a + 'deg)';
            document.getElementById('clock-num__seconds').innerHTML = a/6;
            if (b < 360) {
                b += 6;
                minute.style.transform = 'rotate(' + b + 'deg)';
                document.getElementById('clock-num__minutes').innerHTML = b/6 + ':';
            } 
            else if (b == 360) {
                b = 6;
                minute.style.transform = 'rotate(' + b + 'deg)';
                document.getElementById('clock-num__minutes').innerHTML = b/6 + ':';
                c += 30;
                hour.style.transform = 'rotate(' + c + 'deg)';
                document.getElementById('clock-num__hours').innerHTML = c/30 + ':';
            }
        }
    } 
}
var timeId;
start.addEventListener('click', function(){
    check = 1;
    time_run();
    // hour.style.transform = 'rotate(' + 45 + 'deg)';
    timeId = setInterval(time_run,1000);
}); 
end.addEventListener('click', function(){
    check = 0;;
    clearTimeout(timeId);
})
reset.addEventListener('click', function(){
    clearTimeout(timeId);
    a = 0;
    second.style.transform = 'rotate(' + a + 'deg)';
    document.getElementById('clock-num__seconds').innerHTML = a/6;
    b = 0;
    minute.style.transform = 'rotate(' + b + 'deg)';
    document.getElementById('clock-num__minutes').innerHTML = b/6 + ':';
    c = 0;   
    hour.style.transform = 'rotate(' + c + 'deg)';
    document.getElementById('clock-num__hours').innerHTML = c/30 + ':';
})