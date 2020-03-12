window.addEventListener('load',function(){
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    const totalWidth = slideCount * slideWidth + 'px';
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.getElementById('next');
    const previous = document.getElementById('prev');
    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    next.addEventListener('click', function(evt){
        evt.preventDefault();
        counter++;
        if (counter == slideCount) {
            counter = 0;
            leftPosition = 0;
            slider.style.left = leftPosition;
        } else {
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
        }
    });
    previous.addEventListener('click', function(evt){
        evt.preventDefault();
        counter--;
        if (counter < 0) {
            counter = slideCount - 1;
            leftPosition = `-${counter * slideWidth}px`;;
            slider.style.left = leftPosition;
        } else {
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
        }
    });
});



(function(){
	
        "use strict";
        
        const selected = document.querySelectorAll('.selected');
    
        for( let i=0; i<selected.length; i++){
            
            
            selected[i].addEventListener("mouseenter", function(event){
                    event.preventDefault(); 
                    event.target.setAttribute("class", "selected hover-selected");
            });
           
            selected[i].addEventListener("mouseleave", function(event){
                event.preventDefault(); 
                event.target.setAttribute("class", "selected");
            });
          
            selected[i].addEventListener("touchstart", function(event){
                event.preventDefault();                 
                
                if(event.target.classList.contains("hover-selected")){
                    event.target.setAttribute("class", "selected");
                }
                
                else{
                    
                    for(let i=0; i<selected.length; i++){
                        selected[i].setAttribute("class", "selected");
                    }
                    
                    event.target.setAttribute("class", "selected hover-selected");
                }
            });
        }
    }());


    