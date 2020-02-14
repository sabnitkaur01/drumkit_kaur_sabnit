(() => {
  let keys = Array.from(document.querySelectorAll('.Key'));

  keys.forEach(key => key.addEventListener('transitioned', resetKey));

  function resetKey() {
    this.classList.remove('playing');
  }

  function playSound(event) {
    // debugger;

    let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    //the ! is a check for inequality ( it means the conditions is false)
    //also called a bang operator
    // if there is no matching audio Element, then kill the function and do nothing
    if (!audioElement) { return }

    //if we have a match, then play the sound that goes with the keyboard key
    audioElement.currentTime = 0; // no brackets means his is a method -a built-in function
    audioElement.play(); //round brackets means this is a method - a built-in function

    key.classList.add('playing');
  }
  // add an event listner to the window
  // and cpture all the keybards key presses

  window.addEventListener('keydown', playSound);
})();
