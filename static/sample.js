var currentStepLearn = 0;
var maxStepsLearn = 9;

function updateProgressBarLearn() {
    let progressBar = document.getElementById('progress-bar-learn');
    if (progressBar) {
        let width = (currentStepLearn / maxStepsLearn) * 100;
        progressBar.style.width = width + '%';
        progressBar.textContent = `Step ${currentStepLearn + 1} of ${maxStepsLearn + 1}`;
    }
}

function navigate(direction) {
    const current = document.getElementById('step' + currentStepLearn);
    currentStepLearn += direction;

    if (currentStepLearn > maxStepsLearn) {
        currentStepLearn = maxStepsLearn;
        if (!added) {
            $(".to-quiz").html('<a href="/quiz_home"><button class="quiz-button">Quiz</button></a>');
            added = true;
        }
    } else if (currentStepLearn < 0) {
        currentStepLearn = 0;
    } else {
        added = false;
        $(".to-quiz").html("");
    }

    const next = document.getElementById('step' + currentStepLearn);
    if (current) current.style.display = 'none';
    if (next) next.style.display = 'block';

    updateProgressBarLearn();
}

document.addEventListener("DOMContentLoaded", function() {
    updateProgressBarLearn();
});