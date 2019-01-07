// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// function init() {
//   // Write your JavaScript code inside the init() function
// }

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let cursor = 0;
function init() {
document.addEventListener('keydown', function(e) {
   	cursor = (e.keyCode == code[cursor]) ? cursor + 1 : 0;
if (cursor == code.length) alert("Yes!");
   });
}
init();