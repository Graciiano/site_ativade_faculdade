const aboutBtn= document.querySelector('#about-show')
const benefitsBtn = document.querySelector("#benefits-show")
const teamBtn = document.querySelector("#team-show")

const aboutModal = document.querySelector('#about-modal')
const benefitsModal = document.querySelector('#benefits-modal')
const teamModal = document.querySelector('#team-modal')

aboutBtn.addEventListener('click', ()=>{
    aboutModal.showModal();
})
benefitsBtn.addEventListener('click', ()=>{
    benefitsModal.showModal();
})
teamBtn.addEventListener('click', ()=>{
    teamModal.showModal();
})