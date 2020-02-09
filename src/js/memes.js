import './general';

//Variable to store device width
const deviceWidth = window.innerWidth;


class Memes {
 constructor() {
//Creating a reference to all the required DOM elements in the class.
//Variables that start with a $ contain a reference to the DOM elements
this.$canvas = document.querySelector('#imgCanvas');
this.$topTextInput = document.querySelector('#topText');
this.$bottomTextInput = document.querySelector('#bottomText');
this.$imageInput  = document.querySelector('#image');
this.$downloadButton = document.querySelector('#donwloadMeme');

this.createCanvas;
 }

 //Creating a Canvas with height and width 
 //Reduced the width by 30 to have space for the margins.
 createCanvas() {
  let canvasHeight = Math.min(480, deviceWidth - 30);
  let canvasWidth = Math.min(640, deviceWidth - 30);
  this.$canvas.height = canvasHeight;
  this.$canvas.width = canvasWidth; 
 
}
}


