let questionNumber = 0;
let score = 0;
let time;
let totalTime = 60;
let sec = totalTime;
let intervalTimer;
let intervalStarted = false;
let userAnswered = [];

let quizQuestions = [
  {
    question: "Which language runs in a web browser?",
    opt1: "Java",
    opt2: "C",
    opt3: "Python",
    opt4: "JavaScript",
    correct: "opt4",
  },
  {
    question: "What does CSS stand for?",
    opt1: "Central Style Sheets",
    opt2: "Cascading Style Sheets",
    opt3: "Cascading Simple Sheets",
    opt4: "Cars SUVs Sailboats",
    correct: "opt2",
  },
  {
    question: "What does HTML stand for?",
    opt1: "Hypertext Markup Language",
    opt2: "Hypertext Markdown Language",
    opt3: "Hyperloop Machine Language",
    opt4: "Helicopters Terminals Motorboats Lamborginis",
    correct: "opt1",
  },
  {
    question: "What year was JavaScript launched?",
    opt1: "1996",
    opt2: "1995",
    opt3: "1994",
    opt4: "none of the above",
    correct: "opt2",
  },
  {
    question: "Which is not considered as a JavaScript library?",
    opt1: "React",
    opt2: "Angular",
    opt3: "Vue",
    opt4: "none of the above",
    correct: "opt4",
  },
];

let question_number = document.getElementById("question-number");
let quiz_question = document.getElementById("question-content");
let opt_1 = document.getElementById("option1");
let opt_2 = document.getElementById("option2");
let opt_3 = document.getElementById("option3");
let opt_4 = document.getElementById("option4");
let next_btn = document.getElementById("next-button");
let end_timer = document.getElementById("timer");
let scoreBoard = document.getElementById("scoreId");
let submitBtn = document.getElementById("submit-button");

let question_number2 = document.getElementById("question-number2");
let quiz_question2 = document.getElementById("question-content2");
let optt_1 = document.getElementById("opttion1");
let optt_2 = document.getElementById("opttion2");
let optt_3 = document.getElementById("opttion3");
let optt_4 = document.getElementById("opttion4");
let next_bttn = document.getElementById("next-buttton");

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
  next_btn.style.display = "block";
  if (!intervalStarted) {
    intervalTimer = setInterval(endTimer, 1000);
    intervalStarted = true;
  }

  document
    .querySelectorAll("input[name = opt]")
    .forEach((option) => (option.checked = false));

  question_number.textContent = questionNumber + 1 + ".";
  quiz_question.textContent = quizQuestions[questionNumber].question;
  opt_1.textContent = quizQuestions[questionNumber].opt1;
  opt_2.textContent = quizQuestions[questionNumber].opt2;
  opt_3.textContent = quizQuestions[questionNumber].opt3;
  opt_4.textContent = quizQuestions[questionNumber].opt4;
}

next_btn.addEventListener("click", () => {
  let optionSelected = document.querySelector("input[name = opt]:checked");
  let correctOption = quizQuestions[questionNumber].correct;
  if (optionSelected.id != null) {
    if (optionSelected.id == correctOption) {
      userAnswered.push(optionSelected.id)
      score++;
    }
  
  }
  console.log(userAnswered);

  if (questionNumber == quizQuestions.length - 1) {
    questionNumber = 0;
    clearInterval(intervalTimer);
    next_btn.style.display = "none";
    submitBtn.style.display = "block";
  } else {
    questionNumber++;
    showQuixQuestion();
  }
});
submitBtn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".answers-container").style.display = "block";
  document.getElementById("scoreCard").textContent = `You have scored in the test ${score} !!`
});

function showAnswersBtn(){
  questionNumber = 0;
  document.querySelector(".answers-container").style.display = "none";
  document.querySelector(".childContainer").style.display = "block";
  document.querySelector(".childContainer").style.display = "flex";
  next_bttn.style.display = "block";
  document
    .querySelectorAll("input[name = optt]")
    .forEach((option) => (option.checked = false));
 
    question_number2.textContent = questionNumber + 1 + ".";
    quiz_question2.textContent = quizQuestions[questionNumber].question;
    optt_1.textContent = quizQuestions[questionNumber].opt1;
    optt_2.textContent = quizQuestions[questionNumber].opt2;
    optt_3.textContent = quizQuestions[questionNumber].opt3;
    optt_4.textContent = quizQuestions[questionNumber].opt4;
}

next_bttn.addEventListener(
  "click", () => {
    let correctQuizOption = quizQuestions[questionNumber].correct;
    
    if (userAnswered[questionNumber] === correctQuizOption) {
      let val = userAnswered[questionNumber]
      console.log(val);
      document.getElementById(val).style.background = "#00ff00";
  }else {
    document.getElementById(val).style.background = "#ff0000";
  }
}
)

function resetBtn(){
  location.reload();
}
