class Shape {
    constructor (color, text){
        this.color = color;
        this.text = text;
    }
}

class Circle extends Shape {
    constructor(color,text){
        super(color,text)
    }
   //Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
    render (){

   }
}



module.exports = {Circle}