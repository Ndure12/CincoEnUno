addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const nav_option = document.querySelector('.nav_option')
            nav_option.classList.toggle('show')
        })
    }
})

addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const nav_option = document.querySelector('body')
            nav_option.classList.toggle('over_hidden')
        })
    }
})
