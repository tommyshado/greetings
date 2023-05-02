const greetFactory = () => {
    const greetsObject = {};

    let nameString = '';
    let counter = 0;

    const getName = function(name) {
        if(typeof name === 'string') {
            nameString = `${(name.toLowerCase()).trim()}`;
        }
    }

    const logsName = function() {
        return nameString;
    }

    let greetingsCounter = function() {
        while(logsName()) {
            counter++;
            break;
        }
    }

    let logsCounter = function() {
        return counter;
    }

    const checkedRadioBtn = function(radioReference) {
        if(radioReference === true) {
            greetsObject[getRadioValue()] = undefined;
        }
    }

    const getRadioValue = function(radioReference) {
        return radioReference;
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
        logsName,
        greetingsCounter,
        logsCounter,
        checkedRadioBtn,
        greetingsLanguage,
        getRadioValue
    };
}