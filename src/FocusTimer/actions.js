import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countdown()
}
export function reset() {
  state.isRunning = false
  state.minutes = Number(0)
  state.seconds = Number(0)
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}
export function add() {
  let time = el.minutes.textContent
  state.minutes = Number(time) + 5
  state.seconds = el.seconds.textContent
  timer.updateDisplay()
}
export function remove() {
  let time = el.minutes.textContent
  state.minutes = Number(time) - 5 < 0 ? 0 : Number(time) - 5
  state.seconds = el.seconds.textContent
  timer.updateDisplay()
}
export function toggleForest() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  document.documentElement.classList.toggle("tree-sound")
  let classContain = document.documentElement.classList.value
  if (classContain.includes("music-on" && "rain-sound")) {
    sounds.buttonRain.pause()
    document.documentElement.classList.remove("rain-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  } else if (classContain.includes("music-on" && "coffee-sound")) {
    sounds.buttonCoffee.pause()
    document.documentElement.classList.remove("coffee-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  } else if (classContain.includes("music-on" && "fire-sound")) {
    sounds.buttonFire.pause()
    document.documentElement.classList.remove("fire-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  }

  if (state.isMute) {
    sounds.buttonForest.play()
    return
  }
  sounds.buttonForest.pause()
}
export function toggleRain() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  document.documentElement.classList.toggle("rain-sound")
  let classContain = document.documentElement.classList.value
  if (classContain.includes("music-on" && "tree-sound")) {
    sounds.buttonForest.pause()
    document.documentElement.classList.remove("tree-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  } else if (classContain.includes("music-on" && "coffee-sound")) {
    sounds.buttonCoffee.pause()
    document.documentElement.classList.remove("coffee-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  } else if (classContain.includes("music-on" && "fire-sound")) {
    sounds.buttonFire.pause()
    document.documentElement.classList.remove("fire-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  }
  if (state.isMute) {
    sounds.buttonRain.play()
    return
  }
  sounds.buttonRain.pause()
}
export function toggleCoffee() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  document.documentElement.classList.toggle("coffee-sound")
  let classContain = document.documentElement.classList.value
  if (classContain.includes("music-on" && "tree-sound")) {
    sounds.buttonForest.pause()
    document.documentElement.classList.remove("tree-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  } else if (classContain.includes("music-on" && "rain-sound")) {
    sounds.buttonRain.pause()
    document.documentElement.classList.remove("rain-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  } else if (classContain.includes("music-on" && "fire-sound")) {
    sounds.buttonFire.pause()
    document.documentElement.classList.remove("fire-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  }
  if (state.isMute) {
    sounds.buttonCoffee.play()
    return
  }
  sounds.buttonCoffee.pause()
}
export function toggleFire() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  document.documentElement.classList.toggle("fire-sound")
  let classContain = document.documentElement.classList.value
  if (classContain.includes("music-on" && "tree-sound")) {
    sounds.buttonForest.pause()
    document.documentElement.classList.remove("tree-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  } else if (classContain.includes("music-on" && "coffee-sound")) {
    sounds.buttonCoffee.pause()
    document.documentElement.classList.remove("coffee-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  } else if (classContain.includes("music-on" && "rain-sound")) {
    sounds.buttonRain.pause()
    document.documentElement.classList.remove("rain-sound")
    document.documentElement.classList.toggle("music-on")
    state.isMute = true
  }
  if (state.isMute) {
    sounds.buttonFire.play()
    return
  }
  sounds.buttonFire.pause()
}
