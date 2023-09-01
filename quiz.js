
const questions = [

{
q: "Was ist das ?",
answers:[
{text: "aa1"},
{text: "bb2"},
{text: "cc2"},
{text: "dd4"},
]
},

{
q: "asdasd",
answers:[
{text: "asdasd"},
{text: "asdasd"},
{text: "asdasd"},
{text: "asdasd"},
]
},

{
q: "Question Number 3",
answers:[
{text: "Answer 1"},
{text: "Answer 2"},
{text: "Answer 3"},
{text: "Answer 4"},
]
},

{
q: "Question Number 4",
answers:[
{text: "Answer 1"},
{text: "Answer 2"},
{text: "Answer 3"},
{text: "Answer 4"},
]
}
]


const questionContainer = document.getElementById("question");
const answerContainer = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");



let currentQuestionIndex = 0;

function startQuiz(){
showQuestion();
}

function moveToNextQuestion(){
removePrevButtons();
currentQuestionIndex += 1;
showQuestion();
}

function removePrevButtons(){
console.log(answerContainer.remove(children))
} ///////////


function showQuestion(){
let currentQuestion = questions[currentQuestionIndex].q
let currentAnswers =  questions[currentQuestionIndex].answers

questionContainer.innerHTML = currentQuestion;

currentAnswers.forEach(answers => {
const button = document.createElement("button");
button.innerHTML = answers.text;
button.classList.add("btn");
answerContainer.appendChild(button);
button.addEventListener("click", moveToNextQuestion)
})

}





function selectAnswer(btn){
console.log(btn.target.innerHTML);
}

startQuiz();
