const skillParent = document.querySelector(".skill_card_parent");

fetch("skills.json")
    .then((response) => response.json())
    .then((data) => {
        const skillCards = data.skills.map((skill) => {
            const skillCard = document.createElement("div");
            skillCard.classList.add("skill_card");

            const skillH1 = document.createElement("span");
            skillH1.classList.add("skill_cardh1");

            const skillTitle = document.createElement("h1");
            skillTitle.textContent = skill.title;

            const skillPercentage = document.createElement("h3");
            skillPercentage.textContent = `${skill.percentage}%`;

            skillH1.appendChild(skillTitle);
            skillH1.appendChild(skillPercentage);

            const skillH2 = document.createElement("span");
            skillH2.classList.add("skill_cardh2");

            const skillDescription = document.createElement("h2");
            skillDescription.textContent = skill.description;

            skillH2.appendChild(skillDescription);

            const progress = document.createElement("div");
            progress.classList.add("progress");
            progress.setAttribute("role", "progressbar");
            progress.setAttribute("aria-label", "Basic example");
            progress.setAttribute("aria-valuenow", skill.percentage);
            progress.setAttribute("aria-valuemin", "0");
            progress.setAttribute("aria-valuemax", "100");
            progress.style.position = "relative";
            progress.style.overflow = "visible";

            const progressCircle = document.createElement("div");
            progressCircle.classList.add("progress-circle");
            progressCircle.style.height = "20px";
            progressCircle.style.width = "20px";
            progressCircle.style.borderRadius = "50%";
            progressCircle.style.marginLeft = `calc(${skill.percentage}% - 10px)`;
            progressCircle.style.position = "absolute";
            progressCircle.style.marginTop = "-5px";
            progressCircle.style.zIndex = "1";

            const progressBar = document.createElement("div");
            progressBar.classList.add("progress-bar");
            progressBar.style.width = `${skill.percentage}%`;

            progress.appendChild(progressCircle);
            progress.appendChild(progressBar);

            skillCard.appendChild(skillH1);
            skillCard.appendChild(skillH2);
            skillCard.appendChild(progress);

            return skillCard;
        });

        skillCards.forEach((skillCard) => skillParent.appendChild(skillCard));
    })
    .catch((error) => console.error("Error fetching skills:", error));
