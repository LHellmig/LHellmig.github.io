document.getElementsByClass('correct').onclick = juistAntwoord;

function juistAntwoord(correct) {
    document.getElementsByClass(correct).style.backgroundColor = "#fff";
}