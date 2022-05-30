const menuAnchor = document.querySelectorAll('.menu-anchor')
const toggle = document.getElementById('toggle')

menuAnchor.forEach(element => {
    element.addEventListener('click', () => {
        toggle.checked = false;
    });   
})  
