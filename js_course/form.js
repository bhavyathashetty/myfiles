// single element selectors
console.log(document.getElementById('my-form'))
console.log(document.querySelector('h3'))

//multiple element selectors
console.log(document.querySelectorAll('.item'))

//loop through
const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item))

//to remove items
// const ul = document.querySelector('.items')
// ul.remove();
// ul.lastElementChild.innerHTML='<h3>Meow</h3>'

//event listener
// const btn = document.querySelector('.btn')
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');

// })

//form interactions
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onsubmit)

function onsubmit(e) {
    e.preventDefault()
    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = "Enter all Feilds"
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
        userList.appendChild(li)


        //clear fields after submit
        nameInput.value = ''
        emailInput.value = ''
    }


    

}
