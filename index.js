const togglemenuicon = document.getElementById('toggle-menuicon');
const togglenav = document.getElementById('toggle-nav');
togglemenuicon.addEventListener('click', ()=> {
    togglenav.classList.toggle('classListActive')
})

// const vernavbar = document.querySelector('.ver-navbar')
// const items = Array.from(vernavbar.children);
// console.log(items)
// items.addEventListener('click', ()=> {
//     items.style = 'background-color:red'
// })

function verNavbarFunc(color){
    color.style = 'background-color:red;';
}