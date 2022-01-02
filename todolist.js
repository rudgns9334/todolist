let inputButton = document.querySelector(".button").addEventListener("click",addTODO);

function addTODO(e){
    e.preventDefault();
    let todotask = document.querySelector(".todo");
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let value = todotask.value;
    li.innerHTML = value;
    ul.appendChild(li);
    document.querySelector(".list").getElementsByClassName.display = 'block';
    todotask.value = '';
}