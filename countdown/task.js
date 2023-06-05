const time = document.getElementById('timer')
const link = document.getElementById('down')

let strTime = (t) => {
dateObj = new Date(Number(t) * 1000);
hours = dateObj.getUTCHours();
minutes = dateObj.getUTCMinutes();
seconds = dateObj.getSeconds();

timeString = hours.toString().padStart(2, '0') + ':' + 
    minutes.toString().padStart(2, '0') + ':' + 
    seconds.toString().padStart(2, '0');

return timeString
}

time.textContent = strTime(Number(time.textContent))

function myTimer () {
    let sec = Number(time.textContent.slice(-2,))
    console.log(sec);
    time.textContent = strTime(sec - 1);
    if (sec <= 0) {
        // alert('Вы победили в конкурсе')
        // link.click()
        downloadDoc()
        
    }
}

let myInterval = setInterval( myTimer, 1000);

function downloadDoc () {
    let link = document.createElement('a')
    link.href = 'README.md'
    link.download = 'README.md'
    link.click()
}