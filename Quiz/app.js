const questions=[
    {
        question:" ISP stands for:",
        answers:[ {text:" Internet Survey Period", correct:false},
                  {text:"Integrated Service Provider" ,correct:false},
                  {text:"Internet Security Protocol" ,correct:false},
                  {text:" Internet Service Provider" ,correct:true}
        ],
        
    },
    {
    question:" Which is the largest animal in aquatic water",
        answers:[ {text:"blue whale", correct:true},
                  {text:"golden fish" ,correct:false},
                  {text:"tiger" ,correct:false},
                  {text:" deer" ,correct:false}
        ]
    },
    {
        question:"In what-respect-are-supercomputers-different-from-other-computers ",
            answers:[ {text:" very high price", correct:false},
                      {text:"air conditioning problem" ,correct:false},
                      {text:"Calculation capacity and large memory storage" ,correct:true},
                      {text:" Multiple uses" ,correct:false}
            ]
        },
        {
            question:" which-method-is-used-in-modern-digital-computer",
                answers:[ {text:" Binary numeral system", correct:true},
                          {text:"analog calculation method" ,correct:false},
                          {text:"Decimal Number System" ,correct:false},
                          {text:"none of these" ,correct:false}
                ]
            },
            {
                question:"  A nibble is equal to bits.",
                    answers:[ {text:" 4", correct:true},
                              {text:"8" ,correct:false},
                              {text:"32" ,correct:false},
                              {text:"16" ,correct:false}
                    ]
                },
            
];
const questionElement = document.querySelector("#question")
const answerButtons = document.querySelector("#ansBtn");
const nextButton = document.querySelector("#nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function start_quiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    show_questions(); // display the questions.
}

function show_questions(){
    change_state();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML =`${ questionNo} . ${ currentQuestion.question}`;

  // Adding answers -->
  currentQuestion.answers.forEach((el)=>{
      const button = document.createElement("button");
      button.innerHTML = el.text; // el tarversing the question array.
      button.classList.add("btn");
      answerButtons.appendChild(button);

      // checking answers-->
      if(el.correct)
      {
        button.dataset.correct = el.correct;
      }
      answerButtons.addEventListener("click",select_Answer);

  });
}
 //removing the button exists in the start of website-->
function change_state(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function select_Answer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((btn)=>{
       if(btn.dataset.correct === "true"){
         btn.classList.add("correct");
          score;
       }
       btn.disabled = "true";
    });
    nextButton.style.display = "block";
}

function show_Score(){
    change_state();
    // if(score < (questions.length/2)){
    // questionElement.innerHTML = `You have score ${score} out of ${questions.length}`;
    // }
    // else{
    // nextButton.innerHTML = "Start quiz"
    // }
    questionElement.innerHTML = `You have score ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Start quiz"
    nextButton.style.display = "block";
}

function  handle_NextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        show_questions();
    }
     else{
        show_Score();
     }
}


nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length)
  {
    handle_NextButton();
  }
  else{
     start_quiz();
  }
});

start_quiz();
