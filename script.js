const question = 
    [{
        qns:"Something",
        options:
        [
            {text:'ans',correct:false},
            {text:'ans',correct:false},
            {text:'ans',correct:true},
            {text:'ans',correct:false},
        ]
        
    }]


const quizQuestion = document.querySelector('#question')
const btns = document.querySelectorAll('.btns')
const score = document.querySelector('#score')
let scr = 0
score.innerHTML = `${scr}/${question.length}`

for (let i = 0; i < btns.length; i++) {
    btns[i].innerHTML = question[0].options[i].text
}

console.log(question[0].options[0]);
quizQuestion.innerHTML = question[0].qns

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',(event)=>{
        if(question[0].options[i].correct){
            console.log('correct');
            scr++
            btns[i].style.backgroundColor = '#77DD76'
            score.innerHTML = `${scr}/${question.length}`
        }else{
            btns[i].style.backgroundColor = '#FF6962'
            for (let j = 0; j < btns.length; j++) {
                btns[j].disabled = true
                btns[j].style.cursor = 'not-allowed'
            }
            console.log('wrong');
        }
    })
    
}
