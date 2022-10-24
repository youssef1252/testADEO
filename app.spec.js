const filterAnimals = require('./app').filterAnimals;
const cmd = require('./app').cmd;
const assert = require('chai').assert;
const testDataInput = require('./data').data;

describe('Running app.js test', () => {

    describe('for filter spec', () => {

        it('should not return countries with no Peoples', () => {
            const data = [{
                name: 'CountriesName1',
                people: []
            }];

            const dataFiltered = filterAnimals(data);

            assert.isArray(dataFiltered);
            assert.deepEqual(dataFiltered, []);


        });

        it('should return countries with peoples ', () => {
            const data = [{
                name: 'CountriesName1',
                people: []
            },
                {
                    name: 'CountriesName2',
                    people: [{
                        name: 'People1',
                        animals: [{name: 'Animals1'}]
                    }]
                }];

            const dataFiltered = filterAnimals(data);

            assert.isArray(dataFiltered);
            assert.deepEqual(dataFiltered, [{
                    name: 'CountriesName2',
                    people: [{
                        name: 'People1',
                        animals: [{name: 'Animals1'}]
                    }]
                }]
            );


        });

        it('should not return people without animals ', () => {
            const data = [
                {
                    name: 'CountriesName1',
                    people: []
                },
                {
                    name: 'CountriesName2',
                    people: [{
                        name: 'People1',
                        animals: [{name: 'Animals1'}]
                    }]
                },
                {
                    name: 'CountriesName3',
                    people: [{
                        name: 'people withoutanimals',
                        animals: []
                    }]

                }];

            const dataFiltered = filterAnimals(data);

            assert.isArray(dataFiltered);
            assert.deepEqual(dataFiltered, [{
                    name: 'CountriesName2',
                    people: [{
                        name: 'People1',
                        animals: [{name: 'Animals1'}]
                    }]
                }]
            );


        });

        it('should filter all object with ry', () => {
            dataFiltered = filterAnimals(testDataInput, "ry");

            assert.deepEqual(dataFiltered, [
                {
                    name: 'Uzuzozne',
                    people: [{
                        name: 'Lillie Abbott',
                        animals:
                            [{name: 'John Dory'}]
                    }]
                }, {
                    name: 'Satanwi',
                    people: [{
                        name: 'Anthony Bruno',
                        animals:
                            [{name: 'Oryx'}]
                    }]
                }])
        })


    });


    describe('for cmd execution', () => {
        it('should return filter data with argument --filter=ry', () => {
            const result = cmd(testDataInput, '--filter=ry');
            assert.deepEqual(result, [
                {
                    name: 'Uzuzozne',
                    people: [{
                        name: 'Lillie Abbott',
                        animals:
                            [{name: 'John Dory'}]
                    }]
                }, {
                    name: 'Satanwi',
                    people: [{
                        name: 'Anthony Bruno',
                        animals:
                            [{name: 'Oryx'}]
                    }]
                }])
        });
    })
})
