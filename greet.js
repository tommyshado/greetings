const greetFactory = () => {
    let nameString = '';
    let counter;

    const getName = function(name) {
        if(typeof name === 'string') {
            nameString = `${(name.toLowerCase()).trim()}`;
        }
    } 

    const logsName = function() {
        return nameString;
    }

    let greetingsCounter = function() {
        if (logsName() === 'Hello,') {
            counter = 0;
        } else {
            counter++;
        }
    }

    let logsCounter = function() {
        console.log(counter);
    }

    return { getName, logsName, greetingsCounter, logsCounter };
}