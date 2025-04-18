const { sum, fromEuroToDollar } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
   
    let total = sum(14, 9);

   
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {


  
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07;

 
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One Dollar should be 146.26 yen", function () {
    const {fromDollarToYen} = require('./app.js');
    const dollars = 1;
    const expected = dollars * (1 / 1.07) * 156.5;
    expect(fromDollarToYen(dollars)).toBeCloseTo(expected, 2); 
});

test("One Yen should be 0.00556 Pounds", function () {
    const { fromYenToPound } = require('./app.js');
    
    const yen = 1;
    const expected = (1 / 156.5) * 0.87; 

    expect(fromYenToPound(yen)).toBeCloseTo(expected, 5);
});
