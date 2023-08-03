
   
   
      var td =document.getElementsByTagName("td");
    for (var i=0; i<td.length; i++){
    
        if(td[i].innerHTML % 2 == 0){
           td[i].onmouseover=function(){
            this.style.backgroundColor="green";
           }
           td[i].onmouseout=function(){
            this.style.backgroundColor="white";
           }
          }else(td[i].innerHTML % 2 == 1) 
        {
            td[i].onclick=function(){
                this.style.backgroundColor="red";
               }
             td[i].onmouseout=function(){
                this.style.backgroundColor="white";
               }

        }
        console.log(td[i].innerHTML)
    }
   
   
