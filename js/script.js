document.querySelector('.wrapper').addEventListener('submit', validateForm);

function validateForm(e){
    const email = document.querySelector('.email-form');
    const errMessage = document.querySelector('.email-control');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    e.preventDefault();

    if(email.value === ''){
        errMessage.classList.add('error-active');
        email.classList.add('error');
        errMessage.textContent= 'You forgot to add your email';
    } else if(!re.test(email.value)){
        errMessage.classList.add('error-active');
        email.classList.add('error');
        email.value = "email@example/com";
        errMessage.textContent = 'Please provide an email address';
    }else{
        errMessage.classList.remove('error-active');
        email.classList.remove('error');
    }


}

/*function alterStyle(elem){
    elem.style.color = 'red';
}*/

function alterStyle(){
    document.getElementById('d').style.color = "red";
}