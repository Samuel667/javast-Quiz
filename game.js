const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
{
	question: 'what is 2 + 2 ?',
	choice1: '2',
	choice2: '4',
	choice3: '21',
	choice4: '17',
	answer: 2
},
{
	question: 'what is 4 + 4 ?',
	choice1: '2',
	choice2: '4',
	choice3: '21',
	choice4: '8',
	answer: 4
},
{
	question: 'where house is  commonly built upon is  ?',
	choice1: 'Land',
	choice2: 'Water',
	choice3: 'Air',
	choice4: 'space',
	answer: 1
},
{
	question: 'what is 6 + 7 ?',
	choice1: '2',
	choice2: '4',
	choice3: '13',
	choice4: '17',
	answer: 3
}
]
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions]
	getNewQuestion()
}

getNewQuestion = () => {
	if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
		localStorage.setItem('mostRecentScore', score)

		return window.location.assign('end.html')
	}
	questionCounter++
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
	progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}% `
	const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
	currentQuestion = availableQuestions[questionsIndex]
	question.innerText = currentQuestion.question

	choices.forEach(	choice =>{
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]
	})
	availableQuestions.splice(questionsIndex, 1)
	acceptingAnswers = true
}
choices.forEach(choice => {
	choice.addEventListener('click', event => {
		if(!acceptingAnswers ) return
				acceptingAnswers = false
				const selectedChoice = event.target																												
				const selectedAnswer = selectedChoice.dataset['number']
				//to know 'corrct' or 'incorrect' and give a score
				let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
				if (classToApply === 'correct') {
					incrementScore(SCORE_POINTS)
				} 
				// Bringing new questions
				selectedChoice.parentElement.classList.add(classToApply);
				setTimeout(() =>{
				selectedChoice.parentElement.classList.remove(classToApply)
				getNewQuestion()
				}, 1000)

	})
}) 

incrementScore = num =>{
	score += num
	scoreText.innerText = score

}
startGame()

