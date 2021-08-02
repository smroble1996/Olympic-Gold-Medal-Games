const scheduleTitle = document.getElementById('schedule-title')
const scheduleButton = document.getElementById('schedule-button')
const schedule = document.getElementById('schedule')

fetch ("http://localhost:3000")
.then(res => res.json())
.then(renderData)


scheduleButton.addEventListener('click', () => {
    schedule.innerText = `August ${day} 2021`
})



function renderData(data){

    scheduleTitle.innerText = data.title





}