const scheduleTitle = document.getElementById('schedule-title')

const trackImage = document.getElementById('track-image')
const trackTitle = document.getElementById('track-title')
const trackSchedule = document.getElementById('track-schedule')
const trackButton = document.getElementById('track-button')
const trackComments= document.getElementById('track-comments')
const trackCommentForm = document.getElementById('track-comment-form')
const trackCommentButton = document.getElementById('track-comment-button')

const swimImage = document.getElementById('swim-image')
const swimTitle = document.getElementById('swim-title')
const swimSchedule = document.getElementById('swim-schedule')
const swimButton = document.getElementById('swim-button')
const swimComments= document.getElementById('swim-comments')
const swimCommentForm = document.getElementById('swim-comment-form')
const swimCommentButton = document.getElementById('swim-comment-button')

const gymImage = document.getElementById('gym-image')
const gymTitle = document.getElementById('gym-title')
const gymSchedule = document.getElementById('gym-schedule')
const gymButton = document.getElementById('gym-button')
const gymComments= document.getElementById('gym-comments')
const gymCommentForm = document.getElementById('gym-comment-form')
const gymCommentButton = document.getElementById('gym-comment-button')


fetch ("http://localhost:3000/teams")
.then(res => res.json())
.then(renderData)



function renderData(data){

    console.log(data)


    trackTitle.innerText = data[3].title
    swimTitle.innerText = data[4].title
    gymTitle.innerText = data[5].title

  


    //make schedule toggle between date and "gold medal game"
   
    trackButton.addEventListener('click', () => {
        trackSchedule.innerText = data[3].final
    })

    swimButton.addEventListener('click', () => {
        swimSchedule.innerText = data[4].final
    })

    gymButton.addEventListener('click', () => {
        gymSchedule.innerText = data[5].final
    })



    //make an event listener that selects one of the countries,
    // and shows their medal count
    
    trackCommentButton.addEventListener('submit', (e) =>{
        e.preventDefault();
    })
    


    //json the image files if possible 