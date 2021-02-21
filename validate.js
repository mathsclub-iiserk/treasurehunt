var solutions = [
    "120006163b49009308eb2ec2fae9e7d5543e8ba034d52df6e05d44c2f2eedabc",
    "ef7294be0808a151090eca0461e41fd449390ad3153358ba374ed80007569e76",
];

var input = document.getElementById("answer");
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
    // console.log(hash1);
    // console.log(hash2);
    if (solutions.includes(hash2)) {
        window.location.href = "../" + hash1 + "/";
    } else {
        input.classList.remove("retry");
        void input.offsetWidth;
        input.classList.add("retry");
    }
}
