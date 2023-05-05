const greetFactory = () => {
    let namesObjGreet = {};
    let currentName = '';
    let greetingsCounter = 0;

    let getName = function(name) {
        let nameString = (name.toLowerCase()).trim();
        if(namesObjGreet[nameString] === undefined) {
            greetingsCounter++;
            currentName = nameString;
            namesObjGreet[currentName]++;
        } else {
            namesObjGreet[currentName] = 1;
        }
    }

    let logsName = function() {
        return currentName;
    }

    let greetCounter = function() {
        return greetingsCounter;
    }

    let msg = ''

    let greet = function(language) {
        if (language === 'IsiXhosa') {
            msg = `Molo ${specialCharsHandler()}`;
        } else if (language === 'IsiSutho') {
            msg = `Dumelang ${logsName()}`;
        } else {
            msg = `Hello ${logsName()}`
        }
    }

    let greetMsg = function() {
        return msg;
    }

    let resetCounter = function() {
        return 0;
    }

    let specialCharsHandler = function() {
        let name = logsName().split(',').join('').split('*').join('').split('@').join('').split('#').join("");
        return name;
    }

    return {
        getName,
        logsName,
        greetCounter,
        greet,
        greetMsg,
        resetCounter,
        specialCharsHandler
    };
}