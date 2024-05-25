
let currentYear = new Date().getFullYear()
let errSound = new Audio('error.mp3')
let correctSound = new Audio('wrong-answer.mp3')

const KindAge = () =>{
    let year = document.getElementById('inputNumber').value
    let correct = document.getElementById('correct')
    let error = document.getElementById('error')
    year = parseInt(year)
    // console.log(year)

    if(Number.isNaN(year)){
        error.style.display='block'
        correct.style.display='none'
        error.style.color='red'
        error.style.fontSize='30px'
        error.style.fontWeight='bold'
        errSound.play()
    }
    else{
        let res = currentYear - year
        correct.innerHTML = 'Сиздин жашыныз:'+ res
        correct.style.display='block'
        error.style.display='none'
        correct.style.color='green'
        correct.style.fontSize='30px'
        correct.style.fontWeight='bold'
        correctSound.play()
    }
}

// parseInt - Стринг болуп келе жаткан маалыматты Numberге айланат