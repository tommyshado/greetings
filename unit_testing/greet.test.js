describe('"greetFactory" is a factory function name', () => {

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

    describe('greetings count the number of greetings', () => {
        it('should be able to count that 0 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName();
            assert.equal(greetingsInstance.logsCounter(), 0);
        });

        it('should be able to count that 1 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Othalive');

            assert.equal(greetingsInstance.logsCounter(), 1);
        });

        it('should be able to count that 2 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Mthunzi');
                greetingsInstance.getName('Tom');
                

            assert.equal(greetingsInstance.logsCounter(), 2);
        });

        it('should be able to count that 4 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Malebo');
                greetingsInstance.getName('Kat');
                greetingsInstance.getName('Bjorn');
                greetingsInstance.getName('nico');

            assert.equal(greetingsInstance.logsCounter(), 4);
        });

        it('should be able to count that 3 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Malebo');
                greetingsInstance.getName('Kat');
                greetingsInstance.getName('John');
                

            assert.equal(greetingsInstance.logsCounter(), 3);
        });

        it('should be able to count that 2 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Malebo');
                greetingsInstance.getName('Mbali');

            assert.equal(2, greetingsInstance.logsCounter());
        })
    })

    describe('greetings count when names are the same', () => {
        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Malebo');
                greetingsInstance.getName('Malebo');

            assert.equal(greetingsInstance.logsCounter(), 1);
        })

        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('anathi');
                greetingsInstance.getName('anathi');

            assert.equal(greetingsInstance.logsCounter(), 1);
        })

        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('john');
                greetingsInstance.getName('john');

            assert.equal(greetingsInstance.logsCounter(), 1);
        })

        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('bjorn');
                greetingsInstance.getName('malebo');
                greetingsInstance.getName('bjorn');

            assert.equal(greetingsInstance.logsCounter(), 1);
        })

        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('bjorn');
                greetingsInstance.getName('nico');
                greetingsInstance.getName('bjorn');

            assert.equal(greetingsInstance.logsCounter(), 2);
        })
        
    })
})