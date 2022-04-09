/* const names = document.getElementsByClassName('item');
         for(const name of names){
             name.addEventListener('click',function(event){
                 // general formula
                // document.getElementById('item-container').removeChild(name);
 
                event.target.parentNode.removeChild(event.target);
             
 
             });
      
         }   */
 
         document.getElementById('add-item').addEventListener('click',function(){
            const li =document.createElement('li');
            li.innerText ='nabiad group software enginer sazal';
            li.classList.add('item');
            const parent =document.getElementById('item-container');
            parent.appendChild(li);
    });
    document.getElementById('item-container').addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target);
    })