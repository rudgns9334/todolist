let inputButton = document.querySelector(".button").addEventListener("click",addTODO);
let clearButton = document.querySelector(".clear").addEventListener("click",clear);
let key = 0;

window.onload = function(){
    if(localStorage.length==0){
        document.querySelector('ul').innerHTML=' ';
    }
    else{
        for(i=0;i<localStorage.length;i++){
            let value = localStorage.getItem(i);
            key = i+1;
            showTODO(value);
        }
    }

}

function showTODO(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = value;
    ul.appendChild(li);
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

function clear(e){
    key = 0;
    localStorage.clear();
    let ul = document.querySelector('ul').innerHTML=' ';
}