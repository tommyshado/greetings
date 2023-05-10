const greetFactory = (countResult) => {
    let namesOfGreeted = {};
    let currentName = '';
    // countResult storing it in the factory function
    let greetingsCounter =  countResult || 0;

    let getName = function(name) {
        let nameString = (name.toLowerCase()).trim();
        if(namesOfGreeted[nameString] === undefined) {
            greetingsCounter++;
            currentName = nameString;
            namesOfGreeted[currentName] = 1;
        } else {
            namesOfGreeted[currentName]++;
        }
    }

    // need to write a test for this function
    // let getNameGreeted = function() {
    //     for (let name in namesObjGreet) {
    //         return name;
    //     }
    // }

    let greetedNames = function() {
        return namesOfGreeted;
    }

    // let logsName = function() {
    //     return currentName;
    // }

    let greetCounter = function() {
        return greetingsCounter;
    }

    let msg = '';

    let greet = function(language) {
        if (language === 'IsiXhosa') {
            msg = `Molo ${validName()}`;
        } else if (language === 'IsiSutho') {
            msg = `Dumelang ${validName()}`;
        } else {
            msg = `Hello ${validName()}`
        }
    }

    let greetMsg = function() {
        return msg;
    }

    let resetCounter = function() {
        return 0;
    }

    let validName = function() {
        let pattern = /[^A-Za-z 0-9]/g;
        if(!pattern.test(currentName)) {
            return currentName;
        } else {
            msg = 'Enter valid name';
            return msg
        }
    };

    // let errorMsg = function() {
    //     if (!(msg.split(' ')).includes(logsName())) {
    //         return 'Enter valid name';
    //     } else {
    //         return greetMsg();
    //     }
    // }

    let errorMessages = function(name, lang) {
        if(name == "" && lang === null){
            return "Please enter name and select language"
        }

        if(name === ""){
           return "Please enter name"
        }

        if(lang === null){
            return "Select language"
        }
        return '';
    }

    return {
        getName,
        // logsName,
        greetCounter,
        greet,
        greetMsg,
        resetCounter,
        validName,
        // errorMsg,
        errorMessages,
        // getNameGreeted,
        greetedNames
    };
}