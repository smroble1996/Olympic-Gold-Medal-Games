
const trackComments= document.getElementById('track-comments')
const trackCommentForm = document.getElementById('track-comment-form')
const trackCommentButton = document.getElementById('track-comment-button')

const swimComments= document.getElementById('swim-comments')
const swimCommentForm = document.getElementById('swim-comment-form')
const swimCommentButton = document.getElementById('swim-comment-button')

const gymComments= document.getElementById('gym-comments')
const gymCommentForm = document.getElementById('gym-comment-form')
const gymCommentButton = document.getElementById('gym-comment-button')




fetch ("http://localhost:3000/info")
.then(res => res.json())
.then(renderData)

function renderData(data){

const trackImage = document.getElementById('track-image')
const trackTitle = document.getElementById('track-title')
const swimImage = document.getElementById('swim-image')
const swimTitle = document.getElementById('swim-title')
const gymImage = document.getElementById('gym-image')
const gymTitle = document.getElementById('gym-title')


trackTitle.innerText = data.events[0].title
swimTitle.innerText = data.events[1].title
gymTitle.innerText = data.events[2].title
trackImage.src = data.event_images[0].image
swimImage.src = data.event_images[1].image
gymImage.src = data.event_images[2].image

const trackSchedule = document.getElementById('track-schedule')
const trackButton = document.getElementById('track-button')
let trackButtonClicked = false
 
trackButton.addEventListener('click', () => {
    trackButtonClicked = !trackButtonClicked
    if (trackButtonClicked) {
        trackSchedule.innerText = data.final_date[0].final
    }
    else {
        trackSchedule.innerText = "Gold Medal Game"
    }
})

const swimSchedule = document.getElementById('swim-schedule')
const swimButton = document.getElementById('swim-button')
let swimButtonClicked = false
 
swimButton.addEventListener('click', () => {
    swimButtonClicked = !swimButtonClicked
    if (swimButtonClicked) {
        swimSchedule.innerText = data.final_date[1].final
    }
    else {
        swimSchedule.innerText = "Gold Medal Game"
    }
})

const gymSchedule = document.getElementById('gym-schedule')
const gymButton = document.getElementById('gym-button')
let gymButtonClicked = false
 
gymButton.addEventListener('click', () => {
    gymButtonClicked = !gymButtonClicked
    if (gymButtonClicked) {
        gymSchedule.innerText = data.final_date[2].final
    }
    else {
        gymSchedule.innerText = "Gold Medal Game"
    }
})

 setTrackComments(data.track_medals)
 setSwimComments(data.swim_medals)
 setGymComments(data.gym_medals)

// }

function setTrackComments(comments){
    comments.map(e => e.name).forEach(addTrackComments)
    // comments.forEach(comment => addTrackComments(comment.name))
}

function addTrackComments (comment){
    const trackLi = document.createElement('li')
    trackLi.innerText = comment
    trackComments.append(trackLi)
}

trackCommentForm.addEventListener('submit', (e) =>{
     e.preventDefault();
    addTrackComments(e.target.comment.value)
    e.target.comment.value =' '
    
})

function setSwimComments(comments){
    // comments.forEach(comment => addSwimComments(comment.name))
    comments.map(e => e.name).forEach(addSwimComments)
}
    
function addSwimComments (comment){
    const swimLi = document.createElement('li')
    swimLi.innerText = comment
    swimComments.append(swimLi)
}
    
swimCommentForm.addEventListener('submit', (e) =>{
      e.preventDefault();
      addSwimComments(e.target.comment.value)
      e.target.comment.value = ' '
})

function setGymComments(comments){
    // comments.forEach(comment => addGymComments(comment.name))
    comments.map(e => e.name).forEach(addGymComments)

}

function addGymComments (comment){
    const gymLi = document.createElement('li')
    gymLi.innerText = comment
    gymComments.append(gymLi)
}

gymCommentForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    addGymComments(e.target.comment.value)
    e.target.comment.value = ' '
    })




//combine event listeners/functions to consolidate
//add another method? 
}