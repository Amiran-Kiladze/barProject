const form = document.querySelector("#reviewform");
const textarea = document.querySelector("#comment");
const list = document.querySelector("#list");
const button = document.querySelector("#submitreviewbtn");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    newLi = document.createElement("li");
    newLi.innerHTML =`<b>Guest</b>: ${textarea.value}`;
    list.appendChild( newLi);
    textarea.value="";
    button.disabled = true;
})