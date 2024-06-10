let txtArea = document.getElementById("inputText");
let countWord = document.getElementById("countWord");
let countChar = document.getElementById("countChar");

txtArea.addEventListener("input", () => {
    //counts num of Charactes
    countChar.textContent = txtArea.value.length;

    //Removes white spaces from both sides 
    let txt = txtArea.value.trim();

    countWord.textContent = txt.split(/\s+/).filter((item) => item).length;
});