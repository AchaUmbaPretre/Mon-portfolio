const Menunav = document.querySelector('.nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navclose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
       Menunav.classList.add('show')
    })
}
if(navclose){
    navclose.addEventListener('click', ()=>{
        Menunav.classList.remove('show')
    })
}

/*Pour mobile*/
const navLink = document.querySelectorAll('nav-link')

function Action(){
    const navMenu = document.querySelectorAll('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach((e)=>{
    e.addEventListener('click', Action)
})

/*skills*/

const skillsContent = document.getElementsByClassName('skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills(){
    let itemClass = this.parentNode.ClassName

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close'
    }
    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }else{
        this.parentNode.ClassName = 'skills-content skills-close'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*qualification*/

 const tabs = document.querySelectorAll('[data-target]');
 const tabContents = document.querySelectorAll('[data-content]');

 tabs.forEach(tab=>{
     tab.addEventListener('click', ()=>{
         const target = document.querySelector(tab.dataset.target)

         tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification-active')
         })
         target.classList.add('qualification-active')

         tab.forEach(tab=>{
             tab.classList.remove('qualification-active')
         })
         tab.classList.add('qualification-active')
     })
 })



/*Services Modal*/ 

const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose, i)=>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*Scroll*/ 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*background header*/ 
function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* show scroll up*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* dark light*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-solid fa-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light';
const getCUrrentIcon = () => themeButton.classList.contains(darkTheme) ? 'fa-solid fa-moon':'fa-solid fa-sun';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedTheme === 'fa-solid fa-moon'? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCUrrentIcon())
})