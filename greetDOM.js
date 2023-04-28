const nameElementRef = document.querySelector('.nameString');
const greetBtnRef = document.querySelector('.greetMeBtn');
const greetingRef = document.querySelector('p');

let instaOfGreetFactory = greetFactory();

greetBtnRef.addEventListener('click', () => {
    instaOfGreetFactory.getName(nameElementRef.value);
    greetingRef.innerHTML = `${greetingRef.innerHTML} ${instaOfGreetFactory.logsName()}`;
    nameElementRef.value = '';
});