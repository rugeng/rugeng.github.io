(function(){ 
    "use strict";

      // listen for the submission of the form
      document.getElementById("myform").addEventListener("submit", function(event){
        // prevent the default behavior
        event.preventDefault();

        // get all the text fields from the form
        const formData = document.querySelectorAll("input[type=text]");
        // create an array to hold values from the form
        const words = [];

        //loop through the fields and add the words to the array, one at a time.
        for( let i=0; i<formData.length; i++){
            words.push(formData[i].value);    
        }
        //You can see the array in the console, if you want...
        console.log(words);
        makeMadLib(words);

    });

    
        function makeMadLib(theWords){
            const madlib = `The customer wants a pizza with ${theWords[0]} and ${theWords[1]}. This customer feel  ${theWords[2]} when they eat pizza. This customer usaually eat  ${theWords[3]} pieces. And this customer eat their pizza ${theWords[4]}. `;
            const mlContainer = document.getElementById('madlib');  mlContainer.innerHTML = `<p>${madlib}</p>`;
            mlContainer.setAttribute("class", "visible");
        }
}());