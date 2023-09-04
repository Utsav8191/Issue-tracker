console.log("project js working")
// Setting up the Add issue btn behavior onClick
let createIssueBtn = document.querySelector('#createIssueBtn');
let issueModal = document.querySelector('.issue-modal-container');
let closeBtn = document.querySelector('#closebtn');
console.log(createIssueBtn);
console.log(issueModal);
console.log(closeBtn);

createIssueBtn.onclick = () => {
    issueModal.style.display = "block";
}
// createIssueBtn.onclick = ()=>{
//     modal.style.display = "block";
// }

closeBtn.onclick = ()=>{
    issueModal.style.display = "none";
}

// If user clicks anywhere outside modal, close it
window.onclick = (event)=>{

    if(event.target == issueModal){
        issueModal.style.display = "none";
    }
}