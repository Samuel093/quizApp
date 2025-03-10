//step 1
const quizData = [
    {
      question: "What is the capital of France?",
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Lisbon",
      correct: "c"
    },
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
    },
    {
      question: "What does HTML stand for?",
      a: "HyperText Markup Language",
      b: "Hyper Trainer Machine Language",
      c: "Hyperlink Text Markup Language",
      d: "Hyperlink and Text Markup Language",
      correct: "a"
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "None of the above",
      correct: "b"
    }
  ];

  // console.log(quizData)

  //step 2
  let currentQuiz = 0
  let score = 0 

//   //step 3
  //select question
  const questionEl = document.getElementById('question')

  const answersEl = document.querySelectorAll('.answer')


  const answerA = document.getElementById('optionA')
  const answerB = document.getElementById('optionB')
  const answerC = document.getElementById('optionC')
  const answerD = document.getElementById('optionD')


  const submitBtn = document.getElementById('next-btn')


  const quiz = document.querySelector('.q-container')

  //step 4
  function loadQuiz(){
    deselectAnswer()

    const currentQuizQuestion = quizData[currentQuiz]
    // console.log(currentQuizQuestion)


    questionEl.innerText = currentQuizQuestion.question
    // console.log(questionEl.innerText)

    answerA.innerText = currentQuizQuestion.a
    answerB.innerText = currentQuizQuestion.b
    answerC.innerText = currentQuizQuestion.c
    answerD.innerText = currentQuizQuestion.d    
  }


  //step 5
  function deselectAnswer(){
    answersEl.forEach((answerEl) =>{
        answerEl.checked = false
    })
  }


  //step 6
  function getSelected(){
    let answer
    answersEl.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
  }



  //step 7
  const retakeBtn = document.getElementById('retake-btn')

  function resetQuiz(){
    loadQuiz()
    currentQuiz = new Array( currentQuizQuestion.question).fill(null);
    score = 0
    submitBtn.style.display = 'block'
  }

  //step 8
  submitBtn.addEventListener("click", ()=>{
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You scored ${score} of ${quizData.length} questions</h2>
            <button class="retake-btn onclick="resetQuiz()">Restart</button>
            `
        }
    }
  })



//   function resetQuiz() {
//     loadQuiz()
//     currentQuiz = 0
//     score = 0
//     submitBtn.style.display = 'block'
//     userAnswers = new Array( currentQuizQuestion.question).fill(null);
// }

  //step 9
  loadQuiz()



  // <button onclick="resetQuiz()">Restart</button>
  
  
  
