const greetFactory = () => {
    const greetsObject = {};

    let nameString = '';
    let namesArr = [];
    let counter = 0;

    const getName = function(name) {
        if(typeof name === 'string') {
            nameString = `${(name.toLowerCase()).trim()}`;
        }
    }

    const logsName = function() {
        return nameString;
    }

    const appendsName = function() {
        namesArr.push(logsName());
    }

    let greetingsCounter = function() {
        if(namesArr.includes(logsName())) {
            counter++;
        }
    }

    let logsCounter = function() {
        return counter;
    }

    const checkedRadioBtn = function(radioReference) {
        if(radioReference.checked === true) {
            greetsObject[radioReference.value] = undefined;
        }
    }

    const greetingsLanguage = function() {
        for (let languageValue in greetsObject) {
            if (languageValue === 'IsiXhosa') {
                return "Molweni,";
            } else if (languageValue === 'IsiSutho') {
                return 'Dumelang,'
            } else {
                return 'Hello,'
            }
        }
    }

    return {
        getName,
        appendsName,
        logsName,
        greetingsCounter,
        logsCounter,
        checkedRadioBtn,
        greetingsLanguage
    };
}