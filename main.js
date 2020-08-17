// var headTask = document.getElementById('header');
// //headTask.style.color = '#ff0000';
// //headTask.textContent = 'This is a test subject';
// headTask.innerHTML = '<span style="color:red"> New Task </span>';

// var headTask = document.querySelector("#header");
// console.log(headTask);
// headTask.style.color = "red";

// var listitem = document.querySelector("li:nth-child(3)");
// listitem.style.background = "lightgrey";
// const items = document.getElementsByClassName("item");

// for (i = 0; i < items.length; i++) {
//   if (i % 2 === 0) {
//     items[i].style.background = "#00b386";
//     items[i].textContent = i + 1 + ". This one is odd";
//   } else {
//     items[i].style.background = " #008060";
//     items[i].textContent = i + 1 + ". This one is even";
//   }
//   items[i].style.color = "white";
// }
// var a = [10, 9];
// console.log(typeof a);
// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(typeof lis[0]);
// lis = Array.from(lis);
// console.log(lis);
// console.log(typeof lis);
// //............ by sending li object through a function as a argument in foreach funtion.........//
// console.log("this one is for each type");
// lis.forEach(function (li, index) {
//     console.log(li);
//     // li.textContent = "${index}:Hello world";
// });
// //.............by normal array type thoufh thses lis items are object.................///
// console.log("this one is loop type");
// for (i = 0; i < lis.length; i++) {
//     console.log(lis[i]);
//     lis[i].textContent = i + 1 + ": Hello World";
// }
// let text = document.querySelectorAll('li');
// text.forEach(function (li) {
//     li.style.color = "#333";
//     li.textContent = "hello";

// });
// let evenItems = document.querySelectorAll('li:nth-child(even)');
// evenItems.forEach(function (li) {
//     li.style.background = "#f4f4f4";
// });
// console.log(evenItems);
// let oddItems = document.querySelectorAll('li:nth-child(odd)');
// for (let i = 0; i < oddItems.length; i++) {
//     oddItems[i].style.background = '#ccc';
// }
// let val = document.querySelector('ul');
// // console.log(val.children[0]);
// // console.log(typeof val.children);
// // val.children[0].textContent = 'hello';
// let value = val.children;

// value = Array.from(value);
// console.log(value);
// console.log(value[0].children[0]);
// value[0].children[0].id = 'listItem'
// value[0].children[0].textContent = 'Hello';
// // console.log(value[3].children[0]);
// // //value[0].children[0].id = 'lableItem';
// // console.log(value[0].children[0]);
// console.log(value[0].children[0].id);
// //console.log(val.children[0].children[0]);
// // val.children[0].children[0].id = 'ListThem';
// // console.log(val.children[0].children[0].id);
// console.log(val.childElementCount);  
// let listItem = document.createElement('li');// creating an item
// console.log(listItem);


// listItem.className = 'item';// giving this item a class
// //listItem.textContent = 'Hello world';
// //listItem.innerHTML = ' <lable class="items">Hello World</lable><a href="#"><i class="fas fa-times"></i></a>'
// //document.querySelector('ul').appendChild(listItem);
// // for (let i = 1; i <= 4; i++) {
// //     listItem[i].innerHTML = '<lable class="items">extra</lable><a href="#"><i class="fas fa-times"></i><a>';

// // }
// // document.querySelector('ul').appendChild(listItem);
// listItem.forEach(function (li) {
//     li.innerHTML = '<lable class="items">extra</lable> <a href="#"><i class="fas fa-times"></i><a>';
// })
// for (let i = 0; i < 5; i++) {

//     var listItem = document.createElement('li');
//     listItem.className = 'item';
//     listItem.innerHTML = '<lable class="items">Hello World</lable><a href="#"><i class="fas fa-times"></i><a>';
//     document.querySelector('ul').appendChild(listItem);
// }
// var listItem = document.createElement('li');
// listItem.className = 'item';
// var lable_newTask = document.createElement('label');
// lable_newTask.className = 'items';
// var lable = lable_newTask.appendChild(document.createTextNode('Hello World'));
// var link = document.createElement('a');
// link.innerHTML = '<i class="fas fa-times"></i>';
// listItem.appendChild(link);
// listItem.appendChild(lable);
// document.querySelector('ul').appendChild(listItem);
// console.log(listItem.appendChild(lable));
// console.log(listItem.appendChild(link));

// console.log(listItem);
//.....................Adding more 5 list items...........................
// for (i = 0; i < 5; i++) {
//     var li = document.createElement('li');
//     li.className = 'item';
//     var lable = document.createElement('lable').appendChild(document.createTextNode('Hello world'));
//     var link = document.createElement('a');
//     link.href = '#';
//     link.innerHTML = '<i class="fas fa-times"></i>';
//     li.appendChild(lable);
//     li.appendChild(link);
//     document.querySelector('ul').appendChild(li);
// }
//,...................replacing an element.........................
// var newHeading = document.createElement('h1');

// newHeading.id = "Newheading";
// //..............appendChild Method......................
// newHeading.appendChild(document.createTextNode('NEW TASKS'));
// //.................textContent Method.......................
// newHeading.textContent = 'NEW TASKS';
// console.log(newHeading);
// var oldHeading = document.getElementById('heading');
// var lower = document.querySelector('.lower');
// lower.replaceChild(newHeading, oldHeading);
// newHeading.style.color = 'red';
//...................remove Element.........................
// var listItem = document.querySelectorAll('li');
// var List = document.querySelector('ul');
// listItem[0].remove();
// List.removeChild(listItem[3]);
//.........add class..........
// var val;
// listItem = document.querySelector('li:first-child');
// //listItem.className = " item newItem";
// //console.log('listItem');
// val = listItem.className;
// val = listItem.classList;
// //val = listItem.classList[0];
// listItem.classList.add('test');
// listItem.classList.remove('test');
// console.log(val);
// console.log(typeof val);

// const list = document.querySelector('ul');
// const listItem = document.createElement('li');
// const link = document.createElement('a');
// link.id = 'link';
// //const text = document.createTextNode('Hello world');
// const text = document.createElement('label');
// text.textContent = 'Hello World';
// text.style.color = 'red';
// link.setAttribute('href', '#');
// link.innerHTML = '<i class="fas fa-times"></i>';
// listItem.classList.add('item');
// listItem.appendChild(text);
// listItem.appendChild(link);
// list.appendChild(listItem);
// //................................Event Listener............................
// const listItems = document.querySelector('ul');
// //console.log(document.querySelectorAll('#link'));

// //console.log(links[1]);
// // for (i = 0; i < document.querySelectorAll('a').length; i++) {
// //     document.querySelectorAll('a').addEventListener('click', function () {
// //         listItems.removeChild([i]);
// //     })
// // }
// document.querySelector('.btn_dark').addEventListener('click', onClick);
// function onClick(e) {
//     let val;
//     val = e.target;
//     val = e.target.classList;
//     //e.target.innerText = 'hello';
//     val = e.type;
//     val = e.clientY;
//     console.log(val);
// }
//...........................Mouse Events.......................
/*
1.click
2.dblclick
3.mousedown
4.mouseup
5.mouseenter
6.mouseleave
7.mouseover
8.mouseout
9.mousemove
*/
// const clearBtn = document.querySelector('.btn_dark');
// const main = document.querySelector('.main');
// const heading = document.querySelector('#heading');
// var lis = document.querySelectorAll('li');

// //click
// // clearBtn.addEventListener('click', runEvent);

// // doubleClick
// // clearBtn.addEventListener('dblclick', runEvent);
// // mouseDown

// //clearBtn.addEventListener('mousedown', runEvent);
// main.addEventListener('mousemove', runEvent);
// //clearBtn.addEventListener('click', runEventClick);
// // clearBtn.addEventListener('mouseup', runEventUp);
// //Event Handler
// function runEvent(e) {
//     //console.log('Event Type:%s', e.type);
//     //list.removeChild(lis[5]);
//     //console.log('hello world');
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
//     heading.innerText = `MouseX:${e.offsetX} MouseY:${e.offsetY}`;
// }
// function runEventClick(e) {
//     //console.log('Event Type:%s', e.type);
//     list.removeChild(lis[5]);
//     //console.log('hello world');
//     // heading.textContent = `MouseX:${e.offsetX} MouseY:${e.offsetY}`;
// }
// function runEventUp(e) {
//     //console.log('Event Type:%s', e.type);
//     //list.removeChild(lis[5]);
//     console.log('');

// }


// }
// if (clearBtn.addEventListener('mouseup', runEvent) === true) {
//     function runEvent(e) {
//         //console.log('Event Type:%s', e.type);
//         //list.removeChild(lis[5]);
//         console.log('');



//     }
// }
// if (clearBtn.addEventListener('mousedown', runEvent) === true) {
//     function runEvent(e) {
//         //console.log('Event Type:%s', e.type);
//         //list.removeChild(lis[5]);
//         console.log('Hello World');



//     }

//...............kyeevents................
/*
1.submit
2.keydown
3.keyup
4.input
5.cut
6.paste
7.keypress
8.focus
9.blur
10.change
*/
// const form = document.querySelector('form');
// const taskInput = document.querySelector('input');
// const heading = document.getElementById('heading');
// //form.addEventListener('submit', runEvent);
// //taskInput.addEventListener('input', runEvent)
// const select = document.querySelector('select');
// select.style.marginTop = '20px';
// //select.style.padding = '0px 50px';

// select.addEventListener('change', runEvent);
// function runEvent(e) {
//     console.log(`Event type:${e.type}`);
//     console.log(e.target.value);
//     //e.preventDefault();
//     heading.innerText = e.target.value;
// } 
// document.body.addEventListener('click', deleteItem);
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function deleteItem(e) {

//     if (e.target.classList.contains('btn_light')) {
//         const link = document.createElement('a');
//         const text = document.createElement('label');
//         const listItem = document.createElement('li');
//         listItem.className = 'item';
//         link.id = 'link';
//         link.style.cursor = 'pointer';
//         link.innerHTML = '<i class="fas fa-times"></i>';
//         text.textContent = input.value;
//         listItem.appendChild(text);
//         listItem.appendChild(link);
//         list.appendChild(listItem);
//         e.preventDefault();

//     }


//     if (e.target.parentElement.id === 'link') {
//         e.target.parentElement.parentElement.remove();
//     }
// }





// //...............local storage............................
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// // //sessionStorage.setItem('name', 'Beth');
// // remove from local storage
// //localStorage.removeItem('age');
// // get from storage
// // let name = localStorage.getItem('name');
// // //console.log(name);
// // let age = localStorage.getItem('age');
// //console.log(age);
// localStorage.clear();
// //console.log(name, age);

// const form = document.querySelector('.task');

// form.addEventListener('submit', addTostorage);

// function addTostorage(e) {


//     const task = document.querySelector('#taskInput').value;

//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     }

//     else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     task = '';

//     e.preventDefault();
// }
// const tasks = JSON.parse(localStorage.getItem('tasks'));
// tasks.forEach(function (task) {
//     console.log(task);
// })




// .........................MAIN PROJECT............................................
// Define UI variable
const form = document.querySelector('.task');
const list = document.querySelector('ul');
const clearBtn = document.querySelector('.btn_dark');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#taskInput');


//..............................................load all event listener.............................

loadEventListeners();



// .........................................load All event listener function.............................
function loadEventListeners() {

    //load dom 
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add task event
    form.addEventListener('submit', addTask);
    // remove task event
    list.addEventListener('click', removeItem);
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter task event
    filter.addEventListener('keyup', filterTasks);
}



//.............................load DOM by using Get task functions........................
function getTasks() {
    let tasks = [];
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        const text = document.createElement('span');
        link.id = 'link';
        link.style.cursor = 'pointer'
        link.innerHTML = '<i class="fas fa-times">';
        text.textContent = task;
        listItem.className = 'item';
        text.style.width = '90%';
        text.style.overflowX = 'hidden';
        //text.style.overflowY = 'hidden';
        // adding text and link to listitem
        listItem.appendChild(text);
        listItem.appendChild(link);
        //adding listitem in the list
        list.appendChild(listItem);
    })
}





//...........................add task elemnt function..................................
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a Task');
    }
    //......................................... creating elements.....................................
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const text = document.createElement('span');
    link.id = 'link';
    link.style.cursor = 'pointer'
    link.innerHTML = '<i class="fas fa-times">';
    text.textContent = taskInput.value;
    listItem.className = 'item';
    text.style.width = '90%';
    text.style.overflowX = 'hidden';
    //text.style.overflowY = 'hidden';
    // adding text and link to listitem
    listItem.appendChild(text);
    listItem.appendChild(link);
    //adding listitem in the list
    list.appendChild(listItem);

    storeTostorage(taskInput.value);

    //console.log(listItem);
    //text.textContent = '';
    //reseting the input value
    taskInput.value = '';

    e.preventDefault();
}
//......... function store to storage...............
function storeTostorage(task) {
    let tasks = [];
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//............................ remove item function.......................
function removeItem(e) {
    if (e.target.parentElement.id === 'link') {
        //console.log('hi');
        //............................confirms to remove item..........................
        if (confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();
            // remove form local storage function
            removefromls(e.target.parentElement.parentElement);

        }
    }

}


//......................Remove from local storage function..........
function removefromls(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
        if (task === taskItem.textContent) {
            tasks.splice(index, 1);
        }

    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


//.............................clear task items function...........................

function clearTasks() {
    //...........................for loop system using listitems.........................
    // const NewlistItem = document.querySelectorAll('li');
    // for (let i = 0; i < NemlistItem.length; i++) {
    //     listItem1[i].remove();
    // }


    //..........................for loop system using ul..............................
    // const NewlistItem1 = document.querySelectorAll('li');
    // for (let i = 0; i < NewlistItem.length; i++) {
    //     list.removeChild(listItem1[i]);
    // }



    //........................using innerhtml system..............................
    //list.innerHTML = '';


    //.......................using removing 1st chile system by useing while loop......................
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    //.......................clear task from storage............................
    clearTaskfromLS();
}


//.........................clear task from local storage function..................

function clearTaskfromLS() {
    localStorage.clear();
}


function filterTasks(e) {
    const filterText = e.target.value.toLowerCase();
    //console.log(filterText);
    const listItems = document.querySelectorAll('.item');
    listItems.forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(filterText) != -1) {
            task.style.display = 'flex';
        }
        else {
            task.style.display = 'none';
        }
    })

    //console.log(text);

}