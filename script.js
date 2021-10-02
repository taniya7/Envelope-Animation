// Front to Back flip
setTimeout(() => {
    setTimeout(() => {
      const envelope = document.getElementById("full-envelope");
      envelope.style.transform = "rotateY(180deg)";
    }, 1500);
});
  
setTimeout(openEnvelope, 1500);   

// Opening of Envelope Lid  
function openEnvelope() {
    setInterval(() => {
        document.getElementById("lid").style.transform = "rotate(180deg)";      
    }, 2000);  
    setTimeout(cardUp, 2000);
}
 
// Moving of Card up
function cardUp() {
    const card = document.getElementById("card");
    const lid = document.getElementById("lid");   
  
    lid.style.zIndex = 1;    
    card.style.zIndex = 2;   

    let i = 0;
    let id = null;
    clearInterval(id);
  
    id = setInterval(() => {
        if (i == 300) {
        clearInterval(id);
        } 
        else {       
        card.style.top = -i + "px";
        i++;
        }
    });
  
    setTimeout(cardDown, 4000);
}  
  
// Moving of Card down
function cardDown() {
    const card = document.getElementById("card");
    const container = document.getElementById("container");     
  
    let i = 0;
    let id = null;
    clearInterval(id);
  
    id = setInterval(() => {
        if (i == 100) {       
        clearInterval(id);
        } 
        else {
        card.style.top = -400 + i*4  + "px";       
        i++;
        }
},15);

    setTimeout(closeEnvelope, 1000);    
} 

// Closing of Envelope Lid    
function closeEnvelope() {        
    setInterval(() => {
        const lid = document.getElementById("lid");          
        lid.style.transform = "rotate(0deg)";          
        lid.style.display = "block";
        lid.style.zIndex = 5;           
    }, 1000);            
        
    setTimeout(flipEnvelope, 1000);
}    

// Back to Front flip    
function flipEnvelope() {
    setInterval(() => {
        const envelope = document.getElementById("full-envelope");
        envelope.style.transform = "rotateY(0deg)";           
    }, 1000)
}    
 

    