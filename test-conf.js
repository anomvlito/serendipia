const confetti = require("canvas-confetti");
console.log(typeof confetti.shapeFromText);
const p = confetti.shapeFromText({ text: "🍕", scalar: 3 });
console.log(p instanceof Promise);
