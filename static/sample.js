let currentStep = 1;
const maxSteps = 5;

function navigate(direction) {
	const current = document.getElementById('step' + currentStep);
	currentStep += direction;

	if (currentStep > maxSteps) {
		currentStep = maxSteps;
	} else if (currentStep < 1) {
		currentStep = 1;
	}

	const next = document.getElementById('step' + currentStep);
	if (current) current.style.display = 'none';
	if (next) next.style.display = 'block';
}
