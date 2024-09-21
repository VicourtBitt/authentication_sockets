document.addEventListener('DOMContentLoaded', () => {
    const publicBtn = document.getElementById('public')
    let count = 0
    publicBtn.addEventListener('click', () => {
        const counter = document.getElementById('count')
        count++
        counter.innerText = `Number: ${count}`
    })
})