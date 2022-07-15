let receiveScore = JSON.parse(localStorage.getItem('mostRecentScore'))
finalScore.innerText = receiveScore
let inputValue = document.getElementById('usersname')
let arrayOfDetails =[]

function saveHighScore (event){
	event.preventDefault()
	if(inputValue.value.length<3){
		alert("enter not less than 3 character")
		return window.location.assign('end.html')
	}else {
		details = {
			 receiveScore: receiveScore ,
			inputValue: inputValue.value
		}
		arrayOfDetails.push(details);
	}
	localStorage.setItem('details',JSON.stringify( arrayOfDetails))

	window.location.assign('index.html')
}
 addEventListener('click',event =>{
 	 document.getElementById('saveScoreBtn').disabled = false
}) ? saveHighScore() : console.log("something went  wrong")


 
