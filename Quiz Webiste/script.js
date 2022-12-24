const quizset = [
    {
        que: "When interest rates go down, prices of fixed interest bonds ______",
        a: "Rise",
        b: "Fall",
        c: "Remains same",
        d: "None of these",
        correct: "a",
    },
    {
        que: "Orginal name of BSE is ?",
        a: "Natinal reserve exchange",
        b: "Bombay stock exchange",
        c: "Bharat secruity exchange",
        d: "Native share and stock broker association",
        correct: "d",
    },
    {
        que: "The brand has nearly 54% share globally in chocholate market.Its nearest rival has a merge 2%share",
        a: "Nestle",
        b: "Cadbury",
        c: "Nutrella",
        d: "Tobolence",
        correct: "c",
    },
    {
        que: "Which is the Largest innovation center of the world? Where it is located?",
        a: "Tnno, Bejing",
        b: "T-Hub, Hyderabad",
        c: "Sanchi , Japan",
        d: "Silicon center ,Silicon valley",
        correct: "b",
    },
    {
        que: "Name the technology that was created when its first packet was transmitted on October 29,1969.",
        a: 'Electric car',
        b: "Nuclear fission",
        c: "The Internet",
        d: "AR/VR",
        correct: "c",
    }
];


let index = 0;
let totalSawaal = quizset.length;
let correct = 0,
    wrong = 0;
const sawal = document.getElementById("sawal");
const optionInput = document.querySelectorAll('.option');
const nextQuestion = () => {
    if (index === totalSawaal) {
        return endTest()
    }
    refresh()
    const data = quizset[index];
    sawal.innerText = `${index + 1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}




const submitTest = () => {
    const data = quizset[index];
    const ans = getJawaab();
    if (ans === data.correct) {
        correct++;
    }
    else {
        wrong++;
    }
    index++;
    nextQuestion();
    return;
}



const getJawaab = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                answer = (input.value);
            }
        }
    )
    return answer;
}



const refresh = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endTest = () => {
    let totalSawaal = quizset.length;
    if (correct === totalSawaal)
        document.getElementsByClassName("questionbox")[0].innerHTML = `
    <div style="text-align:center">
    <h3><style></style>Thank you for giving the Test</h3>
    <h3> You scored ${correct}/${totalSawaal} </h3>
    </div>
    `
}

nextQuestion();