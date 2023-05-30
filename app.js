
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
const inputW = document.querySelector('.input-w')
const inputH = document.querySelector('.input-h')
const btnSize = document.querySelector('.btn-size')
const card = document.querySelector('.card')
const frontCard = document.querySelector('.front')


let intervalId
// btnGenerator.addEventListener('click', generateCard)
btnGenerator.addEventListener('click', startCardGeneration);
btnGenerator.addEventListener('click', playMusic);
btnStopInterval.addEventListener('click', stopMusic);

function playMusic(){
    audio.play()
}

function stopMusic(){
    audio.pause()
}

function startCardGeneration() {
    setTimeout(() => {
        intervalId = setInterval(generateCard, 800);
      }, 4000);
    btnGenerator.removeEventListener('click', startCardGeneration); 
    btnStopInterval.addEventListener('click', stopCardGeneration);
    
}

function stopCardGeneration() {
    clearInterval(intervalId);
    btnGenerator.addEventListener('click', startCardGeneration);
    btnStopInterval.removeEventListener('click', stopCardGeneration);
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
    frontCard.style.backgroundColor = colorGenerator();
}

function adjustSize() {
    let userInputW = inputW.value;
    let userInputH = inputH.value;
  
    let minWidth = 100;
    let maxWidth = 1000;
    let minHeight = 100;
    let maxHeight = 800;
  
    if (userInputW < minWidth) {
      userInputW = minWidth;
    } else if (userInputW > maxWidth) {
      userInputW = maxWidth;
    }
  
    if (userInputH < minHeight) {
      userInputH = minHeight;
    } else if (userInputH > maxHeight) {
      userInputH = maxHeight;
    }
  
    card.style.width = userInputW + 'px';
    card.style.height = userInputH + 'px';
  }

  function changeSize() {
    inputW.addEventListener('change', adjustSize);
    inputH.addEventListener('change', adjustSize);
  }
btnSize.addEventListener('click', changeSize);


function colorGenerator(){
    let colorLetters = '0123456789abcdef';
    let color = '#';

    for(let i = 0; i < 6; i++){
        color += colorLetters[Math.floor(Math.random() * 16)]
    }
    return color
}

