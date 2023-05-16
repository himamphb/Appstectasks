let questionNumber = 0;
let score = 0;
let time;
let totalTime = 10;
let sec = totalTime;

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

function showQuixQuestion() {
  clearInterval(time);
  endTimer();
  time = setInterval(endTimer, 1000);
  document.querySelectorAll("input[name = opt]").forEach((option) => (option.checked = false));

  question_number.textContent = questionNumber + 1 + ".";
  quiz_question.textContent = quizQuestions[questionNumber].question;
  opt_1.textContent = quizQuestions[questionNumber].opt1;
  opt_2.textContent = quizQuestions[questionNumber].opt2;
  opt_3.textContent = quizQuestions[questionNumber].opt3;
  opt_4.textContent = quizQuestions[questionNumber].opt4;
}

function endTimer() {
  end_timer.textContent = sec;
  sec--;
  if (sec == 0) {
    sec = totalTime;
    clearInterval(time);
    questionNumber++;
    showQuixQuestion();
  }
}

next_btn.addEventListener("click", () => {
  let optionSelected = document.querySelector("input[name = opt]:checked");
  let correctOption = quizQuestions[questionNumber].correct;
  if (optionSelected.id != null) {
    if (optionSelected.id == correctOption) {
      score++;
    }
  }
  questionNumber++;
  if (questionNumber >= quizQuestions.length) {
    questionNumber = 0;
    Swal.fire(
        'Good job!',
        `you have scored ${score}`,
        'success'
      );
          clearInterval(endTimer);
  } else {
    showQuixQuestion();
  }
});


