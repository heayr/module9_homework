console.log('hi, module 9 started');


// XML
// Вам дана заготовка и результат,
// который вы должны получить.
// Ваша задача — написать код,
// который будет преобразовывать XML
//  в JS-объект и выводить его в консоль.
// =======================================================================================

let xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let parser = new DOMParser();
const result = [];

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const students = xmlDOM.querySelectorAll('student');

students.forEach(node => {
  let student = {
    name: `${node.querySelector("first").textContent} ${node.querySelector("second").textContent}`,
    age: node.querySelector("age").textContent,
    prof: node.querySelector("prof").textContent,
    lang: node.querySelector("name").getAttribute("lang")
  }
  result.push(student);
});


console.log('result', result);

// =======================================================================
// Задание 2.

// Вам дана заготовка и результат, 
// который вы должны получить. Ваша задача — написать код, 
// который будет преобразовывать JSON в JS-объект и выводить его в консоль.
let jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
 `;

const data = JSON.parse(jsonString);
console.log('list', data);
list2 = JSON.stringify(data);

console.log(list2);

// =======================================================================

// Задание 3.

// Напишите код приложения, интерфейс которого представляет собой input и кнопку.
// В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR
// по URL https://loremflickr.com/json/g/320/240/all, где get-параметр limit — это введённое число.


const text = document.querySelector(".text");
const btnSubmit = document.querySelector(".btn-submit");
const form = document.querySelector('form');

function submit(e) {
  e.preventDefault();
  checkInput(form)
  console.log('submitted');
  form.reset;
  // console.log(inputValue.value);
}

function checkInput() {
  let inputValue = document.querySelector(".input-num").value

  console.log(inputValue);
  if (inputValue < 1 || inputValue > 10) {
    text.innerText = 'yep' + ' ' + inputValue;;
  } else {
    text.innerText = 'nope' + ' ' + inputValue;
  }
}



form.addEventListener("submit", submit);
