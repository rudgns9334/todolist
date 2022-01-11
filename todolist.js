let inputButton = document.querySelector(".button").addEventListener("click",addTODO);
let clearButton = document.querySelector(".clear").addEventListener("click",clear);
let selectDeleteButton = document.querySelector(".s_clear").addEventListener("click",selectDelete);
let key = 1;

window.onload = function(){
    if(localStorage.length==0){
        document.querySelector('ol').innerHTML=' ';
    }
    else{
        for(i=1;i<=localStorage.length;i++){
            let value = localStorage.getItem(i);
            key = i+1;
            showTODO(value);
        }
    }
}

function showTODO(value){
    let ol = document.querySelector('ol');
    let li = document.createElement('li');
    li.innerHTML = '<label class="check"><input type="checkbox"><label class="value">'+value+'</label><span class="checkmark"></span></label>';
    ol.appendChild(li);
    document.querySelector(".list").getElementsByClassName.display = 'block';
}

function addTODO(e){
    e.preventDefault();
    let todotask = document.querySelector(".todo");
    let value = todotask.value;
    localStorage.setItem(key,value);
    key = key+1;
    todotask.value = '';
    showTODO(value);
}

function selectDelete(e){
    let ol = document.querySelector('ol');
    const mycheck = document.getElementsByTagName("li");
    let leng =mycheck.length;
    let j = -1;
    console.log(localStorage[1]);
    for(i=0;i<leng;i++){
        j++;
        if(mycheck[j].firstChild.firstChild.checked){
            mycheck[j].remove();
            //localStorage.removeItem(i+1);
            j=j-1;
        }
    }
}
/*
function checkTODO(e){
    let todo = e.target.nextSibling;
    if(e.target.checked){
        todo.style.textDecoration = "line-through";
    }
    else{
        todo.style.textDecoration = "none";
    }
}
*/

function clear(e){
    key = 1;
    localStorage.clear();
    document.querySelector('ol').innerHTML=' ';
}