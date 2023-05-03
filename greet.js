const greetFactory = () => {
    let namesLst = [];
    let currentName = '';

    let getName = function(name) {
        let nameString = (name.toLowerCase()).trim();
        if(!(namesLst.includes(nameString))) {
            currentName = nameString;
            namesLst.push(currentName);
        }
    }

    let logsName = function() {
        return currentName;
    }

    let greetCounter = function() {
        return namesLst.length;
    }

    let msg = ''

    let greet = function(language) {
        if (language === 'IsiXhosa') {
            msg = `Molo ${logsName()}`;
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

    return {
        getName,
        logsName,
        greetCounter,
        greet,
        greetMsg,
        resetCounter
    };
}