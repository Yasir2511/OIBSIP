let display = document.getElementById('display');
    let lastAns = 0;
    function append(val) {
      if (display.innerText === '0') {
        display.innerText = val;
      } else {
        display.innerText += val;
}
    }

    function clearDisplay() {
      display.innerText = '0';}
    function delChar() {
      display.innerText = display.innerText.slice(0, -1);
      if (display.innerText === '') display.innerText = '0';
}
    function calculate() {
      try {
        lastAns = eval(display.innerText);
        display.innerText = lastAns;
      } catch (error) {
        display.innerText = 'Error';     }
    }
function useAns() {
      if (display.innerText === '0') {
        display.innerText = lastAns;
      } else {
        display.innerText += lastAns;
      }
    }
    function toggleSign() {
      if (display.innerText[0] === '-') {
        display.innerText = display.innerText.slice(1);
      } else {
        display.innerText = '-' + display.innerText;
      }
    }