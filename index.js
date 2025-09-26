// select all buttons with class drum
const drumButtons = document.querySelectorAll(".drum");
const drumSoundTypes = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3",
};

drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const soundType = button.classList[0];
    playSound(soundType);
    animateButton(soundType);
  });
});

// Detecting keyboard press and playing sound
document.addEventListener("keydown", function (event) {
  const soundType = event.key;
  if (drumSoundTypes[soundType]) {
    playSound(soundType);
    animateButton(soundType);
  }
});

//  Function to play sound
function playSound(soundType) {
  const audio = new Audio(drumSoundTypes[soundType]);
  audio.play();
}

// Function to animate button
function animateButton(soundType) {
  const activeButton = document.querySelector(`.${soundType}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 150);
  }
}
