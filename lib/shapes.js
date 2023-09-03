
// Class constructor for shapes
class Shape {
    constructor (color, text, textColor){
        
        this.text = text;
        this.textColor = textColor;
        this.setColor(color);
       }
       setColor(color) {
        this.color = color;
       }
       textRender () {
         return `<text x="150" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
       }
}

//using inheretence 
class Circle extends Shape {
   
   //Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
    render (){
       return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
   }
}

class Square extends Shape {
 
 //Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
  render (){
     return `<rect x="50" height="200" width="200" fill="${this.color}" />`
 }
}

class Triangle extends Shape {
  
 //Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
  render (){
     return `<polygon height="100%" width="100%" points = "0,200 300,200 150,0" fill="${this.color}" />`
 }
//polymorphism so that the text looks at center for triangle
 textRender () {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}


module.exports = {Circle, Square, Triangle}