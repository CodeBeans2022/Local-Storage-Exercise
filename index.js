let people = []

// Buttons 
let submit = document.querySelector('#submit');
let display = document.querySelector('#display');

// Add Event Listener 
submit.addEventListener('click', (e) =>{
    e.preventDefault();
    let firstName = document.querySelector('#firstName').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;

    // Push Object into array 
    people.push(
        {
            firstName,
            surname,
            email
        }
    )

    // Local Storage
    localStorage.setItem('data', JSON.stringify(people));

    console.table(people);
    clearInput();
})

function clearInput() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach((item)=>{
        item.value = "";
    })
}

// Event Listenter for Display 
display.addEventListener('click', (e) => {
    e.preventDefault();
    console.table(
        JSON.parse(localStorage.getItem('data'))
    );
})