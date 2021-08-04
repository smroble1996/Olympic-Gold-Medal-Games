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

    trackImage.src = data[3].image
    swimImage.src = data[4].image
    gymImage.src = data[5].image

   
   
    let trackButtonClicked = false
 
    trackButton.addEventListener('click', () => {
        trackButtonClicked = !trackButtonClicked
        if (trackButtonClicked) {
            trackSchedule.innerText = data[3].final
        }
        else {
            trackSchedule.innerText = "Gold Medal Game"

        }
    })


    let swimButtonClicked = false
 
    swimButton.addEventListener('click', () => {
        swimButtonClicked = !swimButtonClicked
        if (swimButtonClicked) {
            swimSchedule.innerText = data[4].final
        }
        else {
            swimSchedule.innerText = "Gold Medal Game"

        }
    })

    let gymButtonClicked = false
 
    gymButton.addEventListener('click', () => {
        gymButtonClicked = !gymButtonClicked
        if (gymButtonClicked) {
            gymSchedule.innerText = data[5].final
        }
        else {
            gymSchedule.innerText = "Gold Medal Game"

        }
    })



    

    //make an event listener that selects one of the countries,
    // and shows their medal count
    
 setTrackComments(data.comments)

}

function setTrackComments(comments){
    trackComments.innerHTML = ' '
    // comments.forEach(comment => addTrackComments(comment.name))
}


function addTrackComments (comment){
    const trackLi = document.createElement('li')
    trackLi.innerText = comment
    trackComments.append(trackLi)

}

    // trackCommentButton.addEventListener('submit', (e) =>{
    //     e.preventDefault();
    //     console.log(e.target[0].value)
    // })
    