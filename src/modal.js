const aboutBtn= document.querySelector('#about-show')
const benefitsBtn = document.querySelector("#benefits-show")
const teamBtn = document.querySelector("#team-show")

const aboutModal = document.querySelector('#about-modal')
const benefitsModal = document.querySelector('#benefits-modal')
const teamModal = document.querySelector('#team-modal')

const  closeBtns  = document.querySelectorAll('.close-btn')

function closeModal(modal) {
    if(modal) {
        modal.close();
    }
}


aboutBtn.addEventListener('click', ()=>{
    aboutModal.showModal();
})
benefitsBtn.addEventListener('click', ()=>{
    benefitsModal.showModal();
})
teamBtn.addEventListener('click', ()=>{
    teamModal.showModal();
})



closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const closestModal = btn.closest('dialog');
        closeModal(closestModal);
    });
});