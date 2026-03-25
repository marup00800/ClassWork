function analyze(){

let text = document.getElementById("text").value.trim();

let characters = text.length;

let words = text.split(/\s+/);
let wordCount = words.length;

let reversed = text.split("").reverse().join("");

document.getElementById("outputBox").innerHTML =
"<p>Characters: " + characters + "</p>" +
"<p>Words: " + wordCount + "</p>" +
"<p>Reversed: " + reversed + "</p>";

}