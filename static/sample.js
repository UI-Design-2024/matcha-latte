var currentStepLearn = 0;
var maxStepsLearn = 9;

function updateProgressBarLearn() {
    let progressBar = document.getElementById('progress-bar-learn');
    if (progressBar) {
        let width = (currentStepLearn / maxStepsLearn) * 100;
        progressBar.style.width = width + '%';
    }
}

function navigate(direction) {
    const current = document.getElementById('step' + currentStepLearn);
    currentStepLearn += direction;

    if (currentStepLearn > maxStepsLearn) {
        currentStepLearn = maxStepsLearn;
        let progressBar = document.getElementById('progress-bar-learn');
        progressBar.textContent = `You've completed the Learning section!`;

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

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener("DOMContentLoaded", function() {
    let step = getParameterByName('step');
    if (step !== null) {
        goToStep(parseInt(step));
    } else {
        goToStep(0);
    }
});
