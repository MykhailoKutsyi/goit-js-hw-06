const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    // console.dir(formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === '' || password === '') {
        alert('Все поля должны быть заполнены');
    }
    
    // console.log(mail, password);

    const formData = { mail, password };
    console.log(formData);
    form.reset();
}

