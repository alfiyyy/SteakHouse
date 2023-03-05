// for navbar {active}
const currentLocation = window.location.pathname

const navLinks = document.querySelectorAll('nav .left-nav ul li a')

for (let index = 0; index < navLinks.length; index++) {
    
    if (navLinks[index].pathname === currentLocation) {
        navLinks[index].classList.add("active")
        navLinks[index].style.pointerEvents = "none"
    }
    
}

// for navbar {drop-down}
window.addEventListener('resize', () => {
    const windowSize = window.innerWidth
    if (windowSize > 767) {
        document.querySelector('.nav-btn').classList.remove('glow')
        document.querySelector('nav ul').classList.remove('show')
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('show')
        })
        
    }
})

document.querySelector('.nav-btn').addEventListener('click', () => {
    document.querySelector('.nav-btn').classList.toggle('glow')
    document.querySelector('nav ul').classList.toggle('show')
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.toggle('show')
    })
    
})

document.querySelector('.nav-btn').style.cursor = "pointer"
document.querySelector('a+span').style.cursor = "default"

//for Top BTN
window.addEventListener('scroll', () => {
    const scroll = Math.floor(window.scrollY)

    if (scroll > 1200) {
        document.getElementById('topBtn').style.transition = "1s"
        document.getElementById('topBtn').style.opacity = "1"
    }
    else {
        document.getElementById('topBtn').style.transition = "1s"
        document.getElementById('topBtn').style.opacity = "0"
    }
})

document.getElementById('topBtn').addEventListener('click', () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" })
})

