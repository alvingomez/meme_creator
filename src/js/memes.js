import './general';


class Memes {
 constructor() {
//Creating a reference to all the required DOM elements in the class.
//Variables that start with a $ contain a reference to the DOM elements
this.$canvas = document.querySelector('#imgCanvas');
this.$topTextInput = document.querySelector('#topText');
this.$bottomTextInput = document.querySelector('#bottomText');
this.$imageInput  = document.querySelector('#image');
this.$downloadButton = document.querySelector('#donwloadMeme');
 }
}