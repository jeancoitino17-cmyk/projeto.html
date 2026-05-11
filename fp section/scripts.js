let prev = document.getElementById('prev')
let next = document.getElementById('next')
let items = document.querySelectorAll('.item')
let dots = document.querySelectorAll('.dot')
let number = document.querySelector('.numbers')

let active = 0

next.onclick = () => {
    active = active + 1 >= items.length ? 0 : active + 1
    updateSlider()
}

prev.onclick = () => {
    active = active - 1 < 0 ? items.length - 1 : active - 1
    updateSlider()
}

function updateSlider() {
    let oldItem = document.querySelector('.item.active')
    oldItem.classList.remove('active')
    items[active].classList.add('active')

    let oldDot = document.querySelector('.dot.active')
    oldDot.classList.remove('active')
    dots[active].classList.add('active')

    number.innerHTML = active + 1 < 10 ? '0' + (active + 1) : active + 1
}