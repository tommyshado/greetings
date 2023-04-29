const greetFactory = () => {
    let nameString = '';

    const getName = function(name) {
        if(typeof name === 'string') {
            nameString = `${(name.toLowerCase()).trim()}`;
        }
    } 

    const logsName = function() {
        return nameString;
    }
    return { getName, logsName };
}