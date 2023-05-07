const nameElementReference = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const greetReferenceElement = document.querySelector('#greet');
const counterGreet = document.querySelector('#counter');
const radioButtonRef = document.querySelectorAll('.language');
const resetBtn = document.querySelector('.resetBtn');
var countResult = 0;


const instaOfGreetFactory = greetFactory(countResult);

// initializing the name in the factory function to the local storage as a key
// here I am invoking the name and storing it in the local storage
if (localStorage[instaOfGreetFactory.getNameObjGreet()]) {
    countResult = Number(localStorage[instaOfGreetFactory.getNameObjGreet()]);
    counterGreet.innerHTML = countResult;
}

greetBtnRef.addEventListener('click', () => {
    const radioBtnReference = document.querySelector('input[name="lang"]:checked');

    if (nameElementReference.value !== '') {

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

        localStorage.setItem(instaOfGreetFactory.getNameObjGreet(), instaOfGreetFactory.greetCounter());
        greetReferenceElement.innerHTML = instaOfGreetFactory.errorMsg();
    }
});

resetBtn.addEventListener('click', () => {
    for (let i = 0; i < radioButtonRef.length; i++) {
        radioButtonRef[i].checked = false;
    }
    
    localStorage.clear();
    location.reload();
    greetReferenceElement.innerHTML = '';
    counterGreet.innerHTML = instaOfGreetFactory.resetCounter();
})