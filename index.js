const scheduleTitle = document.getElementById('schedule-title')
const scheduleButton = document.getElementById('schedule-button')
const finalSchedule = document.getElementById('final-schedule')
const sportTitle = document.getElementById('sport-title')
const sportImage = document.getElementById('sport-image')
const commentForm = document.getElementById('commentForm')
const commentButton = document.getElementById('commentButton')

fetch ("http://localhost:3000/teams")
.then(res => res.json())
.then(renderData)


scheduleButton.addEventListener('click', () => {
    renderSchedule()
})

// commentButton.addEventListener('submit', (e) =>{
//     e.preventDefault()
// })



function renderData(data){

    sportTitle.innerText = data[3].title


}

function renderSchedule(day){
    finalSchedule.innerText = `August ${day} 2021`
}