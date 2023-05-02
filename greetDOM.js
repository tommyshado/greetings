const nameElementRef = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const inputGreetRef = document.querySelector('#greet');
const counterGreet = document.querySelector('#counter');
const radioButtonRef = document.querySelector('.language');


greetBtnRef.addEventListener('click', () => {
    let instaOfGreetFactory = greetFactory();

    instaOfGreetFactory.getName(nameElementRef.value);
    instaOfGreetFactory.checkedRadioBtn(radioButtonRef.checked);
    instaOfGreetFactory.getRadioValue(radioButtonRef.value);

    if (inputGreetRef.innerHTML === '') {
        inputGreetRef.innerHTML = `${instaOfGreetFactory.greetingsLanguage()} ${instaOfGreetFactory.logsName()}`;
        radioButtonRef.checked = false;
        nameElementRef.value = '';
    } else if (greetingRef.innerHTML !== '') {
        inputGreetRef.innerHTML =  `${instaOfGreetFactory.greetingsLanguage()} ${instaOfGreetFactory.logsName()}`
        radioButtonRef.checked = false;
        nameElementRef.value = '';
    }

    instaOfGreetFactory.logsName();
    instaOfGreetFactory.greetingsCounter();
    counterGreet.innerHTML = Number(counterGreet.innerHTML) + instaOfGreetFactory.logsCounter();
});