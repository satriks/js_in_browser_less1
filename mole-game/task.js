let dead = document.getElementById('dead')
let lost = document.getElementById('lost')
let ind = [...Array(9).keys()].map(x => x + 1)

for (i of ind) {
    let el = document.getElementById(`hole${i}`)
        el.onclick = () => {
            if (el.className.includes('hole_has-mole')) {
                if (dead.textContent >= 9) {
                    alert('Ура победа!')
                    window.location.reload()
                }
                dead.textContent = Number(dead.textContent) + 1      
            } 
            else {
                if (lost.textContent >= 4) {
                alert('Увы не получилось, попробуйте еще !')
                window.location.reload()
                }
                lost.textContent = Number(lost.textContent) + 1
            }
              }
}