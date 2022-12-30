let nine = document.querySelector('#text9');
let saveButton9 = document.querySelector('#save9');
let ten = document.querySelector('#text10');
let saveButton10 = document.querySelector('#save10');
let eleven = document.querySelector('#text11');
let saveButton11 = document.querySelector('#save11');
let twelve = document.querySelector('#text12');
let saveButton12 = document.querySelector('#save12');
let one = document.querySelector('#text1');
let saveButton1 = document.querySelector('#save1');
let two = document.querySelector('#text2');
let saveButton2 = document.querySelector('#save2');
let three = document.querySelector('#text3');
let saveButton3= document.querySelector('#save3');
let four = document.querySelector('#text4');
let saveButton4 = document.querySelector('#save4');

// To display current date
var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY"));
// To display current time
var time = dayjs();
$("#currentTime").text(today.format("h:mm:ss a"));

// This will make the stored data to remain after page refresh until the data is clear on the local storage
nine.innerHTML = localStorage.getItem("textinput9");
// This will create input event listtener ....
nine.addEventListener('input',  letter9 => {
  nine.textContent = letter9.target.value 
})
// // How to save to local storage ....
let saveToLocalStorage9 = () => {
 localStorage.setItem('textinput9', nine.textContent)

// How to get data from local storage ...
nine.innerHTML = localStorage.getItem("textinput9");
}
saveButton9.addEventListener('click', saveToLocalStorage9);

////////
// This will make the stored data to remain after page refresh until the data is clear on the local storage

ten.innerHTML = localStorage.getItem("textinput10");
// This will create input event listtener ....
ten.addEventListener('input',  letter10 => {
  ten.textContent = letter10.target.value 
})
// // How to save to local storage ....
let saveToLocalStorage10 = () => {
 localStorage.setItem('textinput10', ten.textContent)

// How to get data from local storage ...
ten.innerHTML = localStorage.getItem("textinput10");
}
saveButton10.addEventListener('click', saveToLocalStorage10);



////
// This will make the stored data to remain after page refresh until the data is clear on the local storage
eleven.innerHTML = localStorage.getItem("textinput11");
// This will create input event listtener ....
eleven.addEventListener('input',  letter11 => {
  eleven.textContent = letter11.target.value 
})
// // How to save to local storage ....
let saveToLocalStorage11 = () => {
 localStorage.setItem('textinput11', eleven.textContent)

// How to get data from local storage ...
eleven.innerHTML = localStorage.getItem("textinput11");
}
saveButton11.addEventListener('click', saveToLocalStorage11);

///
// This will make the stored data to remain after page refresh until the data is clear on the local storage
twelve.innerHTML = localStorage.getItem("textinput12");
// This will create input event listtener ....
twelve.addEventListener('input',  letter12 => {
  twelve.textContent = letter12.target.value 
})
// // How to save to local storage ....
let saveToLocalStorage12 = () => {
 localStorage.setItem('textinput12', twelve.textContent)

// How to get data from local storage ...
twelve.innerHTML = localStorage.getItem("textinput12");
}
saveButton12.addEventListener('click', saveToLocalStorage12);

//////
// This will make the stored data to remain after page refresh until the data is clear on the local storage
one.innerHTML = localStorage.getItem("textinput1");
// This will create input event listtener ....
one.addEventListener('input',  letter1 => {
  one.textContent = letter1.target.value 
})
// // How to save to local storage ....
let saveToLocalStorage1 = () => {
 localStorage.setItem('textinput1', one.textContent)

// How to get data from local storage ...
one.innerHTML = localStorage.getItem("textinput1");
}
saveButton1.addEventListener('click', saveToLocalStorage1);

////////
// This will make the stored data to remain after page refresh until the data is clear on the local storage
two.innerHTML = localStorage.getItem("textinput2");
// This will create input event listtener ....
two.addEventListener('input',  letter2 => {
  two.textContent = letter2.target.value 
})
// // How to save to local storage ....
let saveToLocalStorage2 = () => {
 localStorage.setItem('textinput2', two.textContent)

// How to get data from local storage ...
two.innerHTML = localStorage.getItem("textinput2");
}
saveButton2.addEventListener('click', saveToLocalStorage2);

////////
// This will make the stored data to remain after page refresh until the data is clear on the local storage
three.innerHTML = localStorage.getItem("textinput3");
// This will create input event listtener ....
three.addEventListener('input',  letter3 => {
  three.textContent = letter3.target.value 
})
// // How to save to local storage ....
let saveToLocalStorage3 = () => {
 localStorage.setItem('textinput3', three.textContent)

// How to get data from local storage ...
three.innerHTML = localStorage.getItem("textinput3");
}
saveButton3.addEventListener('click', saveToLocalStorage3);

/////////
// This will make the stored data to remain after page refresh until the data is clear on the local storage
four.innerHTML = localStorage.getItem("textinput4");
// This will create input event listtener ....
four.addEventListener('input',  letter4 => {
  four.textContent = letter4.target.value 
})
// // How to save to local storage ....
let saveToLocalStorage4 = () => {
 localStorage.setItem('textinput4', four.textContent)

// How to get data from local storage ...
four.innerHTML = localStorage.getItem("textinput4");
}
saveButton4.addEventListener('click', saveToLocalStorage4);





