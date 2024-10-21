const video = document.querySelector('video');

console.log(video)

video.addEventListener('ended', () => {
    console.log(video)
    window.location.href = "https://www.test.de/"
});