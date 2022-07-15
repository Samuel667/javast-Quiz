let Details = JSON.parse( localStorage.getItem('details'));
let BestScores = document.getElementById('BestScores');
 for(var i = 0; i < Details.length; i++) {
 		BestScores.innerHTML = '<b>NAME: </b>'+ Details[i].inputValue +"<br/>" + '<b>SCORES: </b>' +Details[i].receiveScore 
	}	