// DOM
// How to access ?
// document.getElementById() -> return an element
// document.getElementsByClass() -> return an array with elements
// document.querySelector() -> return first found element
// document.querySelectorAll() -> return an array with elements

// document.getElementById() -> return an element
const titleElement = document.getElementById("title");
console.log(titleElement); // <h1 id="title">Title</h1>

// document.getElementsByClass() -> return an array with elements
const contentElements = document.getElementsByClassName("content");
console.log(contentElements); // HTMLCollection(2) { 0: p.content, 1: p.content, length: 2 }

// document.querySelector() -> return first found element
const querySelectorContentElement = document.querySelector(".content");
console.log(querySelectorContentElement); // <p class="content">content1</p>
const querySelectorTitleElement = document.querySelector("#title");
console.log(querySelectorTitleElement); // <h1 id="title">Title</h1>

// document.querySelectorAll() -> return an array with elements
const querySelectorAllContentElements = document.querySelectorAll(".content");
console.log(querySelectorAllContentElements); // NodeList(2) [ p.content, p.content ]  0: <p class="content">​ 1: <p class="content"> length: 2 

// How to access element content
// innerHTML
const mainInnerHTML = document.getElementById("main").innerHTML;
console.log(mainInnerHTML);
/* <p class="content">content1</p>
<p class="content">content2</p> */

// innerText
const mainInnerText = document.getElementById("main").innerText;
console.log(mainInnerText);
// content1
// content2

// How to access element class
// each element has a classList property
// actions:
// add() -> add a class
// remove() -> remove a class
// replace() -> replace an exist class
// toggle() -> add or remove a class

titleElement.classList.add("red"); // <h1 id="title" class="red">Title</h1>
// titleElement.classList.remove("red"); // <h1 id="title" class="">Title</h1>
// titleElement.classList.replace("red", "blue"); // <h1 id="title" class="blue">Title</h1>

titleElement.addEventListener('click', () => {
  titleElement.classList.toggle("blue");
})

function toggleBlue() {
  titleElement.classList.toggle("blue");
}

// How to create an element
// create an element
// document.createElement(“div”)
// create a textNode
// document.createTextNode(“Some Text”)
// append a textNode into an element
// ELEMENT.appendChild(TEXTNODE)

// Put your element into your view
const body = document.getElementById("root");

const container = document.createElement("div");
const text = document.createTextNode("Hello DOM!");

// Add some class for style
container.classList.add("red")

container.appendChild(text);
console.log(container); // <div class="red">Hello DOM!</div>

// Put your element into your view
body.appendChild(container); // 畫面顯示紅字Hello DOM!
