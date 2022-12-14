// added script to play audio for each img by referencing the class and playing the corresponding mp3 array
// added variables that references the classes in the html file
let search = document.querySelector('.search');
let online = document.querySelector('.online');
let social = document.querySelector('.social');
let lead = document.querySelector('.lead');
let brand = document.querySelector('.brand');
let cost = document.querySelector('.cost');
let audioArr = document.getElementsByTagName('audio');
// added controls to mouse over the image and plays an audio based on a array organized by whatever it comes into contact first in the html file
console.log(audioArr);
search.addEventListener('mouseenter', () => {
    audioArr[0].play()
});
// added script where it will add an event when the mouse leaves the image it will first pause then return to the beginning of the audio
search.addEventListener('mouseleave', () => {
    audioArr[0].pause()
    audioArr[0].currentTime = 0
});
online.addEventListener('mouseenter', () => {
    audioArr[1].play()
});
online.addEventListener('mouseleave', () => {
    audioArr[1].pause()
    audioArr[1].currentTime = 0
});
social.addEventListener('mouseenter', () => {
    audioArr[2].play()
});
social.addEventListener('mouseleave', () => {
    audioArr[2].pause()
    audioArr[2].currentTime = 0
});
lead.addEventListener('mouseenter', () => {
    audioArr[3].play()
});
lead.addEventListener('mouseleave', () => {
    audioArr[3].pause()
    audioArr[3].currentTime = 0
});
brand.addEventListener('mouseenter', () => {
    audioArr[4].play()
});
brand.addEventListener('mouseleave', () => {
    audioArr[4].pause()
    audioArr[4].currentTime = 0
});
cost.addEventListener('mouseenter', () => {
    audioArr[5].play()
});
cost.addEventListener('mouseleave', () => {
    audioArr[5].pause()
    audioArr[5].currentTime = 0
});