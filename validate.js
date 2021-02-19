var solutions = [
    "c90d5ac2ba58bf1fc1da7053d68e43451019bb1a8937c9dde9234f85b3ab6145",
    "f2ba95ef8d61c5b1ab850d3d3ed904ae945cc02442f26e72d22a95e64c583014",
];

var input = document.getElementById("answer");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitButton").click();
    }
});

function validate() {
    var answer = input.value;
    answer = answer.trim().toLowerCase();
    if (answer.length == 0) {
        return;
    }
    var title = document.title;
    var hash = sha256(title + answer);
    var saltedHash = sha256(title + answer + "salt");
    // console.log(hash);
    // console.log(saltedHash);
    if (solutions.includes(saltedHash)) {
        window.location.href = "../" + hash + "/";
    } else {
        input.classList.add("retry");
    }
}
