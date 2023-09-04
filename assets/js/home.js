console.log("Home script loaded");

let createProjectBtn = document.getElementById('projectform-btn');
console.log(createProjectBtn);
let closeBtn = document.getElementById('closebtn');
let modal = document.getElementById('form-modal');

createProjectBtn.onclick = ()=>{
    modal.style.display = "block";
}

closeBtn.onclick = ()=>{
    modal.style.display = "none";
}

// If user clicks anywhere outside modal, close it
window.onclick = (event)=>{

    if(event.target == modal){
        modal.style.display = "none";
    }
}