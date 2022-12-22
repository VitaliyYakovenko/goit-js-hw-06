




const formEl = document.querySelector(".login-form");



formEl.addEventListener("submit",onSubmitForm);


function onSubmitForm(event) {
    event.preventDefault();
    const valueInp = event.currentTarget.elements;
    
    const email = valueInp.email.value;

    const password = valueInp.password.value;
   
     
    if (email === "" || password === "") {
        alert("Все поля должны быть заполненны.")
    }

    const formData = {
        email,
        password,
    };
    
    console.log(formData);
    
   formEl.reset()
}  