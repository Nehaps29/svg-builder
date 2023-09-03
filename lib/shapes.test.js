//test for shap

const {Circle, Square, Triangle} = require('./shapes.js')


describe('Circle', () => {
  it('should render a circle SVG string with the given color', () => {
    const circle = new Circle('red', 'SVG', 'white');
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      
    <circle cx="150" cy="100" r="80" fill="red" />
      
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`;
    expect(circle.render()).toBe(expectedSVG);
  });
});

/*
describe('circle tests', function () {
    test("should render",function () {
       //arrange---set test varaibles
       const expected = "circle";
       //act---create new circle
       const circle = new Circle();
       const actaul = 
       //assert---test
       expect(actual).toEqual(expected)
    })
    
    test("my second test",function () {
    
    })
}) 

describe('square tests', function () {
    test("should render",function () {
       //arrange---set test varaibles
       const expected = "square";
       //act---create new circle
       const square = new Square();
       const actaul = 
       //assert---test
       expect(actual).toEqual(expected)
    })
    
    test("my second test",function () {
    
    })
}) 

describe('triangle tests', function () {
    test("should render",function () {
       //arrange---set test varaibles
       const expected = "triangle";
       //act---create new circle
       const triangle = new Triangle ();
       const actual = 
       //assert---test
       expect(actual).toEqual(expected)
    })
    
    test("my second test",function () {
    
    })
}) 

describe('Circle', () => {
  it('should render a circle SVG string with the given color', () => {
    const circle = new Circle('red', 'SVG', 'white');
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="red" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`;

    expect(circle.render()).toEqual(expectedSVG);
  });
});
*/