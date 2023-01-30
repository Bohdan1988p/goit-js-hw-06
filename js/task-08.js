const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value && formElements.password.value) {
        const email = formElements.email.value;
        const password = formElements.password.value;
        console.log({email,password});
        
        event.currentTarget.reset()
    } else {
        return alert("All fields are required!");
    };
};
