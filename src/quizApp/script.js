const question = [
   {
      question: "What the fuck",
      answers: [
         {text: "Shark", correct: false},
         {text: "Fuc", correct: false},
         {text: "Lexipit", correct: true},
         {text: "Shark", correct: false},
      ]
   },
   {
      question: "What the fuck 2",
      answers: [
         {text: "Shark", correct: false},
         {text: "Fuc", correct: false},
         {text: "Lexipit", correct: true},
         {text: "Shark", correct: false},
      ]
   },
   {
      question: "Who is the creator of this quiz?",
      answers: [
         {text: "Lexipit", correct: true},
         {text: "GPT", correct: false},
         {text: "Shark", correct: false},
         {text: "Nobody", correct: false},
      ]
   },
   {
      question: "Which of the following is a fruit?",
      answers: [
         {text: "Car", correct: false},
         {text: "Banana", correct: true},
         {text: "Rock", correct: false},
         {text: "Chair", correct: false},
      ]
   }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
   currentQuestionIndex = 0;
   score = 0;
   nextButton.innerHTML = "Next";
   showQuestion();
}

function showQuestion(){
   resetState();
   let currentQuestion = question[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
         button.dataset.correct =  answer.correct;
      }
      button.addEventListener("click", selectAnswer);
   });
}

function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
   }
}

function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
   } else{
      selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
         button.classList.add("correct");
      }
      button.disabled = true;
   });
   nextButton.style.display = "block";
}
startQuiz();
