

    var table=document.getElementById("mytable");
    var targetTDs=table.querySelectorAll('tr > td');
    for (var i=0; i<targetTDs.length; i++){
        var td=targetTDs[i];
        if(td.innerHTML % 2 == 0){
            td.onmouseover=function() {
                this.parentNode.style.backgroundColor = "green";
            }
            td.onmouseout =function(){
                this.parentNode.style.backgroundColor="white";
            }
          }else(td.innerHTML % 2 == 1) 
        {
            td.onmouseover=function() {
                this.parentNode.style.backgroundColor = "red";
            }
            td.onmouseout =function(){
                this.parentNode.style.backgroundColor="white";
            }

        }
        console.log(td.innerHTML);
    }
   
   
