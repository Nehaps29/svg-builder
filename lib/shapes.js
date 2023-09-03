class Shape {
    constructor (color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(color,text, textColor){
        super(color,text, textColor)
    }
   //Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
    render (){

       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

       <circle cx="150" cy="100" r="80" fill="${this.color}" />
     
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
     
     </svg>`

   }
}


class Square extends Shape {
    constructor(color,text, textColor){
        super(color,text, textColor)
    }
   //Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
    render (){

       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

       <rect x="50" height="200" width="200" fill="${this.color}" />
     
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
     
     </svg>`

   }
}

class Triangle extends Shape {
    constructor(color,text, textColor){
        super(color,text, textColor)
    }
   //Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
    render (){

       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

       <polygon height="100%" width="100%" points = "0,200 300,200 150,0" fill="${this.color}" />
     
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
     
     </svg>`

   }
}
module.exports = {Circle, Square, Triangle}