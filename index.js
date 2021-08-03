const scheduleTitle = document.getElementById('schedule-title')
const scheduleButton = document.getElementById('schedule-button')
const finalSchedule = document.getElementById('final-schedule')
const trackTitle = document.getElementById('track-title')
const swimTitle = document.getElementById('swim-title')
const gymTitle = document.getElementById('gym-title')
const trackImage = document.getElementById('track-image')
const swimImage = document.getElementById('swim-image')
const gymImage = document.getElementById('gym-image')
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

    trackTitle.innerText = data[3].title
    swimTitle.innerText = data[4].title
    // gymTitle.innerText = data[5].title


console.log(data)
}

function renderSchedule(day){
    finalSchedule.innerText = `August ${day} 2021`
}