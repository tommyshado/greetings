const nameElementReference = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const greetReferenceElement = document.querySelector('#greet');
const counterGreet = document.querySelector('#counter');
const radioButtonRef = document.querySelectorAll('.language');
const resetBtn = document.querySelector('.resetBtn');
const errorMsg = document.querySelector('#errorMsg');
var countResult = 0;


const instaOfGreetFactory = greetFactory(countResult);

if (localStorage['counter']) {
    countResult = Number(localStorage['counter']);
    counterGreet.innerHTML = countResult;
}

greetBtnRef.addEventListener('click', () => {
    const radioBtnReference = document.querySelector('input[name="lang"]:checked');
    
    if (radioBtnReference) {
        instaOfGreetFactory.getName(nameElementReference.value);
        let radioValue = radioBtnReference.value;
        instaOfGreetFactory.greet(radioValue);
        
        greetReferenceElement.innerHTML = instaOfGreetFactory.greetMsg();
        counterGreet.innerHTML = instaOfGreetFactory.greetCounter();
    }

    localStorage.setItem('counter', instaOfGreetFactory.greetCounter());
    localStorage.setItem('greetedNames', JSON.stringify(instaOfGreetFactory.greetedNames()));
    
    errorMsg.innerHTML = instaOfGreetFactory.errorMessages(nameElementReference.value, radioBtnReference);
    errorMsg.classList.add('danger');
    
    setTimeout(() => {
        errorMsg.style.display = "none"
    }, 5000);

    nameElementReference.value = '';
});

resetBtn.addEventListener('click', () => {
    for (let i = 0; i < radioButtonRef.length; i++) {
        radioButtonRef[i].checked = false;
    }
    
    localStorage.clear();
    location.reload();
    errorMsg.innerHTML = 'The local storage has been cleared';
    errorMsg.classList.add('danger');
    setTimeout(() => {
        errorMsg.style.display = 'none'
    }, 5000);

    counterGreet.innerHTML = instaOfGreetFactory.resetCounter();
    greetReferenceElement.innerHTML = '';
})