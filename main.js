let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')


let fName = document.querySelector(".fn")
let lName = document.querySelector(".ln")
let Email = document.querySelector(".em")
let Password = document.querySelector(".pass")

fName.addEventListener('focusout', (e) => {
    if(e.currentTarget.value){
        one.style.display = 'none';
    }else{
        one.style.display = 'block';
    }
})

lName.addEventListener('focusout', (e) => {
    if(e.currentTarget.value){
        two.style.display = 'none';
    }else{
        two.style.display = 'block';
    }
})

Email.addEventListener('focusout', (e) => {
    if(e.currentTarget.value){
        three.style.display = 'none';
    }else{
        three.style.display = 'block';
    }
})

Password.addEventListener('focusout', (e) => {
    if(e.currentTarget.value){
        four.style.display = 'none';
    }else{
        four.style.display = 'block';
    }
})
