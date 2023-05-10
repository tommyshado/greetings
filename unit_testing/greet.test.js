describe('"greetFactory" is a factory function name', () => {

    // describe('get string name and logs the string name', () => {
    //     it('should be able to get the name and logs the name and returns the name', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('kat');
            
    //         assert.equal(greetingsInstance.logsName(), 'kat');
    //     });

    //     it('should be able to handle casing well', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('KAT');

    //         assert.equal(greetingsInstance.logsName(), 'kat');
    //     });

    //     it('should be able to trim the spaces around a string', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName(' MAlebO  ');

    //         assert.equal(greetingsInstance.logsName(), 'malebo');
    //     });

    //     it('should be able to handle casing well', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('NiCHoLAs');

    //         assert.equal(greetingsInstance.logsName(), 'nicholas');
    //     });
    //     it('should be able to handle strings well even when there are number in a string', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('BJo10rN');

    //         assert.equal(greetingsInstance.logsName(), 'bjo10rn');
    //     });

    // });

    // describe('handles special characters', () => {
    //     it('should be able to handle special characters', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('m,#@*,,,**alebo');

    //         assert.equal(greetingsInstance.specialCharsHandler(), 'Please enter valid characters e.g "abCde"');
    //     })

    //     it('should be able to handle special characters', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('mthunz#@i');

    //         assert.equal(greetingsInstance.specialCharsHandler(), 'Please enter valid characters e.g "abCde"');
    //     })

    //     it('should be able to handle special characters', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('b,jo*rn');

    //         assert.equal(greetingsInstance.specialCharsHandler(), 'Please enter valid characters e.g "abCde"');
    //     })
    // })

    describe('greetings count the number of greetings', () => {
        it('should be able to count that 0 people have been greeted', () => {
            let greetingsInstance = greetFactory();
            assert.equal(greetingsInstance.greetCounter(), 0);
        });

        it('should be able to count that 1 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Othalive');

            assert.equal(greetingsInstance.greetCounter(), 1);
        });

        it('should be able to count that 2 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Mthunzi');
                greetingsInstance.getName('Tom');
                

            assert.equal(greetingsInstance.greetCounter(), 2);
        });

        it('should be able to count that 4 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Malebo');
                greetingsInstance.getName('Kat');
                greetingsInstance.getName('Bjorn');
                greetingsInstance.getName('nico');

            assert.equal(greetingsInstance.greetCounter(), 4);
        });

        it('should be able to count that 3 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Malebo');
                greetingsInstance.getName('Kat');
                greetingsInstance.getName('John');
                

            assert.equal(greetingsInstance.greetCounter(), 3);
        });

        it('should be able to count that 2 people have been greeted', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Malebo');
                greetingsInstance.getName('Mbali');

            assert.equal(2, greetingsInstance.greetCounter());
        })
    })

    describe('greetings count when names are the same', () => {
        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Malebo');
                greetingsInstance.getName('Malebo');

            assert.equal(greetingsInstance.greetCounter(), 1);
        })

        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('anathi');
                greetingsInstance.getName('anathi');

            assert.equal(greetingsInstance.greetCounter(), 1);
        })

        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('john');
                greetingsInstance.getName('john');

            assert.equal(greetingsInstance.greetCounter(), 1);
        })

        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('bjorn');
                greetingsInstance.getName('malebo');
                greetingsInstance.getName('bjorn');

            assert.equal(greetingsInstance.greetCounter(), 2);
        })

        it('should be able to identify when the names are the same and not count more than one', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('bjorn');
                greetingsInstance.getName('nico');
                greetingsInstance.getName('bjorn');

            assert.equal(greetingsInstance.greetCounter(), 2);
        })
        
    })

    describe('reset the counter to 0', () => {
        it('should be able to reset the counter variable when the counter is 1', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Doe');
                greetingsInstance.greetCounter();

            assert.equal(greetingsInstance.resetCounter(), 0)
        })
        it('should be able to reset the counter variable when the counter is 2', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('John');
                greetingsInstance.getName('Redd');
                greetingsInstance.greetCounter();

            assert.equal(greetingsInstance.resetCounter(), 0);
        })
        it('should be able to reset the counter variable when the counter is 3', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Sammy');
                greetingsInstance.getName('John');
                greetingsInstance.getName('Redd');
                greetingsInstance.greetCounter();

            assert.equal(greetingsInstance.resetCounter(), 0);
        })
        it('should be able to reset the counter variable when the counter is 4 or more', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('Doe');
                greetingsInstance.getName('bjorn');
                greetingsInstance.getName('nico');
                greetingsInstance.getName('bjorn');
                greetingsInstance.getName('Redd');
                greetingsInstance.getName('Sammy');
                greetingsInstance.getName('John');
                greetingsInstance.greetCounter();

            assert.equal(greetingsInstance.resetCounter(), 0)
        })
    })

    describe('error messages', () => {
        it('should be able display the message "Enter valid name" when inputted special characters only', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('@$%#&^@#!#');

            assert.equal(greetingsInstance.validName(), 'Enter valid name');
        })

        it('should be able display the message "Enter valid name" when inputted special characters only', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('{}[[]!@@@!!');

            assert.equal(greetingsInstance.validName(), 'Enter valid name');
        })

        it('should be able to display the message "Please enter name and select language" when no name and language is entered', () => {
            let greetingsInstance = greetFactory();
                
            assert.equal(greetingsInstance.errorMessages('', null), "Please enter name and select language");
        })

        it('should be able to display the message "Please check a button first"', () => {
            let greetingsInstance = greetFactory();
                
            assert.equal(greetingsInstance.errorMessages('Otha', null), "Select language");
        })
    })

    describe('valid messages', () => {
        it('should be able to show the correct message when user checks a language and inputs a name', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName("Mthunzi");
                greetingsInstance.greet('IsiXhosa')
            assert.equal(greetingsInstance.greetMsg(), 'Molo mthunzi')
        });

        it('should be able to show the correct message when user checks a language and inputs a name', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName("Tom");
                greetingsInstance.greet('English')
            assert.equal(greetingsInstance.greetMsg(), 'Hello tom')
        });

        it('should be able to show the correct message when user checks a language and inputs a name', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName("Tom");
                greetingsInstance.greet('IsiSutho')
            assert.equal(greetingsInstance.greetMsg(), 'Dumelang tom')
        });
    });

    // describe('get the names in the object', () => {
    //     it('should be able to get the name in the object of names', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('tom');

    //         assert.equal(greetingsInstance.getNameGreeted(), 'tom');
    //     })

    //     it('should be able to get the name in the object of names', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('landa');

    //         assert.equal(greetingsInstance.getNameGreeted(), 'landa');
    //     })

    //     it('should be able to get the name in the object of names', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('lusanda');

    //         assert.equal(greetingsInstance.getNameGreeted(), 'lusanda');
    //     })

    //     it('should be able to get the name in the object of names', () => {
    //         let greetingsInstance = greetFactory();
    //             greetingsInstance.getName('anele');

    //         assert.equal(greetingsInstance.getNameGreeted(), 'anele');
    //     })
    // })

    describe('not increment the same name again in the object', () => {
        it('should be able to increment the name value once in the object', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('tom');
                greetingsInstance.getName('tom');
                greetingsInstance.getName('tom');

            assert.equal(greetingsInstance.greetCounter(), 1);
        })

        it('should be able to increment the name value once in the object', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('landa');
                greetingsInstance.getName('landa');

            assert.equal(greetingsInstance.greetCounter(), 1);
        })

        it('should be able to increment the name value once in the object', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('lusanda');
                greetingsInstance.getName('lusanda');

            assert.equal(greetingsInstance.greetCounter(), 1);
        })

        it('should be able to increment the name value once in the object', () => {
            let greetingsInstance = greetFactory();
                greetingsInstance.getName('anele');

            assert.equal(greetingsInstance.greetCounter(), 1);
        })
    })

    describe('continue counting from the number in the local storage when local storage is not cleared', () => {
        it('should be able to counting starting at the value in the local storage', () => {
            let greetingsInstance = greetFactory(2);
                greetingsInstance.getName('tom');

            assert.equal(greetingsInstance.greetCounter(), 3)
        })

        it('should be able to counting starting at the value in the local storage', () => {
            let greetingsInstance = greetFactory(5);
                greetingsInstance.getName('tom');

            assert.equal(greetingsInstance.greetCounter(), 6)
        })

        it('should be able to counting starting at the value in the local storage', () => {
            let greetingsInstance = greetFactory(1);
                greetingsInstance.getName('landa');

            assert.equal(greetingsInstance.greetCounter(), 2)
        })

        it('should be able to counting starting at the value in the local storage', () => {
            let greetingsInstance = greetFactory(3);
                greetingsInstance.getName('mthunzi');

            assert.equal(greetingsInstance.greetCounter(), 4)
        })
    })

})