javascript
const questions = [
    {
        question: "你最喜歡的休閒活動是什麼？",
        answers: [
            { text: "看電影或追劇", value: "A" },
            { text: "逛街或購物", value: "B" },
            { text: "參加派對或社交活動", value: "C" },
            { text: "爬山或戶外活動", value: "D" }
        ]
    },
    {
        question: "你對食物的偏好是什麼？",
        answers: [
            { text: "快速方便的食物", value: "A" },
            { text: "健康有機的選擇", value: "B" },
            { text: "口味獨特的異國料理", value: "C" },
            { text: "傳統的家常菜", value: "D" }
        ]
    },
    {
        question: "你和朋友聚會時，通常會選擇什麼樣的餐廳？",
        answers: [
            { text: "大家都熟悉的連鎖店", value: "A" },
            { text: "新開的特色餐廳", value: "B" },
            { text: "有著豐富菜單的餐廳", value: "C" },
            { text: "簡單快速的外賣", value: "D" }
        ]
    },
    {
        question: "你對於食物的價格敏感度如何？",
        answers: [
            { text: "價格不重要，重點是好吃", value: "A" },
            { text: "希望能找到性價比高的選擇", value: "B" },
            { text: "喜歡嘗試高檔餐廳", value: "C" },
            { text: "只要能填飽肚子就好", value: "D" }
        ]
    }
];

const restaurantRecommendations = {
    A: "麥當勞",
    B: "7-ELEVEN",
    C: "比司多",
    D: "漢城異國美食",
    AB: "蘇記牛肉麵",
    AC: "一番快餐",
    AD: "快來速飯桶",
    BC: "品嘉日式料理",
    BD: "飯吃壹點",
    CD: "珈名鮮茶"
};

let currentQuestionIndex = 0;
let answers = [];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');

function startGame() {
    currentQuestionIndex = 0;
    answers = [];
    nextButton.style.display = 'none';
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.value));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(value) {
    answers.push(value);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    const uniqueAnswers = [...new Set(answers)];
    const recommendationKey = uniqueAnswers.join('');
    resultText.innerText = restaurantRecommendations[recommendationKey] || "沒有適合的餐廳推薦";
}

restartButton.addEventListener('click', startGame);
startGame();
