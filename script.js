const header = document.querySelector('header') 
const section1 = document.querySelector('.section-1')

const faders = document.querySelectorAll('.fade')
const sliders = document.querySelectorAll('.slider')

const arrowBtn = document.querySelector('header img')



arrowBtn.addEventListener('click', () => {
    document.body.classList.toggle('nav-slide')
})







const headerOptions = {rootMargin: '-100px 0px 0px 0px'}
const headerObserver = new IntersectionObserver ((entries, headerObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('inverse')
        } else {
            header.classList.remove('inverse')
        }
    })
}, headerOptions)
headerObserver.observe(section1)




const fadeOptions = { rootMargin: '0px 0px -300px 0px'}
const fadeObserver = new IntersectionObserver ((entries, fadeObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.style.animation = `fade 400ms ${entry.target.dataset.delay} forwards linear`
        }
    })
}, fadeOptions)
faders.forEach(fade => {
    fadeObserver.observe(fade)
})






const appearOptions = {rootMargin: '0px 0px -300px 0px'}
const appearObserver = new IntersectionObserver ((entries, appearObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('active')
        }
        appearObserver.unobserve(entry.target)
        
    }) 
}, appearOptions)
sliders.forEach(slide => {
    appearObserver.observe(slide)
})


