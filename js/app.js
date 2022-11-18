import data from './data.js';
// console.log(data);

/*=================== load header data ===================*/
const header = document.querySelector('.header');
const headerData = data[0].profile[0];
header.innerHTML = `
            <div class="header-content">
                <div class="header-photo">
                    <img src="${headerData.img}" alt="Safikur Rahman">
                </div>
                <div class="header-title">
                    <h2>${headerData.name}</h2>
                    <h4>${headerData.designation}</h4>
                </div>
            </div>

            <ul class="main-menu" style="display: none;">
                <li class="item">
                    <i class="fa-regular fa-home"></i>
                    <span>home</span>
                </li>
            </ul>
            <div class="social-links">
                <ul class="links">
                   
                </ul>
            </div>
 
            <div class="header-button">
                <a href="#" target="_blank" class='btn-primary'>${headerData.download}</a>
            </div>
 
            <footer class="footer">
                <p>&copy; <span class='year'></span> ${headerData.copyRight}</p>
            </footer>
`;
/*==================== Header social media links data load ====================*/
const socialLinks = document.querySelector('.links');
// console.log(socialLinks);
const social = data[0].profile[0].socialLinks;
const links = social.map(link => {
    return `
        <li>
            <a href="${link.social}" target="_blank" title="">
                <i class="${link.icon}"></i>
            </a>
        </li>
    `;
})
socialLinks.innerHTML = links.join('');
/* ==================== footer fullYear ====================*/
const fullYear = new Date().getFullYear();
const year = document.querySelector('.year');
const getFullYear = new Date().getFullYear();
year.textContent = getFullYear;
/*=================== header data end===================*/


/*=================== home load data start===================*/
const titleBlock = document.querySelector('.title-block');
const title = data[2].home[0];
titleBlock.innerHTML = `
    <h1>${title.name}</h1>
    <h4>${title.frontend}</h4>
`;
/*=================== home load data end===================*/

/*=================== about data load start===================*/
// page title
const pageTitle = document.querySelector('.about-title');
const aboutTitle = data[3];
pageTitle.innerHTML = `
    <h2>${aboutTitle.pageTitle} <span>${aboutTitle.ques}</span> </h2>
`
// page description 
const description = document.querySelector('.desc');
const descInfo = data[3].about[0].aboutDesc;
description.innerHTML = `
    <p>${descInfo}</p>
`;
// about list info 
const list = document.querySelector('.list');
const listInfo = data[3].about[0].aboutInfo;
const lists = listInfo.map(list => {
    return `
   <li>
        <span class="title">${list.title}</span>
        <span class="value">${list.value}</span>
    </li>
   `;
});
list.innerHTML = lists.join('');

// fun facts title 
const subTitle = document.querySelector('.sub-title');
const sub = data[3].about[0];
subTitle.innerHTML = `
    <h3>${sub.subTitle} <span>${sub.fact}</span></h3>
`;

// fun container 
const funContainer = document.querySelector('.fun-container');
const funData = data[3].about[0].funFact;
const funFacts = funData.map(data => {
    return `
    <div class="fun-fact">
        <i class="${data.icon}"></i>
        <h4>${data.title}</h4>
        <span class="fun-value">${data.value}</span>
    </div>
    `;
});
funContainer.innerHTML = funFacts.join('')

/*=================== about data load end===================*/

/*=================== resume data load start===================*/
// page title 
const resumeTitle = document.querySelector('.resume-title');
const resume = data[4];
resumeTitle.innerHTML = `<h2>${resume.pageTitle}</h2>`;
// sub title 
const education = document.querySelector('.education-title');
const experience = document.querySelector('.experience-title');

const educationTitle = data[4].resume[0].educations.subTitle;
education.innerHTML = `<h4>${educationTitle}</h4>`;

const experienceTitle = data[4].resume[0].experiences.subTitle;
experience.innerHTML = `<h4>${experienceTitle}</h4>`;
// timeline education 
const timelineEducation = document.querySelector('.education-timeline');
const itemData = data[4].resume[0].educations.education;
const timelineItem = itemData.map(item => {
    return `
    <div class="timeline-item">
        <div class="left-part">
            <h6 class="pass-item">${item.passingYear}</h6>
            <span class="item-company">${item.course}</span>
        </div>
        <div class="divider"></div>
        <div class="right-part">
            <h5>${item.title}</h5>
            <p>${item.educationInfo}</p>
        </div>
    </div>
    `;
});
timelineEducation.innerHTML = timelineItem.join('');
// timeline experience
const timelineExperience = document.querySelector('.experience-timeline')
const experienceData = data[4].resume[0].experiences.experience;
const experienceItem = experienceData.map(item => {
    return `
    <div class="timeline-item">
        <div class="left-part">
            <h6 class="pass-item">${item.current}</h6>
            <span class="item-company">${item.year}</span>
        </div>
        <div class="divider"></div>
        <div class="right-part">
            <h5>${item.title}</h5>
            <p>${item.experienceInfo}</p>
        </div>
    </div>
    `;
})
timelineExperience.innerHTML = experienceItem.join('');
/*=================== resume data load end===================*/

/*=================== skills data load start===================*/
// title 
const skillsTitle = document.querySelector('.skills');
const skills = data[6];

skillsTitle.innerHTML = `<h2>${skills.pageTitle}<span>${skills.s}</span></h2>`;
// frontend skills 
const frontendIcon = document.querySelector('.frontend-icon');
const icon = data[6].skills[0];
frontendIcon.innerHTML = `<h4>
    <i class="${icon.icon}" ></i>
</h4>`;

const frontendData = data[6].skills[0].frontendTech;
const frontendSkills = document.querySelector('.frontend-skills');
const skillsData = frontendData.map(skills => {
    return `<li>${skills}</li>`;
});
frontendSkills.innerHTML = skillsData.join('');
// backend skills
const backendIcon = document.querySelector('.backend-icon');
const layer = data[6].skills[1];
backendIcon.innerHTML = `
    <h4><i class="${layer.icon}" ></i></h4>
`;

const backendSkills = document.querySelector('.backend-skills');
const backendData = data[6].skills[1].backendTech;
const backend = backendData.map(backend => {
    return `<li>${backend}</li>`;
});
backendSkills.innerHTML = backend.join('')
/*=================== skills data load end===================*/

/*=================== contact data load start===================*/
// contact title 
const contact = document.querySelector('.contact-title');
const contactTitle = data[7];
contact.innerHTML = `<h2>${contactTitle.pageTitle}<span>${contactTitle.h}</span></h2>`;

const gridContainer = document.querySelector('.grid-container');
const contactInfo = data[7].contact;
const contactInfoLoad = contactInfo.map(info => {
    return `
    <div class="grid-column">
        <i class="${info.icon}"></i>
        <h6>${info.contactInfo}</h6>
    </div>
    `;
});
gridContainer.innerHTML = contactInfoLoad.join('');
/*=================== contact data load end===================*/