const video = document.querySelector('video');
const clickableLink = document.querySelector('.clickable');
const otherC = document.querySelector(".play-clickable")

console.log(video);


otherC.addEventListener('click', (e) => {
    video.play(); // Pause the video
    otherC.remove()
});

let clicked = false

// Pause the video when the link is clicked
clickableLink.addEventListener('click', (e) => {
    console.log('Anchor tag clicked!');
    if (!clicked) {
        video.pause(); // Pause the video
        clicked = true
    }
    else {
        e.preventDefault()
        video.play(); // Pause the video
        clicked = false
    }
});

// Optional: Log when the video ends (if needed)
video.addEventListener('ended', () => {
    console.log('Video ended:', video);
});
