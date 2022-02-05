let inputButton = document.querySelector(".btn-add").addEventListener("click",addTODO);
let clearButton = document.querySelector(".btn-delete").addEventListener("click",clear);
let selectDeleteButton = document.querySelector(".btn-selectdelete").addEventListener("click",selectDelete);
let key = 1;
let todolist = [];

window.onload = function(){
    setClock();
    setInterval(setClock,1000);
    document.getElementById('today').value = new Date().toISOString().substring(0,10);
    if(localStorage.length==0){
        document.querySelector('ol').innerHTML=' ';
    }
    else{
        for(i=1;i<=localStorage.length;i++){
            for(j=0;j<localStorage.length;j++){
                let value = JSON.parse(localStorage.getItem(localStorage.key(j)));
                if(i==value.priority){
                    todolist.push(value);
                    key = key + 1;
                    break;
                }    
            }
        }
        showTODO();
    }
}

function setClock(){
    var dateInfo = new Date(); 
    var hour = modifyNumber(dateInfo.getHours());
    var min = modifyNumber(dateInfo.getMinutes());
    var sec = modifyNumber(dateInfo.getSeconds());
    var year = dateInfo.getFullYear();
    var month = dateInfo.getMonth()+1;
    var date = dateInfo.getDate();
    document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;
    document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
}
function modifyNumber(time){
    if(parseInt(time)<10){
        return "0"+ time;
    }
    else
        return time;
}

function showTODO(e){
    let ol = document.querySelector('ol');
    let button;
    ol.innerHTML=' ';
    for(i=0;i<todolist.length;i++){
        let li = document.createElement('li');
        li.innerHTML = '<label class="check"><input type="checkbox"><p class="value">'+todolist[i].value+'</p><p class="deadline">'+ todolist[i].deadline +'까지</p><span class="checkmark"></span></label>';
        ol.appendChild(li);
        //button = document.getElementsByClassName("b_modify");
        //button[i].addEventListener("click",modifyTODO);0.
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
    let tododate = document.getElementById('today');
    let todotask = document.querySelector(".todo");
    if(todotask.value!=""){
        let todo = {
            'priority' : key,
            'value' : todotask.value,
            'deadline' : tododate.value
        }
        localStorage.setItem(todotask.value,JSON.stringify(todo));
        todolist.push(todotask.value);
        key = key+1;
        let ol = document.querySelector('ol');
        let li = document.createElement('li');
        li.innerHTML = '<label class="check"><input type="checkbox" class="checkbox"><p class="value">'+todo.value+'</p><p class="deadline">'+ todo.deadline +'까지</p><span class="checkmark"></span></label>';
        ol.appendChild(li);
        document.querySelector(".list").getElementsByClassName.display = 'block';
        todotask.value = '';
    }
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
            'value' : todolist[i-1].value,
            'deadline' : todolist[i-1].deadline
        }
        localStorage.setItem(todolist[i-1].value,JSON.stringify(todo));
    }
}

function clear(e){
    key = 1;
    localStorage.clear();
    todolist=[];
    document.querySelector('ol').innerHTML=' ';
}