const question = [
   {
      question: "Con vật nào nổi tiếng là vua của muôn loài?",
      answers: [
         {text: "Hổ", correct: false},
         {text: "Sư tử", correct: true},
         {text: "Chó", correct: false},
         {text: "Gấu", correct: false},
      ]
   },
   {
      question: "Trái cây nào nổi tiếng với nhiều vitamin C?",
      answers: [
         {text: "Chuối", correct: false},
         {text: "Táo", correct: false},
         {text: "Cam", correct: true},
         {text: "Nho", correct: false},
      ]
   },
   {
      question: "Thành phố nào được mệnh danh là 'Thành phố tình yêu'?",
      answers: [
         {text: "New York", correct: false},
         {text: "Paris", correct: true},
         {text: "Tokyo", correct: false},
         {text: "London", correct: false},
      ]
   },
   {
      question: "Loài vật nào biết bay?",
      answers: [
         {text: "Cá voi", correct: false},
         {text: "Chim bồ câu", correct: true},
         {text: "Hổ", correct: false},
         {text: "Sư tử", correct: false},
      ]
   },
   {
      question: "Quốc gia nào nổi tiếng với món sushi?",
      answers: [
         {text: "Hàn Quốc", correct: false},
         {text: "Trung Quốc", correct: false},
         {text: "Nhật Bản", correct: true},
         {text: "Thái Lan", correct: false},
      ]
   },
   {
      question: "Thứ gì luôn mọc sau cơn mưa và có nhiều màu sắc?",
      answers: [
         {text: "Cầu vồng", correct: true},
         {text: "Mặt trời", correct: false},
         {text: "Gió", correct: false},
         {text: "Mây đen", correct: false},
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

function showScore(){
   resetState();
   questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
   nextButton.innerHTML = "Play again";
   nextButton.style.display = "block";
}

function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex < question.length){
      showQuestion();
   } else{
      showScore();
   }
}

nextButton.addEventListener("click", () =>{
   if(currentQuestionIndex < question.length){
      handleNextButton();
   } else{
      startQuiz();
   }
});
startQuiz();
