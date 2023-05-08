const greetFactory = (countResult) => {
    let namesObjGreet = {};
    let currentName = '';
    // countResult storing it in the factory function
    let greetingsCounter =  countResult || 0;

    let getName = function(name) {
        let nameString = (name.toLowerCase()).trim();
        if(namesObjGreet[nameString] === undefined) {
            greetingsCounter++;
            currentName = nameString;
            namesObjGreet[nameString]++;
        } else {
            namesObjGreet[nameString] = 1;
        }
    }

    // need to write a test for this function
    let getNameGreeted = function() {
        for (let name in namesObjGreet) {
            return name;
        }
    }

    let greetedNames = function() {
        return namesObjGreet;
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
            msg = `Dumelang ${specialCharsHandler()}`;
        } else {
            msg = `Hello ${specialCharsHandler()}`
        }
    }

    let greetMsg = function() {
        return msg;
    }

    let resetCounter = function() {
        return 0;
    }

    let specialCharsHandler = function() {
        let pattern = "^[a-zA-Z]*$"
        if(!logsName().match(pattern)) {
            return 'Please enter valid characters e.g "abCde"';
        } else {
            return logsName();
        }
    };

    let errorMsg = function() {
        if (!(msg.split(' ')).includes(logsName())) {
            return 'Enter valid name';
        } else {
            return greetMsg();
        }
    }

    let errorMsgBtn = function() {
        return "Please check a button first";
    }

    return {
        getName,
        logsName,
        greetCounter,
        greet,
        greetMsg,
        resetCounter,
        specialCharsHandler,
        errorMsg,
        errorMsgBtn,
        getNameGreeted,
        greetedNames
    };
}