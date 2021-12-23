var solutions = [
    "c9ff0b082113e36751113a51b32a04efc89d83b9ded3d100770669f90e2a3002",
    "d849e423100543d12bb92e21b376912e7d120e3eaaae7e65b8e5073371005c98",
    "b9d86f391c760d08bbefea48c8592f11d8f862a917cee8913e878d61e29abc53",
    "58a3a8ce87d71d7ad6ac929b0647da9baead1e77b94bd040a2a4d95cd8425156",
    "f1bb5b20787df459c4afda94b14c3cbbb0cca7841b7f431061530e2d148279a6",
    "9348967286d8d9f0e021644ca27bd373817bb2453a7d2d25c69079095eaeaa5f",
    "f8c41bb1b2f662006a3cc51d82ebf13800311f554e56263a7f5acf6972b28188",
    "58ea18921ccb1ee1745e712d7a37d2bbfcba7f305c63c8138482aff30341fac6",
    "e7165ee6aa2369b2b5bbcaf5c9e5105b657ac8000362d98c66ddb16fdaafa1ac",
    "3ad10f86dce0ed85b96a322b72e3a95214a97f6ac8de564b579639097ac21d37",
    "c93cdf7dd53d9dbc7e7934de6c5629d05c1a5f0feff252dea191424b5ace3bab",
    "3ebf0ef2c4124b77cc90978269db32628a3e8c8dd04e0c68b35896f431af884e",
    "2fca2c8ce912dab8b2259be0845446e17c160d70715ba3b0c4defa619295143c",
    "8defdf9d1cd46e3c29c4d19e092b8c5cdaf4c5b9f2933c0f79aa162eba7f697d",
    "0c38a44c755aeddde2900fa768a77d3a272f480a7b7d6c95e9edf90ab58b803c",
    "19be66cff96e1bb1c0598e6745ef4b8eb069af4fd3fef503fc1a261c1e713eec",
    "cf1699b3f8d65df5e83b8651c67be7129082671d9cfbb46bac1228f2ea3bd226",
    "660dff9b565de2112a61c0f5caa590ad950eb964f2303f0cb17da72887c7d210",
    "313b1267a89f4db9a562af1767ebd1bb011d022910d2ce3d5eb0d4314b7f69d1",
    "3fafc68188cf263169068389b2470e06f538d5ff17b117b7a46cb36346f8f548",
    "9a6217cf534c0d785319b1956d25f6823bf13bb92c63b6b44f5a0a2b453a7dda",
    "b5aacace669baa35a8d6e3c05306a0d59dd05c3ece000516043c1c5045d30b65",
    "93f9365e5150935a1cf95c9c34e2a5a978669aea397e945b4b8d8495f0fbae5b",
    "7f2a7a22a3cf04e081dbc00daa172dcc39aa624a0c6dc53e2fb94bf13119941a",
    "7682cb4c811125956d09ca90cfcc2c6ac1fa28beaf51fbc8ec3ded0fdae13a9d",
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
