console.log("Welcome to my Resume Builder!");

const formlement = document.getElementById('resume-form') as HTMLFormElement | null;
const namDisplayElement = document.getElementById('display-name') as HTMLParagraphElement | null;
const skillDisplayElement = document.getElementById('display-skills') as HTMLParagraphElement | null;


function loadStoreResumeData() {
  const savedName = localStorage.getItem('name');
  const savedSkills = localStorage.getItem('skills');

  
  if (savedName && savedSkills && nameDisplayElement && skillsDisplayElement) {
    nameDisplayElement.textContent = `Name: ${savedName}`;
    skillsDisplayElement.textContent = `Skills: ${savedSkills}`;
  }
}


window.addEventListener('load', loadStoredResumeData);

if (formElement && nameDisplayElement && skillsDisplayElement) {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    const skillsInput = document.getElementById('skills') as HTMLInputElement | null;

    if (nameInput && skillsInput) {
      const name = nameInput.value;
      const skills = skillsInput.value;

      localStorage.setItem('name', name);
      localStorage.setItem('skills', skills);

      if (nameDisplayElement && skillsDisplayElement) {
        nameDisplayElement.textContent = `Name: ${name}`;
        skillsDisplayElement.textContent = `Skills: ${skills}`;
      }
    
      nameInput.value = '';
      skillsInput.value = '';
    } else {
      console.error('Input elements are missing or not found!');
    }
  });
} else {
  console.error('Form or display elements not found!');
}
