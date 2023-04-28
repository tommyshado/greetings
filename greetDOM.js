const nameElementRef = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const clearBtnRef = document.querySelector('.clearBtn');
const greetingRef = document.querySelector('.displayGreet');

let instaOfGreetFactory = greetFactory();

greetBtnRef.addEventListener('click', () => {
    instaOfGreetFactory.getName(nameElementRef.value);
    greetingRef.value = instaOfGreetFactory.logsName();
});

clearBtnRef.addEventListener('click', () => {});