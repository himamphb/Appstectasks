let questionNumber = 0;
let score = 0;
let time;
let totalTime = 60;
let sec = totalTime;
let button = true;
let intervalTimer;
let intervalStarted = false;
let userAnswered = [];
let showAnswers = false;

let quizQuestions = [
  {
    question: "Which language runs in a web browser?",
    option1: "Java",
    option2: "C",
    option3: "Python",
    option4: "JavaScript",
    correct: "option4",
  },
  {
    question: "What does CSS stand for?",
    option1: "Central Style Sheets",
    option2: "Cascading Style Sheets",
    option3: "Cascading Simple Sheets",
    option4: "Cars SUVs Sailboats",
    correct: "option2",
  },
  {
    question: "What does HTML stand for?",
    option1: "Hypertext Markup Language",
    option2: "Hypertext Markdown Language",
    option3: "Hyperloop Machine Language",
    option4: "Helicopters Terminals Motorboats Lamborginis",
    correct: "option1",
  },
  {
    question: "What year was JavaScript launched?",
    option1: "1996",
    option2: "1995",
    option3: "1994",
    option4: "none of the above",
    correct: "option2",
  },
  {
    question: "Which is not considered as a JavaScript library?",
    option1: "React",
    option2: "Angular",
    option3: "Vue",
    option4: "none of the above",
    correct: "option4",
  },
];

let question_number = document.getElementById("question-number");
let quiz_question = document.getElementById("question-content");
let opt_1 = document.getElementById("opt1");
let opt_2 = document.getElementById("opt2");
let opt_3 = document.getElementById("opt3");
let opt_4 = document.getElementById("opt4");
let next_btn = document.getElementById("next-button");
let end_timer = document.getElementById("timer");
let scoreBoard = document.getElementById("scoreId");
let submitBtn = document.getElementById("submit-button");



function endTimer() {
  
  sec--;
  end_timer.textContent = sec;
  if (sec == 0) {
    end_timer.textContent = sec;
    clearInterval(intervalTimer);
   
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have exceeded the time limit!",
    });
  }
}

function showQuixQuestion() {
  
  document.querySelector(".container").style.display = "flex";
  if(button){
    next_btn.style.display = "block";
  }else{
    next_btn.style.display = "noone";
  }
  if (!intervalStarted) {
    intervalTimer = setInterval(endTimer, 1000);
    intervalStarted = true;
  }

  document
    .querySelectorAll("input[name = opt]")
    .forEach((option) => (option.checked = false));

 if(!showAnswers){
  question_number.textContent = questionNumber + 1 + ".";
  quiz_question.textContent = quizQuestions[questionNumber].question;
  opt_1.textContent = quizQuestions[questionNumber].option1;
  opt_2.textContent = quizQuestions[questionNumber].option2;
  opt_3.textContent = quizQuestions[questionNumber].option3;
  opt_4.textContent = quizQuestions[questionNumber].option4;
 }
  
}

next_btn.addEventListener("click", () => {
  let optionSelected = document.querySelector("input[name = opt]:checked");
  let correctOption = quizQuestions[questionNumber].correct;
  console.log(optionSelected.id);
  console.log(correctOption);
    if (optionSelected.id == correctOption) {
      console.log("work");
      
      score++;
      userAnswered.push(optionSelected.id);
    }
  
  if (questionNumber == quizQuestions.length - 1) {
    questionNumber = 0;
    clearInterval(intervalTimer);
    next_btn.style.display = "none";
    submitBtn.style.display = "block";
  } else {
    questionNumber++;
    showQuixQuestion();
    submitBtn.style.display = "none";
  }
});

submitBtn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".answers-container").style.display = "block";
  document.getElementById("scoreCard").textContent = `You have scored in the test ${score} !!`
});

function showAnswersBtn(){
  document.querySelector(".answers-container").style.display = "none";
   questionNumber = 0;
   showAnswers = true;
   intervalStarted = false;

   showQuixQuestion();
  //  opt_1.disabled = true;
  //  opt_2.disabled = true;
  //  opt_3.disabled = true;
  //  opt_4.disabled = true;
}

function resetBtn(){
  location.reload();
}




// let question_number2 = document.getElementById("question-number2");
// let quiz_question2 = document.getElementById("question-content2");
// let optt_1 = document.getElementById("opttion1");
// let optt_2 = document.getElementById("opttion2");
// let optt_3 = document.getElementById("opttion3");
// let optt_4 = document.getElementById("opttion4");
// let next_bttn = document.getElementById("next-buttton");

// questionNumber = 0;
// document.querySelector(".answers-container").style.display = "none";
// document.querySelector(".childContainer").style.display = "block";
// document.querySelector(".childContainer").style.display = "flex";
// next_bttn.style.display = "block";
// showAnswers = true;

// document
//   .querySelectorAll("input[name = optt]")
//   .forEach((option) => (option.checked = false));

//   question_number2.textContent = questionNumber + 1 + ".";
//   quiz_question2.textContent = quizQuestions[questionNumber].question;
//   optt_1.textContent = quizQuestions[questionNumber].opt1;
//   optt_2.textContent = quizQuestions[questionNumber].opt2;
//   optt_3.textContent = quizQuestions[questionNumber].opt3;
//   optt_4.textContent = quizQuestions[questionNumber].opt4;
//   document.getElementById("")

