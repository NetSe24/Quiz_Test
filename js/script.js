const questionsData = [
    {
        title: "Who is the beautifullest?",
        choiceA: "Srey Pok",
        choiceB: "Srey Da",
        choiceC: "Srey Noeurn",
        choiceD: "Srey Koy",
        correct: "a",
    },
    {
        title: "Who is the headsomest?",
        choiceA: "Net",
        choiceB: "Not",
        choiceC: "Noy",
        choiceD: "No",
        correct: "a",
    },
    {
        title: "Who is the eatest ?",
        choiceA: "Reak",
        choiceB: "Cheat",
        choiceC: "Cheatra",
        choiceD: "Srey Mom",
        correct: "a",
    },
    {
        title: "Who is the drinkest beer ?",
        choiceA: "Ka",
        choiceB: "Nit",
        choiceC: "Visal",
        choiceD: "Phanith",
        correct: "a",
    },
]

const quiz = document.querySelector("#quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElements = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

let getSelected = () => {
    let answer = "" ;
    answerElements.forEach(answerElement => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }

    })
    return answer
}

let selectAnswers = () => {
    answerElements.forEach(answerElement => answerElement.checked = false)
}

let loudQuiz = () => {
    selectAnswers();
    const currentQuizData = questionsData[currentQuiz];
    
    questionElements.innerText = currentQuizData.title
    a_text.innerText = currentQuizData.choiceA
    b_text.innerText = currentQuizData.choiceB
    c_text.innerText = currentQuizData.choiceC
    d_text.innerText = currentQuizData.choiceD
}
loudQuiz();

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === questionsData[currentQuiz].correct) {
            score++ 
            console.log(score)
        }
        currentQuiz++;

        if (currentQuiz < questionsData.length) {
            loudQuiz();
        }
        else {
            quiz.innerHTML = ` 
            <h2> Your answered ${score} / ${questionsData.length} question currectly </h2>
            <button onClick= "location.reload()"> Reload </button>
            `
        }
    }
})