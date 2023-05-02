const nameElementRef = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const inputGreetRef = document.querySelector('#greet');
const counterGreet = document.querySelector('#counter');
const radioButtonRef = document.querySelector('.language');


greetBtnRef.addEventListener('click', () => {
    const radioBtnReference = document.querySelector('input[name="lang"]:checked');
    let instaOfGreetFactory = greetFactory();

    instaOfGreetFactory.getName(nameElementRef.value);

    if (radioBtnReference) {
        let radioValue = radioBtnReference.value;
        instaOfGreetFactory.greet(radioValue);
    }
    
    inputGreetRef.innerHTML = instaOfGreetFactory.greetMsg();
    nameElementRef.value = '';

    instaOfGreetFactory.logsName();
    instaOfGreetFactory.greetingsCounter();
    counterGreet.innerHTML = Number(counterGreet.innerHTML) + instaOfGreetFactory.logsCounter();
});