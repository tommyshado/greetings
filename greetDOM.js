const nameElementRef = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const inputGreetRef = document.querySelector('#greet');
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

    instaOfGreetFactory.getName(nameElementRef.value);

    if (radioBtnReference) {
        let radioValue = radioBtnReference.value;
        if (nameElementRef.value) {
            instaOfGreetFactory.greet(radioValue);
        }
    }
    
    inputGreetRef.innerHTML = instaOfGreetFactory.greetMsg();
    nameElementRef.value = '';

    instaOfGreetFactory.logsName();
    counterGreet.innerHTML = instaOfGreetFactory.greetCounter();

    localStorage['counter'] = instaOfGreetFactory.greetCounter();
});

resetBtn.addEventListener('click', () => {
    for (let i = 0; i < radioButtonRef.length; i++) {
        radioButtonRef[i].checked = false;
    }
    
    localStorage.clear();
    counterGreet.innerHTML = instaOfGreetFactory.resetCounter();
})