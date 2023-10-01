var lien = document.querySelectorAll(".lireLaSuite");
lien.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        var parent = this.parentElement;
        var suite = parent.querySelector(".suite");

        if (suite) {
            if (suite.style.maxHeight) {
                suite.style.maxHeight = null;
                this.innerText = "Show Details";
            } else {
                suite.style.maxHeight = suite.scrollHeight + "px";
                this.innerText = "Hide Details";
            }
        }
    });
});