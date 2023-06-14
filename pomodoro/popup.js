document.addEventListener("DOMContentLoaded", function() {
  const optionsDiv = document.getElementById("options");
  const pomodoroButton = document.getElementById("pomodoroButton");
  const timerButton = document.getElementById("timerButton");

  const pomodoroTimerDiv = document.getElementById("pomodoroTimer");
  const timerDiv = document.getElementById("timer");
  const backButtonContainer = document.getElementById("backButtonContainer");

  const pomodoroCountdown = document.getElementById("pomodoroCountdown");
  const timerCountdown = document.getElementById("timerCountdown");

  let pomodoroInterval;
  let timerInterval;

  function startPomodoroTimer() {
    let minutes = 25;
    let seconds = 0;

    pomodoroCountdown.textContent = formatTime(minutes, seconds);

    pomodoroInterval = setInterval(function() {
      if (seconds === 0) {
        if (minutes === 0) {
          stopPomodoroTimer();
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      pomodoroCountdown.textContent = formatTime(minutes, seconds);
    }, 1000);
  }

  function stopPomodoroTimer() {
    clearInterval(pomodoroInterval);
  }

  function resetPomodoroTimer() {
    stopPomodoroTimer();
    pomodoroCountdown.textContent = "25:00";
  }

  function startTimer() {
    let minutes = 0;
    let seconds = 0;

    timerCountdown.textContent = formatTime(minutes, seconds);

    timerInterval = setInterval(function() {
      if (seconds === 59) {
        minutes++;
        seconds = 0;
      } else {
        seconds++;
      }
      timerCountdown.textContent = formatTime(minutes, seconds);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    stopTimer();
    timerCountdown.textContent = "00:00";
  }

  function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  pomodoroButton.addEventListener("click", function() {
    optionsDiv.style.display = "none";
    pomodoroTimerDiv.style.display = "block";
    timerDiv.style.display = "none";
    backButtonContainer.style.display = "block";
    resetPomodoroTimer();
  });

  timerButton.addEventListener("click", function() {
    optionsDiv.style.display = "none";
    pomodoroTimerDiv.style.display = "none";
    timerDiv.style.display = "block";
    backButtonContainer.style.display = "block";
    resetTimer();
  });

  const backButton = document.getElementById("backButton");
  backButton.addEventListener("click", function() {
    optionsDiv.style.display = "block";
    pomodoroTimerDiv.style.display = "none";
    timerDiv.style.display = "none";
    backButtonContainer.style.display = "none";
  });

  const startPomodoroButton = document.getElementById("startPomodoroButton");
  const stopPomodoroButton = document.getElementById("stopPomodoroButton");
  const resetPomodoroButton = document.getElementById("resetPomodoroButton");

  const startTimerButton = document.getElementById("startTimerButton");
  const stopTimerButton = document.getElementById("stopTimerButton");
  const resetTimerButton = document.getElementById("resetTimerButton");

  startPomodoroButton.addEventListener("click", function() {
    startPomodoroButton.disabled = true;
    stopPomodoroButton.disabled = false;
    resetPomodoroButton.disabled = false;
    startPomodoroTimer();
  });

  stopPomodoroButton.addEventListener("click", function() {
    stopPomodoroButton.disabled = true;
    startPomodoroButton.disabled = false;
    resetPomodoroButton.disabled = false;
    stopPomodoroTimer();
  });

  resetPomodoroButton.addEventListener("click", function() {
    resetPomodoroButton.disabled = true;
    startPomodoroButton.disabled = false;
    stopPomodoroButton.disabled = true;
    resetPomodoroTimer();
  });

  startTimerButton.addEventListener("click", function() {
    startTimerButton.disabled = true;
    stopTimerButton.disabled = false;
    resetTimerButton.disabled = false;
    startTimer();
  });

  stopTimerButton.addEventListener("click", function() {
    stopTimerButton.disabled = true;
    startTimerButton.disabled = false;
    resetTimerButton.disabled = false;
    stopTimer();
  });

  resetTimerButton.addEventListener("click", function() {
    resetTimerButton.disabled = true;
    startTimerButton.disabled = false;
    stopTimerButton.disabled = true;
    resetTimer();
  });

});
