const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')
const resultScore = document.getElementById('score')

let score = 0;


let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',()=> {
    currentQuestionIndex++
    setNextQuestion()
} )

function loadScore() {
    resultScore.textContent = `Вы набрали ${score} из ${questions.length}.`
    
}

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort( () => Math.random() - .5)
    currentQuestionIndex =0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    resultScore.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)
        
    }
}


function selectAnswer(element) {
    const selectedButton = element.target
    const correct = selectedButton.dataset.correct
    
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        
    })
    
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
       
        nextButton.classList.remove('hide')

    } else {
        score = score - questions.length
        loadScore()
        startButton.innerText = 'Заново'
        startButton.classList.remove('hide')
        resultScore.classList.remove('hide')
        score = 0
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
        score++
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Сколько элементов в периодической таблице Менделеева?',
        answers: [
            {text: '118', correct: true},
            {text: '121', correct: false},
            {text: '135', correct: false},
            {text: '107', correct: false}
        ]
    },
    {
        question: 'Сколько часовых поясов в России?',
        answers: [
            {text: '10', correct: false},
            {text: '11', correct: true},
            {text: '7', correct: false},
            {text: '13', correct: false}
        ]
    },
    {
        question: 'Кто был первым россиянином, удостоенным Нобелевской премии по литературе?',
        answers: [
            {text: 'И.А. Бунин', correct: true},
            {text: 'А.И. Солженицын', correct: false},
            {text: 'Л.Н. Толстой', correct: false},
            {text: 'А.Н. Толстой', correct: false}
        ]
    },
    {
        question: 'Какой самый большой остров в мире?',
        answers: [
            {text: 'Ирландия', correct: false},
            {text: 'Исландия', correct: false},
            {text: 'Грендландия', correct: true},
            {text: 'Мадагаскар', correct: false}
        ]
    },
    {
        question: 'Назовите самую длинную реку в мире?',
        answers: [
            {text: 'Миссисипи', correct: false},
            {text: 'Нигер', correct: false},
            {text: 'Амазонка', correct: false},
            {text: 'Нил', correct: true}
        ]
    },
    {
        question: 'В какой европейской стране между 1946 и 1949 годами шла гражданская война?',
        answers: [
            {text: 'Болгария', correct: false},
            {text: 'Греция', correct: true},
            {text: 'Нидерланды', correct: false},
            {text: 'Дания', correct: false}
        ]
    },
    {
        question: 'Сколько клавиш у классического пианино?',
        answers: [
            {text: '90', correct: false},
            {text: '70', correct: false},
            {text: '88', correct: true},
            {text: '94', correct: false}
        ]
    },
    {
        question: 'Какая страна является самой подверженной землетрясениям страной в мире?',
        answers: [
            {text: 'Япония', correct: true},
            {text: 'Тайвань', correct: false},
            {text: 'Корея', correct: false},
            {text: 'Малайзия', correct: false}
        ]
    }
]