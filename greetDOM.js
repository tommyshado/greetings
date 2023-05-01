const nameElementRef = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const greetingRef = document.querySelector('#greet');
const counterGreet = document.querySelector('#counter');
const radioButtonRef = document.querySelector('.language');

let instaOfGreetFactory = greetFactory();

greetBtnRef.addEventListener('click', () => {
    instaOfGreetFactory.getName(nameElementRef.value);
    if (greetingRef.innerHTML === 'Hello,') {
        greetingRef.innerHTML = `${greetingRef.innerHTML} ${instaOfGreetFactory.logsName()}`;
        nameElementRef.value = '';
    } else {
        greetingRef.innerHTML =  `Hello, ${instaOfGreetFactory.logsName()}`
        nameElementRef.value = '';
    }

    instaOfGreetFactory.logsName();
    instaOfGreetFactory.appendsName();
    instaOfGreetFactory.greetingsCounter();
    counterGreet.innerHTML = Number(counterGreet.innerHTML) + instaOfGreetFactory.logsCounter();
});