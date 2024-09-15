// Get references to the form & display area.

const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle form submission

form.addEventListener('submit', (event:Event) => {
    event.preventDefault(); //prevent page reload

    // Collect input values
    const userName = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phoneNumber = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${userName}</p>
    <p><b>Name:</b>${email}</p>
    <p><b>Name:</b>${phoneNumber}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Education</h3>
    <p>${experience}</p>

    <h3>Education</h3>
    <p>${skills}</p>
    `;

    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    } else{console.error('The resume display element is missing.');
    }
})