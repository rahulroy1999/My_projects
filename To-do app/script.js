const input = document.getElementById('it')
const con = document.getElementById('list-container')

function add(){
    if(input.value==""){
        alert('Please enter something')
    }
    else{
        const li = document.createElement('li')
        li.innerHTML=input.value
        con.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input.value = ""
    saveData()
}
con.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
},false)
function saveData(){
    localStorage.setItem("data",con.innerHTML)
}
function showTask(){
    con.innerHTML=localStorage.getItem("data")
}
showTask()