let isRunning = false;
let timeoutId = null;
let currentEndDate = 0;  

self.onmessage = function (event) {
  
  if (event.data === 'reset') {
    isRunning = false;
    currentEndDate = 0;
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    return;
  }

  if (isRunning) return;
  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  currentEndDate = endDate;

  function tick() {

    if (currentEndDate !== endDate) {
      return;
    }

    const now = Date.now();
    const countDownSeconds = Math.max(0, Math.ceil((endDate - now) / 1000));

    self.postMessage(countDownSeconds);

    if (countDownSeconds <= 0) {
      isRunning = false;
      timeoutId = null;
      return;
    }

    timeoutId = setTimeout(tick, 1000);
  }

  tick();
};