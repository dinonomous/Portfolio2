const main = document.querySelector(".main_project");
const arrayParent = document.querySelector(".card_array_parent");
const array = document.querySelector(".card_array");
var projects;
let currentSeleted = 0;
var count = 3;

var mainProjectName = document.querySelector(".Projectname");
var mainProjecSkills = document.querySelector(".Project_skills");
var mainProjecDescription = document.querySelector(".project_despription");
var mainProjecGithub = document.querySelector(".project_github");
var mainProjecLink = document.querySelector(".project_link");
var mainProjectTextArea = document.querySelector(".project_textarea");

fetch("project.json")
  .then((response) => response.json())
  .then((projectData) => {
    console.log("fetched");
    projects = projectData.projects;
    projectData.projects.forEach((project, index) => {
      const div = document.createElement("div");
      div.classList.add("custom_card");
      div.id = `card-${index}`;
      div.style.backgroundImage = `url(${project.backgroundImage})`;
      array.appendChild(div);

      div.addEventListener("click", () => {
        currentSeleted = index;
        main.style.backgroundImage = `url(${projects[currentSeleted].backgroundImage})`;
      });
    });
    if (projects.length > 0) {
      updateMainBackground();
    }
    setMainProject()
  });

function updateMainBackground() {
  main.style.backgroundImage = `url(${projects[currentSeleted].backgroundImage})`;
}

function scrollToCurrentSelected() {
  array.scrollTo({
    left: currentSeleted * side,
    behavior: "smooth",
  });
}

function SelectedBackgroundColour(e){
    const a = document.querySelector(`card-${e}`);
    a.style.border = '1px solid yellow'
}

function setMainProject() {
    mainProjectName.innerHTML = ''; // Clear old content
    mainProjecSkills.innerHTML = ''; // Clear old content
    mainProjecDescription.innerHTML = ''; // Clear old content
  
    const mainProjectH1 = document.createElement("h1");
    mainProjectH1.innerHTML = `${projects[currentSeleted].Name}`;
    const mainProjectH2 = document.createElement("h2");
    mainProjectH2.innerHTML = `${projects[currentSeleted].skills.join(" ")}`;
    const mainProjectP = document.createElement("p");
    mainProjectP.innerHTML = `${projects[currentSeleted].Description}`;
  
    mainProjectName.appendChild(mainProjectH1);
    mainProjecSkills.appendChild(mainProjectH2);
    mainProjecDescription.appendChild(mainProjectP);
  
    mainProjecGithub.onclick = () => window.open(projects[currentSeleted].github, '_blank');
    mainProjecLink.onclick = () => window.open(projects[currentSeleted].link, '_blank');
  }

function mainMouseEnter(){
    gsap.to(arrayParent, {
        zIndex: 0,
        duration: 0.3,
        scale: 0.9
    });
    gsap.to(mainProjectTextArea,{
        opacity: 1,
        duration: 0.3,
    })
    gsap.to(main,{
        scale: 1.05,
        duration: 0.3
    })
}
function mainMouseLeave(){
    gsap.to(arrayParent, {
        zIndex: 2,
        duration: 0.3,
        scale: 1
    });
    gsap.to(mainProjectTextArea,{
        opacity: 0,
        duration: 0.3,
    })
    gsap.to(main,{
        scale: 1,
        duration: 0.3
    })
}

function updateCurrentSelected(increment) {
  currentSeleted =
    (currentSeleted + increment + projects.length) % projects.length;
  updateMainBackground();
  scrollToCurrentSelected();
  setMainProject()
}

function scrollPrev() {
  updateCurrentSelected(-1);
}

function scrollNext() {
  updateCurrentSelected(1);
}