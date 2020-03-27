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
     let canvasHeight = Math.min(480, deviceWidth - 30 );
     let canvasWidth = Math.min(640, deviceWidth - 30);
     this.$canvas.height = canvasHeight;
     this.$canvas.width = canvasWidth;  
   }
   //A function that renders the meme to the canvas
   //this will contain the primary canvas renderer
   createMeme() {
      
      let context = this.$canvas.getContext('2d');
      if ( this.$imageInput.files && this.$imageInput.files[0]){

         //created a new instance of FileReader in the reader variable
         let reader = new FileReader();
         
            //This event is triggered each time the reading operation is successfully completed.
            reader.onload = () => {  //event handler
               
               //I need to create an image object using the result from the file reader.               
               let image = new Image(); //image constructor
               image.onload = () => {
                  this.$canvas.height = image.height;
                  this.$canvas.width = image.width;
               };
               
               image.src = reader.result;
            }
         //Starts reading the contents of the specified Blob, once finished, the result
         // attribute contains a data: URL representing the file's data.
         //JS will execute this line first and find that is an asynchronous event.
            reader.readAsDataURL(this.$imageInput.files[0]);
            console.log('This will get printer first');
         };         
   }
   //An event listener that listens to the keyup event on these input boxes. 
   addEventListeners() {       
      this.createMeme = this.createMeme.bind(this);
      //This creates an array of reference objects to all the target input elements.        
      let inputNodes = [this.$topTextInput, this.$bottomTextInput, this.$imageInput];
      inputNodes.forEach((e) => {
         e.addEventListener('keyup', this.createMeme);      
      });
      //If the user copies and pastes text into the text inputs without pressing any
      //keyboard buttons, we need to handle the change
      inputNodes.forEach((e) => {
         e.addEventListener('change', this.createMeme);
      })
   }    
}

      

let x = new Memes();
x.addEventListeners();
x.createCanvas();