// logic to trigger the search issue button onclick
// fetching required elements

let searchIssue_btn = document.getElementById('searchIssue');

let searchIssue_form = document.querySelector('.searchfilter-container-main');

let closebtn = document.getElementById('closebtn2');

searchIssue_btn.onclick = () => {
    searchIssue_form.style.display = "block";
}

// If user clicks anywhere outside modal, close it
window.onclick = (event)=>{

    if(event.target == searchIssue_form){
        searchIssue_form.style.display = "none";
    }
}

// ------------------------- ***** -------------------------- //

// Search filter logic here

// form
let searchfilter_form = document.getElementById('search-issue_form');

// Fetching all the issues
let issues_data = document.getElementById('issue-data').getAttribute('data');
let all_issues = JSON.parse(issues_data);

let DisplayElem = document.getElementById('filterResult-container');



searchfilter_form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let searchedIssues = [];

    // getting all form data
    let titleValue = document.getElementById('title-search').value;
    // getting checkbox values
    let checkbox_values = document.querySelectorAll('input[name=search_checkbox]');
    let checked_inputs = [...checkbox_values].filter((elem)=> elem.checked);
    let [...labelsArr] = checked_inputs.map((elem)=> elem.value)
    console.log(labelsArr);

    // Adding issues to SearchedIssues Array
    all_issues.map((elem)=> {
        if(elem.title === titleValue) {
            if(!searchedIssues.includes(elem)) {
                searchedIssues.push(elem);
            }
        }

        labelsArr.map((label)=> {
            // elem.labels.map((minElem) => {
            //     if(minElem === label) {
            //          
            //     }
            // })

            if(elem.labels.includes(label)){
                // if(!searchedIssues.includes(elem)) {
                    searchedIssues.push(elem);
                
            }
        })
    })

    // To display the filtered issues
    DisplayElem.style.display = "flex";

    for (let issue of searchedIssues) {
        DisplayElem.innerHTML = 
    `<div class="filtered_issue">
        <p class="issue-title">Title: <span class="issue-content">${issue.title}</span></p>
        <p class="issue-title">Description: <span class="issue-content">${issue.description}</span></p>
        <p class="issue-title">Author: <span class="issue-content">${issue.author}</span></p>
    </div>`;
    }

})

closebtn.onclick = ()=> {
    searchIssue_form.style.display = "none";
    searchedIssues = [];
    DisplayElem.innerHTML = ``;
}