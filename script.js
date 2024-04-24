const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addList(){
    if(inputBox.value === ''){
        alert('kindly input your location');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('contain');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
    
}
showTask();




// let input = document.querySelector(".entered-list");
// let addBtn =  document.querySelector(".add-list")
// let tasks = document.querySelector(".tasks")

// input.addEventListener('keyup', () =>{
//     if(input.value.trim() !== 0){
//         addBtn.classList.add('active')
//     } else {
//         addBtn.classList.remove('active')
//     }
// })

// addBtn.addEventListener('click', () => {
//     if (input.value.trim() !== 0) {
//         let newItem = document.createElement('div');
//         newItem.classList.add('item');
//         newItem.innerHTML = `
//             <p>${input.value}</p>
//             <div class="item-btn">
//                 <i class="fa-solid fa-pen-to-square"></i>
//                 <i class="fa-solid fa-x"></i>
//             </div>
//         `;
        
//         tasks.appendChild(newItem);
//         input.value = '';   
//     } else {
//         alert('Please enter a new task')
//     }
// });