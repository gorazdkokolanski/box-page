const video = document.querySelector('video');
const clickableLink = document.querySelector('.clickable');
const otherC = document.querySelector(".play-clickable")

console.log(video);

let firstClicked = false

let clicked = false

clickableLink.addEventListener('click', (e) => {
    console.log('Anchor tag clicked!');
    if (!firstClicked) {
        e.preventDefault()
        video.play();
        otherC.remove()
        firstClicked = true
        return
    }
    if (!clicked) {
        video.pause();
        clicked = true
    }
    else {
        e.preventDefault()
        video.play();
        clicked = false
    }
});

// Optional: Log when the video ends (if needed)
video.addEventListener('ended', () => {
    console.log('Video ended:', video);
});
