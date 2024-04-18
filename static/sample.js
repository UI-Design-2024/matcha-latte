let currentStep = 0;
const maxSteps = 9;
var added = false
function navigate(direction) {
	const current = document.getElementById('step' + currentStep);
	currentStep += direction;
	if (currentStep > maxSteps) {
		currentStep = maxSteps;
		if (!added){
		$(".to-quiz").html('<a href="/quiz_home"><button class="quiz-button">Quiz</button></a>')
		added = true
		}
	} else if (currentStep < 1) {
		currentStep = 1;
	}else{
		added = false
		$(".to-quiz").html("")
	}

	const next = document.getElementById('step' + currentStep);
	if (current) current.style.display = 'none';
	if (next) next.style.display = 'block';
}