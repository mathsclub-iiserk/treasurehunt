var solutions = [
];

var input = document.getElementById("answer");
var button = document.getElementById("submitButton");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitButton").click();
    }
});

var title = document.getElementsByClassName("title-box")[0].innerHTML.trim();

function validate() {
    var answer = input.value;
    answer = answer.trim().toLowerCase();
    if (answer.length == 0) {
        return;
    }
    var hash1 = sha256(title + answer);
    var hash2 = sha256(title + answer + title);
    console.log(hash1);
    console.log(hash2);
    if (solutions.includes(hash2)) {
        window.location.href = "../" + hash1 + "/";
    } else {
        input.classList.remove("retry");
        button.classList.remove("retry");
        void input.offsetWidth;
        input.classList.add("retry");
        button.classList.add("retry");
    }
}
