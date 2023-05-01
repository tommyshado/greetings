const nameElementRef = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const greetingRef = document.querySelector('#greet');
const counterGreet = document.querySelector('#counter');
const radioButtonRef = document.querySelector('.language');


greetBtnRef.addEventListener('click', () => {
    let instaOfGreetFactory = greetFactory();
    
    instaOfGreetFactory.getName(nameElementRef.value);
    instaOfGreetFactory.checkedRadioBtn(radioButtonRef);

    if (greetingRef.innerHTML === '') {
        greetingRef.innerHTML = `${instaOfGreetFactory.greetingsLanguage()} ${instaOfGreetFactory.logsName()}`;
        radioButtonRef.checked = false;
        nameElementRef.value = '';
    } else if (greetingRef.innerHTML !== '') {
        greetingRef.innerHTML =  `${instaOfGreetFactory.greetingsLanguage()} ${instaOfGreetFactory.logsName()}`
        nameElementRef.value = '';
    }

    instaOfGreetFactory.logsName();
    instaOfGreetFactory.appendsName();
    instaOfGreetFactory.greetingsCounter();
    counterGreet.innerHTML = Number(counterGreet.innerHTML) + instaOfGreetFactory.logsCounter();
});