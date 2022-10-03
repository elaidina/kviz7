const quizData = [
    {
        question: "Hrušky jsou velká auta.",
        a: "pravda",
        b: "lež",
        
        correct: "b",
    },
    {
      question: "V bance se peče chleba.",
      a: "pravda",
      b: "lež",
      
      correct: "b",
  },
  {
    question: "Panenky umí mluvit.",
    a: "pravda",
    b: "lež",
    
    correct: "b",
},
{
  question: "Zelená na semaforu znamená, že můžeme jít.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},{
  question: "Včely sbírají pyl a dělají z něj marmeládu.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "Hříbátko je mládětem pejska.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "Broskev je chutná zelenina.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "Bambi byl malý koloušek.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Zmrzlina se dělá z křídy.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "Lepísí páska se používá na slepování papíru.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Voda se vypařuje a mění se na páru.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Zem se otáčí kolem slunce.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Mangnet přitahuje železné předměty.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Lidé potřebují kyslík na dýchání.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Pták se líhne z vajíčka.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Všechny děti se učí počítat.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Klavír je hudevní nástroj.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Knížky se vyrábí z kakaa.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "Leden je první měsíc v roku.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Listy padají ze stromů.",
a: "pravda",
b: "lež",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })