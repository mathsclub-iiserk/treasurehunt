var solutions = [
    "9cced6a5cc110525ab52e7e79857af4ab5531247",
    "906604aebce38f9dfafaf0ad8e921a00773bee94",
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
    var hash = sha1(title + answer);
    var saltedHash = sha1(title + answer + "salt");
    console.log(hash);
    console.log(saltedHash);
    if (solutions.includes(saltedHash)) {
        window.location.href = "../" + hash + "/";
    } else {
        input.classList.add("retry");
    }
}
