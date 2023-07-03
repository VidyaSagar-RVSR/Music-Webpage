const kits=["Drums","Flute","Guitar","Harp","Piano","Violin",]
// making a array of each instrument 

const containerEl = document.querySelector(".container");
//this is created so that, we can add classes and buttons created in js in html container

// function to create a button along with audio effects for each element in kits

kits.forEach((kit) =>{
    //remeber this is a loop, so define everything for 1 iteration alone

    
    // createElement method to creat an element 
    const btnEl= document.createElement("button");
    // with "button" in paramerter, u create a button type element 


    // add class called btn for the button element  creasted in js 
    btnEl.classList.add("btn")
    
    //to add the display name to the button element created
    btnEl.innerText=kit;
   
//we're putting background image for each button type element dynammically in java script
//Note the tag to change backgroundimage is different in css and JS, in css there is hypen (-), not in JS
    btnEl.style.backgroundImage = "url(/Images/" + kit + ".jpeg)"


    // append the created button element to the coninter in the body 
    containerEl.appendChild(btnEl);

    //creating audio effect for the created button type element
    const audioEl=document.createElement("audio");
    
     audioEl.src = "/Audio/" + kit +".mp3"
    // append the audio elemnt to the container 
    containerEl.appendChild(audioEl);

    //event listener for click,on the button(btnEl) the action u want  to do when u click that button 
    btnEl.addEventListener("click", ()=>{
        audioEl.play();
    })




})