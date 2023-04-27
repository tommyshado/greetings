const greetFactory = () => {
    let nameString = '';
    let errorString = '';

    const getName = function(name) {
        if(typeof name === 'string') {
            nameString = `${(name.toLowerCase()).trim()}`;
        } else {
            errorString = 'Invalid input';
        }
    } 

    const logsName = function() {
        return nameString || errorString;
    }

    return { getName, logsName };
}