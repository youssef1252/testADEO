#!/usr/bin/env node
const data = require('./data').data;
const util = require('util');

const filterAnimals = (data, filterTerm) => {

    const filterAnimalName = (animal) => {
        return animal.name.match(new RegExp(filterTerm));
    }

    return data.filter(country => {
        country.people = country.people.filter(
            person => {
                person.animals = person.animals.filter(animal => filterAnimalName(animal));
                return person.animals.length > 0
            });
        return country.people.length > 0;
    });
};

const cmd = (input, arg) => {
    let filterRegex = /^(--filter=(.+))$/;
    if (arg.match(filterRegex)) {
        return filterAnimals(input, arg.match(filterRegex)[2]);
    }

    return [];
}

module.exports = {filterAnimals, cmd}


if (process.argv[2]) {
    result = cmd(data, process.argv[2]);
    console.log(util.inspect(result, {showHidden: false, depth: null}));
}else{
    console.log('Nothing to do');
}
