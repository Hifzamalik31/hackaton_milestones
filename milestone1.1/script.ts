const toggleButton= document.getElementById ("toggle-skills") as HTMLButtonElement
const skills = document.getElementById("Skills") as HTMLButtonElement
toggleButton.addEventListener("click", ()=>{
    if(skills.style.display === "none") {
        skills.style.display ="black"
    }else {
        skills.style.display = "none"
    }
});
