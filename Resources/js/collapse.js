var coll = document.getElementsByClassName("navLogo");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var ul = this.nextElementSibling;
    if (ul.style.display === "block") {
      ul.style.display = "none";
    } else {
      ul.style.display = "block";
    }
  });
}