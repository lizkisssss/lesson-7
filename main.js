console.log(Handlebars)

const userTemplate = document.querySelector('#user-template');

console.log(userTemplate.innerHTML);

var template = Handlebars.compile(userTemplate.innerHTML);

console.log(template)

const userData = {
  name: "John Smith",
  email: "john@example.com",
};

// const markup = template(userData)

// console.log(markup);

import templateFunction from './template/template.hbs';
import countries from './countries'


const list = document.querySelector(".contries")
// const markup = templateFunction({countries: countries});
const markup = templateFunction(countries);
list.innerHTML = markup;

console.log(markup);
//document.body.innerHTML = 