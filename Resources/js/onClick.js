// document.getElementById('correct').onclick = function changeContent() { 
// }
// document.getElementById('fout').onclick = function changeContent() { 
// }

function submitButtonStyle(_this) {

    _this.style.transition = "all 1s";

    if (_this.classList.contains('correct')) {
       _this.style.backgroundColor = "#32cd32"; 
    } else {
    _this.style.backgroundColor = "#cf352e";
       }
    }