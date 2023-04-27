describe('"greetFactory" is a factory function name', () => {
    it('the "greetFactory" function has "getName" as a method', () => {
        assert.equal('getName' in greetFactory(), true);
    });

    it('the "greetFactory" function has "logsName" as a method', () => {
        assert.equal('logsName' in greetFactory(), true);
    });

    describe('get string name and logs the string name', () => {
        it('should be able to get the name and logs the name and returns the name', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('kat');
            
            assert.equal(greetingsInstance.logsName(), 'kat');
        });

        it('should be able to handle casing well', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('KAT');

            assert.equal(greetingsInstance.logsName(), 'kat');
        });

        it('should be able to trim the spaces around a string', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName(' MAlebO  ');

            assert.equal(greetingsInstance.logsName(), 'malebo');
        });

        it('should be able to handle casing well', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('NiCHoLAs');

            assert.equal(greetingsInstance.logsName(), 'nicholas');
        });
        it('should be able to handle strings well even when there are number in a string', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('BJo10rN');

            assert.equal(greetingsInstance.logsName(), 'bjo10rn');
        });

    });

    describe('invalid inputs', () => {
        it('should be able to get the name and and check for its type and based on the type of the inputs it returns invalid input', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName(5);

            assert.equal(greetingsInstance.logsName(), 'Invalid input');
        });

        it('should be able to get the name and and check for its type and based on the type of the inputs it returns invalid input', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName(undefined);

            assert.equal(greetingsInstance.logsName(), 'Invalid input');
        });

        it('should be able to get the name and and check for its type and based on the type of the inputs it returns invalid input', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName(null);

            assert.equal(greetingsInstance.logsName(), 'Invalid input');
        });

        it('should be able to get the name and and check for its type and based on the type of the inputs it returns invalid input', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName(25);

            assert.equal(greetingsInstance.logsName(), 'Invalid input');
        });
    })
})