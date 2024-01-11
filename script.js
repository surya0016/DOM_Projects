const questions = 
[
    {
      question: "What is the capital of France?",
      options: [
        {text: "Berlin", correct: false},
        {text: "Madrid", correct: false},
        {text: "Paris", correct: true},
        {text: "Rome", correct: false}
      ]
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: [
        {text: "Venus", correct: false},
        {text: "Mars", correct: true},
        {text: "Jupiter", correct: false},
        {text: "Saturn", correct: false}
      ]
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        {text: "Charles Dickens", correct: false},
        {text: "William Shakespeare", correct: true},
        {text: "Jane Austen", correct: false},
        {text: "Emily Brontë", correct: false}
      ]
    },
    {
      question: "What is the chemical symbol for gold?",
      options: [
        {text: "Au", correct: true},
        {text: "Ag", correct: false},
        {text: "Fe", correct: false},
        {text: "Hg", correct: false}
      ]
    },
    {
      question: "In which year did the Titanic sink?",
      options: [
        {text: "1905", correct: false},
        {text: "1912", correct: true},
        {text: "1920", correct: false},
        {text: "1931", correct: false}
      ]
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: [
        {text: "China", correct: false},
        {text: "Japan", correct: true},
        {text: "South Korea", correct: false},
        {text: "Thailand", correct: false}
      ]
    },
    {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      options: [
        {text: "Harper Lee", correct: true},
        {text: "J.K. Rowling", correct: false},
        {text: "George Orwell", correct: false},
        {text: "Ernest Hemingway", correct: false}
      ]
    },
    {
      question: "What is the largest mammal on Earth?",
      options: [
        {text: "Elephant", correct: false},
        {text: "Blue Whale", correct: true},
        {text: "Giraffe", correct: false},
        {text: "Gorilla", correct: false}
      ]
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: [
        {text: "Oxygen", correct: true},
        {text: "Osmium", correct: false},
        {text: "Gold", correct: false},
        {text: "Ozone", correct: false}
      ]
    },
    {
      question: "What is the powerhouse of the cell?",
      options: [
        {text: "Nucleus", correct: false},
        {text: "Mitochondria", correct: true},
        {text: "Endoplasmic reticulum", correct: false},
        {text: "Golgi apparatus", correct: false}
      ]
    }
   
  ]

const scores = document.querySelector('#score')


const quizQuestion = document.querySelector('#question')
const ansbtn = document.querySelector('.optBtn')
const nextBtn = document.querySelector('#next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1
    quizQuestion.innerHTML = questionNum+'. '+currentQuestion.question;

    currentQuestion.options.forEach(opt => {
        const button = document.createElement('button');
        button.innerHTML = opt.text;
        button.classList.add('btns');
        ansbtn.appendChild(button)
        if (opt.correct) {
            button.dataset.correct = opt.correct
        }
        button.addEventListener('click',selectAnswer)
    });
}

function resetState(){
    nextBtn.style.display = 'none';
    while (ansbtn.firstChild) {
        ansbtn.removeChild(ansbtn.firstChild)
    }
}

function selectAnswer(e){
    console.log("clicked");
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        console.log('click');
        selectedBtn.style.backgroundColor = '#77DD76'
        score++
        scores.innerHTML = `${score}/${questions.length}`
    }else{
        selectedBtn.style.backgroundColor = '#FF6962'
    }
    // console.log(Array.from(ansbtn.children));
    Array.from(ansbtn.children).forEach(btn => {
        if (btn.dataset.correct==='true') {
            btn.style.backgroundColor = '#77DD76'
        }
        btn.disabled = true;
        if (btn.disabled) {
            btn.style.color = 'black'
        }
    })
    nextBtn.style.display = 'block'
}

function showScore(){
    resetState()
    quizQuestion.innerHTML = `Your Scored is ${score}/${questions.length}`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
    
}

function nextButton(){
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }else{
        showScore()
    }
}

nextBtn.addEventListener('click',()=>{
    if (currentQuestionIndex < questions.length) {
        nextButton()
    }else{
        startQuiz()
    }
})
scores.innerHTML = `${score}/${questions.length}`
startQuiz()



