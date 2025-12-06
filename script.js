let btn = document.querySelector("h1");

// let audioarr = [
//     { audio1: 'assets/audio/28.mp3' },
//     { audio2: 'assets/audio/29.mp3' },
//     { audio3: 'assets/audio/30.mp3' },
//     { audio4: 'assets/audio/31.mp3' },
//     { audio5: 'assets/audio/32.mp3' },
//     { audio6: 'assets/audio/33.mp3' },
//     { audio7: 'assets/audio/34.mp3' },
//     { audio8: 'assets/audio/35.mp3' },
//     { audio9: 'assets/audio/36.mp3' },
//     { audio10: 'assets/audio/37.mp3' },
//     { audio11: 'assets/audio/38.mp3' },
//     { audio12: 'assets/audio/39.mp3' },
//     { audio13: 'assets/audio/40.mp3' },
//     { audio14: 'assets/audio/41.mp3' },
//     { audio15: 'assets/audio/42.mp3' },
//     { audio16: 'assets/audio/43.mp3' },
//     { audio17: 'assets/audio/44.mp3' },
//     { audio18: 'assets/audio/45.mp3' },
//     { audio19: 'assets/audio/46.mp3' },
//     { audio20: 'assets/audio/47.mp3' },
//     { audio21: 'assets/audio/48.mp3' },
//     { audio22: 'assets/audio/49.mp3' },
//     { audio23: 'assets/audio/50.mp3' },
//     { audio24: 'assets/audio/51.mp3' },
//     { audio25: 'assets/audio/52.mp3' },
//     { audio26: 'assets/audio/53.mp3' },
//     { audio27: 'assets/audio/54.mp3' },
//     { audio28: 'assets/audio/55.mp3' },
//     { audio29: 'assets/audio/56.mp3' },
//     { audio30: 'assets/audio/57.mp3' },
//     { audio31: 'assets/audio/58.mp3' },
//     { audio32: 'assets/audio/59.mp3' },
//     { audio33: 'assets/audio/60.mp3' },
//     { audio34: 'assets/audio/61.mp3' },
//     { audio35: 'assets/audio/62.mp3' },
//     { audio36: 'assets/audio/63.mp3' },
// ]


// document.body.addEventListener("keypress", (dets) => {
//     // let aud = new Audio('assets/audio/28.mp3');
//     if (dets.code === "KeyD") {
//         audioarr[0].audio1
//         new Audio(audioarr[0].audio1).play()
//     }
// })

// CLICK EVENT FOR BLACK / WHITE KEYS
//   document.querySelectorAll(".white, .black").forEach(key=>{
//       key.addEventListener("click", ()=>{
//           console.log("Clicked:", key.textContent);
//       });
//   });
let audioarr = [
    'assets/audio/28.mp3',
    'assets/audio/29.mp3',
    'assets/audio/30.mp3',
    'assets/audio/31.mp3',
    'assets/audio/32.mp3',
    'assets/audio/33.mp3',
    'assets/audio/34.mp3',
    'assets/audio/35.mp3',
    'assets/audio/36.mp3',
    'assets/audio/37.mp3',
    'assets/audio/38.mp3',
    'assets/audio/39.mp3',
    'assets/audio/40.mp3',
    'assets/audio/41.mp3',
    'assets/audio/42.mp3',
    'assets/audio/43.mp3',
    'assets/audio/44.mp3',
    'assets/audio/45.mp3',
    'assets/audio/46.mp3',
    'assets/audio/47.mp3',
    'assets/audio/48.mp3',
    'assets/audio/49.mp3',
    'assets/audio/50.mp3',
    'assets/audio/51.mp3',
    'assets/audio/52.mp3',

]

let keyMap = {
    "KeyA": 0,
    "KeyB": 1,
    "KeyC": 2,
    "KeyD": 3,
    "KeyE": 4,
    "KeyF": 5,
    "KeyG": 6,
    "KeyH": 7,
    "KeyI": 8,
    "KeyJ": 9,
    "KeyK": 10,
    "KeyL": 11,
    "KeyM": 12,
    "KeyN": 13,
    "KeyO": 14,
    "KeyP": 15,
    "KeyQ": 16,
    "KeyR": 17,
    "KeyS": 18,
    "KeyT": 19,
    "KeyU": 20,
    "KeyV": 21,
    "KeyW": 22,
    "KeyX": 23,
    "KeyY": 24,
    "KeyZ": 25,
}

let allBtn = document.querySelectorAll(".white, .black");

allBtn.forEach((key, i) => {
    key.addEventListener("click", () => {
        new Audio(audioarr[i]).play();
    })

})
document.body.addEventListener("keypress", (i) => {
    let index = keyMap[i.code]
    if (index !== undefined) {
        new Audio(audioarr[index]).play();

        allBtn[index].classList.add("active");
        setTimeout(() => {
            allBtn[index].classList.remove("active");
        }, 150)
    }

})