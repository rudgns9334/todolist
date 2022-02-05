let inputButton = document.querySelector(".button").addEventListener("click",addTODO);
let clearButton = document.querySelector(".clear").addEventListener("click",clear);
let selectDeleteButton = document.querySelector(".s_clear").addEventListener("click",selectDelete);
let key = 1;
let todolist = [];

window.onload = function(){
    if(localStorage.length==0){
        document.querySelector('ol').innerHTML=' ';
    }
    else{
        for(i=1;i<=localStorage.length;i++){
            for(j=0;j<localStorage.length;j++){
                let value = JSON.parse(localStorage.getItem(localStorage.key(j)));
                if(i==value.priority){
                    todolist.push(value.value);
                    key = key + 1;
                    break;
                }    
            }
        }
        showTODO();
    }
}

function showTODO(e){
    let ol = document.querySelector('ol');
    let button;
    ol.innerHTML=' ';
    for(i=0;i<todolist.length;i++){
        let li = document.createElement('li');
        li.innerHTML = '<label class="check"><input type="checkbox"><p class="value">'+todolist[i]+'</p><span class="checkmark"></span></label>';
        ol.appendChild(li);
        //button = document.getElementsByClassName("b_modify");
        //button[i].addEventListener("click",modifyTODO);
    }
    
    document.querySelector(".list").getElementsByClassName.display = 'block';
    
}

// function modifyTODO(e){
//     e.preventDefault();
//     let updatevalue = document.querySelector(".update");
//     updatevalue.value = '';
//     document.getElementById("modify").style.display="block";
//     let update = document.getElementsByClassName("b_update");
//     update[0].addEventListener("click",function(){
//         updateTODO(e.target.value);
//     });
// }

// function updateTODO(value){
//     let updatevalue = document.querySelector(".update");
//     console.log(value);
//     let todo = JSON.parse(localStorage.getItem(todolist[value]));
//     localStorage.removeItem(todolist[value]);
//     todo.value = updatevalue.value;
//     todolist[value] = updatevalue.value;
//     localStorage.setItem(updatevalue.value, JSON.stringify(todo));
//     showTODO();
//     document.getElementById("modify").style.display="none";
// }

function addTODO(e){
    e.preventDefault();
    let todotask = document.querySelector(".todo");
    let todo = {
        'priority' : key,
        'value' : todotask.value
    }
    localStorage.setItem(todotask.value,JSON.stringify(todo));
    todolist.push(todotask.value);
    key = key+1;
    let ol = document.querySelector('ol');
    let li = document.createElement('li');
    li.innerHTML = '<label class="check"><input type="checkbox"><p class="value">'+todo.value+'</p><span class="checkmark"></span></label>';
    ol.appendChild(li);
    document.querySelector(".list").getElementsByClassName.display = 'block';
    todotask.value = '';
}

function selectDelete(e){
    let ol = document.querySelector('ol');
    const mycheck = document.getElementsByTagName("li");
    let leng =mycheck.length;
    let j = -1;
    for(i=0;i<leng;i++){
        j++;
        if(mycheck[j].firstChild.firstChild.checked){
            console.log(mycheck[j].childNodes[0].childNodes[1].innerHTML);
            todolist.splice(j,1);
            localStorage.removeItem(mycheck[j].childNodes[0].childNodes[1].innerHTML);
            mycheck[j].remove();
            j=j-1;
        }
    }
    console.log(todolist);
    let remind = document.getElementsByTagName("li").length;
    localStorage.clear();
    for(i=1;i<=remind;i++){
        let todo = {
            'priority' : i,
            'value' : todolist[i-1]
        }
        localStorage.setItem(todolist[i-1],JSON.stringify(todo));
    }
}

function clear(e){
    key = 1;
    localStorage.clear();
    todolist=[];
    document.querySelector('ol').innerHTML=' ';
}