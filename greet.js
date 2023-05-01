const greetFactory = () => {
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

    return { getName, appendsName, logsName, greetingsCounter, logsCounter };
}
