console.log("Welcome to my Resume Builder!");

var formElement = document.getElementById('resume-form');
var nameDisplayElement = document.getElementById('display-name');
var skillsDisplayElement = document.getElementById('display-skills');
function loadStoredResumeData() {
    var savedName = localStorage.getItem('name');
    var savedSkills = localStorage.getItem('skills');

    if (savedName && savedSkills && nameDisplayElement && skillsDisplayElement) {
        nameDisplayElement.textContent = "Name: ".concat(savedName);
        skillsDisplayElement.textContent = "Skills: ".concat(savedSkills);
    }
}
window.addEventListener('load', loadStoredResumeData);
if (formElement && nameDisplayElement && skillsDisplayElement) {
    formElement.addEventListener('submit', function (event) {
        event.preventDefault(); 

        var nameInput = document.getElementById('name');
        var skillsInput = document.getElementById('skills');
       
        if (nameInput && skillsInput) {
            var name_1 = nameInput.value;
            var skills = skillsInput.value;
        
            localStorage.setItem('name', name_1);
            localStorage.setItem('skills', skills);
        
            if (nameDisplayElement && skillsDisplayElement) {
                nameDisplayElement.textContent = "Name: ".concat(name_1);
                skillsDisplayElement.textContent = "Skills: ".concat(skills);
            }
        
            nameInput.value = '';
            skillsInput.value = '';
        }
        else {
            console.error('Input elements are missing or not found!');
        }
    });
}
else {
    console.error('Form or display elements not found!');
}
