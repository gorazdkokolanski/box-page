const video = document.querySelector('video');
const clickableLink = document.querySelector('.clickable');

console.log(video);

let clicked = false

// Pause the video when the link is clicked
clickableLink.addEventListener('click', (e) => {
    console.log('Anchor tag clicked!');
    if(!clicked){
        video.pause(); // Pause the video
        clicked = true
    }
    else{
        e.preventDefault()
        video.play(); // Pause the video
    }
});

// Optional: Log when the video ends (if needed)
video.addEventListener('ended', () => {
    console.log('Video ended:', video);
});
