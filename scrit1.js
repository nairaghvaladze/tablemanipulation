
   
   
      var td =document.getElementsByTagName("td");
    for (var i=0; i<td.length; i++){
        td[i].onmouseover=function()  {
            if(this.innerHTML %2 ==0){
                this.style.backgroundColor="green";
            }
            else {
                this.style.backgroundColor="red";
            }
        }

        td[i].onmouseout=function()  {
            if(this.innerHTML %2 ==0){
                this.style.backgroundColor="white";
            }
            else {
                this.style.backgroundColor="white";
            }
        }
    }
   
   
