function showSidebar() {
    const sidebar = document.querySelector('.nav-sidebar')

    sidebar.style.display = 'flex'
    sidebar.classList.toggle('open')
}

function hideSidebar() {
    const sidebar = document.querySelector('.nav-sidebar')

    sidebar.classList.toggle('open')

}