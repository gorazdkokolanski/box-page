const video = document.querySelector('video');

console.log(video)

video.addEventListener('ended', () => {
    console.log(video)
    window.open("https://www.test.de/", "_blank");
});