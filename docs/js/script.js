var clickCount = 0;
var messages = ["Cgurado ka🤨?", "Mapapagod kalang😝", "Yes na kasi😍", "Kaya pa😆?"];
var maxClicksForRandomMessage = 2;

var randomizeEnabled = true; // Flag to control randomization

document.getElementById('randomButton').addEventListener('click', function () {
    if (randomizeEnabled) {
        clickCount++;
        randomizeButtonPosition();

        if (clickCount % maxClicksForRandomMessage === 0) {
            var randomMessage = getRandomMessage();
            showMessage(randomMessage);
        }
    }
});

document.getElementById('hideButton').addEventListener('click', function () {
    toggleRandomization();
    hideMessage();
});

function randomizeButtonPosition() {
    var button = document.getElementById('randomButton');
    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function showMessage(message) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

function hideMessage() {
    var messageElement = document.getElementById('message');
    messageElement.textContent = 'YEEHEY I Love You Muahh😘';
}

function getRandomMessage() {
    var randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleRandomization() {
    randomizeEnabled = !randomizeEnabled; 
}
