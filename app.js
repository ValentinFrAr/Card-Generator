
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'K', 'Q', 'J', 'A']
let icons = [
    {key: '♦', color: 'red'},
    {key: '♥', color: 'red'},
    {key: '♠', color: 'black'},
    {key: '♣', color: 'black'}
] 
    
const allIcons = document.querySelectorAll('.icons');
const cardValue = document.querySelectorAll('.number')
const btnGenerator = document.querySelector('.generate')
let btnStopInterval = document.querySelector('.btn-stop')
const audio = document.querySelector('audio')

function playMusic(){
audio.play()
}

function stopMusic(){
    audio.pause()
}

let intervalId
// btnGenerator.addEventListener('click', generateCard)
btnGenerator.addEventListener('click', startCardGeneration);
btnGenerator.addEventListener('click', playMusic);
btnStopInterval.addEventListener('click', stopMusic);

function startCardGeneration() {
    intervalId = setInterval(generateCard, 1000); 
    btnGenerator.removeEventListener('click', startCardGeneration); 
    btnStopInterval.addEventListener('click', stopCardGeneration);
    
}

function stopCardGeneration() {
    clearInterval(intervalId); 
    btnGenerator.addEventListener('click', startCardGeneration); 
    btnStopInterval.addEventListener('click', stopCardGeneration);
}


function generateCard (){
    let randomNum = numbers[Math.floor(Math.random() * numbers.length)]
    let randomIcon = icons[Math.floor(Math.random() * icons.length)]

    // iconTop.innerHTML = randomIcon.key
    // iconBottom.innerHTML = randomIcon.key
    // iconTop.style.color = randomIcon.color
    // iconBottom.style.color = randomIcon.color
    // cardValue.innerHTML = randomNum

    allIcons.forEach(icon => {
        icon.innerHTML = randomIcon.key;
        icon.style.color = randomIcon.color;
    });
    cardValue.forEach(value => {
        value.innerHTML = randomNum;
    });
}




