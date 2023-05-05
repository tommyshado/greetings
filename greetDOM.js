const nameElementReference = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const greetReferenceElement = document.querySelector('#greet');
const counterGreet = document.querySelector('#counter');
const radioButtonRef = document.querySelectorAll('.language');
const resetBtn = document.querySelector('.resetBtn');
var countResult = 0;

if (localStorage['counter']) {
    countResult = Number(localStorage['counter']);
    counterGreet.innerHTML = countResult;
}

const instaOfGreetFactory = greetFactory(countResult);

greetBtnRef.addEventListener('click', () => {
    const radioBtnReference = document.querySelector('input[name="lang"]:checked');

    instaOfGreetFactory.getName(nameElementReference.value);

    if (radioBtnReference) {
        let radioValue = radioBtnReference.value;
        if (nameElementReference.value) {
            instaOfGreetFactory.greet(radioValue);
        }
    }
    
    greetReferenceElement.innerHTML = instaOfGreetFactory.greetMsg();
    nameElementReference.value = '';

    instaOfGreetFactory.logsName();
    counterGreet.innerHTML = instaOfGreetFactory.greetCounter();

    localStorage['counter'] = instaOfGreetFactory.greetCounter();
});

resetBtn.addEventListener('click', () => {
    for (let i = 0; i < radioButtonRef.length; i++) {
        radioButtonRef[i].checked = false;
    }
    
    localStorage.clear();
    greetReferenceElement.innerHTML = '';
    counterGreet.innerHTML = instaOfGreetFactory.resetCounter();
})