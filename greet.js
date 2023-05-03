const greetFactory = () => {
    let namesLst = [];
    let currentName = '';
    let counter = 0;

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

    let greetingsCounter = function() {
        for (let i = 0; i < namesLst.length; i++) {
            if (logsName() === namesLst[i]) {
                counter++;
            }
        }
    }

    let logsCounter = function() {
        return counter;
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

    return {
        getName,
        logsName,
        greetingsCounter,
        logsCounter,
        greet,
        greetMsg
    };
}


let instance = greetFactory();
instance.getName('Mthunzi');
instance.getName('anathi');
instance.getName('Otha');
instance.greetingsCounter();
console.log(instance.logsCounter());