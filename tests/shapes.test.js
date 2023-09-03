//tests for shapes render method

const {Circle, Square, Triangle} = require('./shapes.js')


describe('Circle', () => {
  it('should render a circle SVG string with the given color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red" />`;
    expect(circle.render()).toEqual(expectedSVG);
  });
});


describe('Square', () => {
  it('should render a square SVG string with the given color', () => {
    const square = new Square();
    square.setColor('green');
    const expectedSVG = `<rect x="50" height="200" width="200" fill="green" />`;
    expect(square.render()).toEqual(expectedSVG);
  });
});

describe('Triangle', () => {
  it('should render a triangle SVG string with the given color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const expectedSVG = `<polygon height="100%" width="100%" points = "0,200 300,200 150,0" fill="blue" />`;
    expect(triangle.render()).toEqual(expectedSVG);
  });
});

