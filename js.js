let mouseX = 0, mouseY = 0; 
let timeoutId2 = null; 
let timeoutId3 = null; 
let timeoutId = null; 
function removetest(event){
    if(timeoutId2 !== null){
        clearTimeout(timeoutId2);
    }

        timeoutId2 = setTimeout(() => {
            let mousepos = document.elementFromPoint(mouseX, mouseY);
            if(mousepos == null || mousepos && !document.getElementById("Ref").contains(mousepos) && !document.getElementById("popupBox").contains(mousepos) ){
               document.querySelector("#popupBox").style.opacity = "0";
              if(timeoutId3==null){timeoutId3 =  setTimeout(() => {document.querySelector("#popupBox").style.display = "none"; timeoutId3 = null;}, 500)}
            }
        }, 500);
}
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector("#popupBox")) {
            let newdiv = document.createElement("div");
            newdiv.id = "popupBox"; 
            newdiv.style.cssText = `
                position: fixed;
                top: 6.5%;
                left: 88%;
                text-align: center;
                width: 10%;
                display: none;
                opacity: 0;
                transition: opacity 0.5s;
                flex-direction: column;
                background-color: white;
                color: gray;
                box-shadow: 0px 0px 5px 2px silver;
                z-index: 1000;
                font-size: 1vw;
                font-family: fantasy;
            `;
            let graphicreflection = document.createElement("p");
            let ref = document.createElement("p");
            graphicreflection.innerHTML = "Graphic Design"; 
            graphicreflection.style.cursor = "pointer";
            graphicreflection.id = "graf";
            ref.innerHTML = "Website Code"; 
            ref.style.cursor = "pointer";
            newdiv.appendChild(graphicreflection);
            //newdiv.appendChild(ref);

            document.body.querySelector("#header").append(newdiv); 
            document.getElementById("popupBox").addEventListener("mouseout", (event) => removetest(event));
            document.querySelector("#graf").addEventListener('click', function(){
                document.getElementById("header").style.color = "black";
                document.querySelector("#page").innerHTML = `
                    <div class="graphicref">
                <h1>Reflection on Graphic Design</h1>
                <p>Reflection Goes Here</p>
            </div>
                `;
            })
        }
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header'); 
        if(window.scrollY > this.window.innerHeight*0.04) {
            header.style.backgroundColor = 'white'; 
            header.style.color = "darkcyan";
        } if (this.window.scrollY < this.window.innerHeight*0.01) {
            header.style.backgroundColor = 'transparent'; 
            if(this.document.getElementsByClassName("about-me-content").length > 0){
                header.style.color = "black";
            }else if(this.document.getElementsByClassName("graphicref").length > 0){
                 header.style.color = "black";
            }else{
            header.style.color = "white";
            }
        }
    });
    document.addEventListener("mousemove", function(event){
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
    document.getElementById('about-link').addEventListener('click', function() {
        document.getElementById("header").style.color = "black";
        document.getElementById('page').innerHTML = `
            <div class="about-me-content">
                <h1>About Me</h1>
                <p>Hi! I'm Martin Garment </p>
            </div>
        `;
    });
    document.getElementById('graphic-link').addEventListener('click', function() {
        document.getElementById("header").style.color = "white";
        document.getElementById('page').innerHTML = `
     <div class = "cover-card" style = "padding-top: 12vh;">
        <img src = "birdie1.png" width = "40%">
        <div class = "text">
            <h1 class = "coverheader">Pattern Drawing</h1>
            <p>Meow Meow Meow Meow Meow Meow Meow</p>
        </div>
    </div>
        `;
    });
    

    document.getElementById("Ref").addEventListener('mouseover', function () {
        if(timeoutId3 !== null) {clearTimeout(timeoutId3);timeoutId3 = null;}
        document.querySelector("#popupBox").style.display = "flex";
    setTimeout(() => {document.querySelector("#popupBox").style.opacity = "1";}, 0);        
    });
//

document.getElementById("Ref").addEventListener("mouseout", function(event){

    if(timeoutId !== null){
        clearTimeout(timeoutId);
    }

        timeoutId = setTimeout(() => {
            let mousepos = document.elementFromPoint(mouseX, mouseY);
            if(mousepos == null || mousepos && !document.getElementById("popupBox").contains(mousepos) && !document.getElementById("Ref").contains(mousepos)){
                document.querySelector("#popupBox").style.opacity = "0";
              timeoutId3 =  setTimeout(() => {document.querySelector("#popupBox").style.display = "none"; timeoutId3 = null;}, 500)
            }
        }, 500);


});



});

