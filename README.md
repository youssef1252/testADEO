# Context

- Create Two command-line Node.js. This program filter a list of element containing a pattern from the following file data.js , there are Countries containing Peoples containing Animals.
```sh
# Only animals containing `ry` are displayed. The order should be kept intact

$ node app.js --filter=ry
[
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
    }
]
```
- the next goal is to count People and Animals by adding the count of children in the name, eg. Satanwi [2].

```sh
node app.js --count
[
  { name: 'Satanwi [1]',
     people:
      [ { name: 'Elmer Kinoshita [1]',
          animals:
           [ { name: 'Wrysel' },
        { name: 'Cora Howell [2]',
          animals:
           [ { name: 'Rrya' },
             { name: 'Pronryorn' } ] },
        { name: 'Anthony Bruno [3]',
          animals:
           [ { name: 'Caryxcal' },
             { name: 'Tryantula' },
             { name: 'Oryx' } ] } ] } ]
...
]
```

## Author

Youssef Benkhair
