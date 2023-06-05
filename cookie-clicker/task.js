let cookie = document.getElementById('cookie')
let clicks = document.getElementById('clicker__counter')
let speed = document.getElementById('clicker__speed')
let counter = 0
let d1 = Date.now()

cookie.onclick = () => {
    let d2 = Date.now()
    speed.textContent = (1/((d2 - d1)/1000)).toFixed(2);
    d1 = d2
    counter++ 
    if (counter % 2) {
    cookie.width *= 1.5
    cookie.heigth *= 1.5
    } else {
        cookie.width /= 1.5
        cookie.heigth /= 1.5 
    }
    clicks.textContent = counter;
    
    
}

