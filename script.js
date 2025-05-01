{\rtf1\ansi\ansicpg950\cocoartf2706
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 javascript\
const questions = [\
    \{\
        question: "\uc0\u20320 \u26368 \u21916 \u27489 \u30340 \u20241 \u38290 \u27963 \u21205 \u26159 \u20160 \u40636 \u65311 ",\
        answers: [\
            \{ text: "\uc0\u30475 \u38651 \u24433 \u25110 \u36861 \u21127 ", value: "A" \},\
            \{ text: "\uc0\u36891 \u34903 \u25110 \u36092 \u29289 ", value: "B" \},\
            \{ text: "\uc0\u21443 \u21152 \u27966 \u23565 \u25110 \u31038 \u20132 \u27963 \u21205 ", value: "C" \},\
            \{ text: "\uc0\u29228 \u23665 \u25110 \u25142 \u22806 \u27963 \u21205 ", value: "D" \}\
        ]\
    \},\
    \{\
        question: "\uc0\u20320 \u23565 \u39135 \u29289 \u30340 \u20559 \u22909 \u26159 \u20160 \u40636 \u65311 ",\
        answers: [\
            \{ text: "\uc0\u24555 \u36895 \u26041 \u20415 \u30340 \u39135 \u29289 ", value: "A" \},\
            \{ text: "\uc0\u20581 \u24247 \u26377 \u27231 \u30340 \u36984 \u25799 ", value: "B" \},\
            \{ text: "\uc0\u21475 \u21619 \u29544 \u29305 \u30340 \u30064 \u22283 \u26009 \u29702 ", value: "C" \},\
            \{ text: "\uc0\u20659 \u32113 \u30340 \u23478 \u24120 \u33756 ", value: "D" \}\
        ]\
    \},\
    \{\
        question: "\uc0\u20320 \u21644 \u26379 \u21451 \u32858 \u26371 \u26178 \u65292 \u36890 \u24120 \u26371 \u36984 \u25799 \u20160 \u40636 \u27171 \u30340 \u39184 \u24307 \u65311 ",\
        answers: [\
            \{ text: "\uc0\u22823 \u23478 \u37117 \u29087 \u24713 \u30340 \u36899 \u37782 \u24215 ", value: "A" \},\
            \{ text: "\uc0\u26032 \u38283 \u30340 \u29305 \u33394 \u39184 \u24307 ", value: "B" \},\
            \{ text: "\uc0\u26377 \u33879 \u35920 \u23500 \u33756 \u21934 \u30340 \u39184 \u24307 ", value: "C" \},\
            \{ text: "\uc0\u31777 \u21934 \u24555 \u36895 \u30340 \u22806 \u36067 ", value: "D" \}\
        ]\
    \},\
    \{\
        question: "\uc0\u20320 \u23565 \u26044 \u39135 \u29289 \u30340 \u20729 \u26684 \u25935 \u24863 \u24230 \u22914 \u20309 \u65311 ",\
        answers: [\
            \{ text: "\uc0\u20729 \u26684 \u19981 \u37325 \u35201 \u65292 \u37325 \u40670 \u26159 \u22909 \u21507 ", value: "A" \},\
            \{ text: "\uc0\u24076 \u26395 \u33021 \u25214 \u21040 \u24615 \u20729 \u27604 \u39640 \u30340 \u36984 \u25799 ", value: "B" \},\
            \{ text: "\uc0\u21916 \u27489 \u22039 \u35430 \u39640 \u27284 \u39184 \u24307 ", value: "C" \},\
            \{ text: "\uc0\u21482 \u35201 \u33021 \u22635 \u39165 \u32922 \u23376 \u23601 \u22909 ", value: "D" \}\
        ]\
    \}\
];\
\
const restaurantRecommendations = \{\
    A: "\uc0\u40613 \u30070 \u21214 ",\
    B: "7-ELEVEN",\
    C: "\uc0\u27604 \u21496 \u22810 ",\
    D: "\uc0\u28450 \u22478 \u30064 \u22283 \u32654 \u39135 ",\
    AB: "\uc0\u34311 \u35352 \u29275 \u32905 \u40629 ",\
    AC: "\uc0\u19968 \u30058 \u24555 \u39184 ",\
    AD: "\uc0\u24555 \u20358 \u36895 \u39151 \u26742 ",\
    BC: "\uc0\u21697 \u22025 \u26085 \u24335 \u26009 \u29702 ",\
    BD: "\uc0\u39151 \u21507 \u22777 \u40670 ",\
    CD: "\uc0\u29640 \u21517 \u39854 \u33590 "\
\};\
\
let currentQuestionIndex = 0;\
let answers = [];\
\
const questionContainer = document.getElementById('question-container');\
const questionElement = document.getElementById('question');\
const answerButtons = document.getElementById('answer-buttons');\
const nextButton = document.getElementById('next-button');\
const resultContainer = document.getElementById('result');\
const resultText = document.getElementById('result-text');\
const restartButton = document.getElementById('restart-button');\
\
function startGame() \{\
    currentQuestionIndex = 0;\
    answers = [];\
    nextButton.style.display = 'none';\
    resultContainer.style.display = 'none';\
    questionContainer.style.display = 'block';\
    showQuestion(questions[currentQuestionIndex]);\
\}\
\
function showQuestion(question) \{\
    questionElement.innerText = question.question;\
    answerButtons.innerHTML = '';\
    question.answers.forEach(answer => \{\
        const button = document.createElement('button');\
        button.innerText = answer.text;\
        button.classList.add('btn');\
        button.addEventListener('click', () => selectAnswer(answer.value));\
        answerButtons.appendChild(button);\
    \});\
\}\
\
function selectAnswer(value) \{\
    answers.push(value);\
    currentQuestionIndex++;\
    if (currentQuestionIndex < questions.length) \{\
        showQuestion(questions[currentQuestionIndex]);\
    \} else \{\
        showResult();\
    \}\
\}\
\
function showResult() \{\
    questionContainer.style.display = 'none';\
    resultContainer.style.display = 'block';\
    const uniqueAnswers = [...new Set(answers)];\
    const recommendationKey = uniqueAnswers.join('');\
    resultText.innerText = restaurantRecommendations[recommendationKey] || "\uc0\u27794 \u26377 \u36969 \u21512 \u30340 \u39184 \u24307 \u25512 \u34214 ";\
\}\
\
restartButton.addEventListener('click', startGame);\
startGame();}