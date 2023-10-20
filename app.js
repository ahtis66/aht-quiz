const quizData = [{
    question: "What was the major event of 1971?",
    a: " Nawaz Sharif became Prime Minister",
    b: " Explosion of nuclear bomb",
    c: " Tashkent Agreement",
    d: "Bangladesh broke away from Pakistan",
    correct: "d",
},
{
    question: "What year was the United Nations established?",
    a: "1945",
    b: "1970",
    c: "1985",
    d: "2000",
    correct: "a",
},
{
    question: "IMF Stand for",
    a: "pakistan Monetary Fund",
    b: "International Monetary Fund",
    c: "India Monetary Fund",
    d: "none of the above",
    correct: "b",
},
{
    question: "In which year did Pakistan win the Cricket World Cup?",
    a: "1948",
    b: "1992",
    c: "1950",
    d: "1998",
    correct: "b",
},
{
    question: "In which year Pakistan became a Republic?",
    a: "1956.",
    b: "1978",
    c: "1947",
    d: "2000",
    correct: "a",
},
{
    question: "How many languages are spoken in Pakistan?",
    a: "45",
    b: "18",
    c: "11",
    d: "32",
    correct: "d",
},
{
    question: "Who designed Pakistan’s national flag?",
    a: "Quaid-e-azam",
    b: "Sir Syed ahmad",
    c: "Ameer Ud din Khidwai",
    d: "liyqat Ali Khan",
    correct: "c",
},
{
    question: "Identify the largest cantonment of Pakistan?",
    a: "Quetta Cantt",
    b: "Okara Cantt",
    c: "Kharian Cantt",
    d: "Karachi Cantt",
    correct: "c",
},
{
    question: "Which country assisted Pakistan in the construction of Sandak Project?",
    a: "Iran",
    b: "Saudi Arabia",
    c: "Afghanistan",
    d: "China",
    correct: "d",
},
{
    question: "Who was the First woman Governor of State Bank of Pakistan?",
    a: "Noor Jahan",
    b: " Dr Shamshad Akhter",
    c: "Farzana Raja",
    d: "Dr Ashraf Abbasi",
    correct: "b",
},
{
    question: "Defence day of Pakistan is observed on ___________ ?",
    a: "6th September",
    b: "11th September",
    c: "7th September",
    d: "None of them",
    correct: "a",
}
];

let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;

let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}

reset()
const data = quizData[index]
allInputs[0].nextElementSibling.innerText = data.a
questionBox.innerHTML = `${index + 1}) ${data.question}`

allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h1>Thank You For Playing This Quiz</h>
        <h3 class="w-100">You've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);