var colormenu=document.getElementById("colors");
var icons=document.getElementById("icons");
var set=document.getElementById("set")
var colors=document.getElementsByClassName("type");
var mybtn=document.getElementById("try");
var homebtn=document.getElementById('homebtn');
let s=true;
 icons.addEventListener("click",showcolors)
   function showcolors(){
       if(s==true){
        colormenu.style.cssText=`width:300px;
        visibility:visible;`;
        icons.style.cssText=`right:300px`;
        set.classList.remove("fa-gears")
        set.classList.add("fa-xmark")
        s=false;
       }
       else{
            colormenu.style.cssText=`width:0;
            visibility:hidden;`;
            icons.style.cssText=`right:0;`
            set.classList.remove("fa-xmark")
            set.classList.add("fa-gears")
            s=true;
            
        }
     }
for (let i =0; i< colors.length;i++) {
    colors[i].addEventListener("click",changecolor)
    function changecolor(eventinfo){ 
        var getcolor=eventinfo.target.classList.value[0];
        switch(getcolor){
            case "r":
            console.log(getcolor)
            mybtn.style.cssText=`background-color:red`;
            homebtn.style.cssText=`background-color:red`;
            break;
            case "b":
                console.log(getcolor)
             mybtn.style.cssText=`background-color:blue !important `;
             homebtn.style.cssText=`background-color:blue`;
             break;
             case "y":
                console.log(getcolor)
               mybtn.style.cssText=`background-color:yellow `;
             homebtn.style.cssText=`background-color:yellow `;
             break;
             case "g":
                console.log(getcolor)
                mybtn.style.cssText=`background-color:green `;
             homebtn.style.cssText=`background-color:green `;
             break;
             case "h":
                console.log(getcolor)
              mybtn.style.cssText=`background-color:gray `;
             homebtn.style.cssText=`background-color:gray `;
             break;

        }
        }
         
      }


