//delete
document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('secret-info').style.display = 'none';
 });
 //focus
 document.getElementById('delete-conf').addEventListener('focus',function(){
     document.body.style.backgroundColor ='green';

 });
 //white
 document.getElementById('delete-conf').addEventListener('blur',function(){
     document.body.style.backgroundColor ='white';

 });
 // delete only sazal press
 document.getElementById('delete-conf').addEventListener('keyup',function(event){
     const deleteBtn = document.getElementById('delete-btn');
     if(event.target.value=='sazal'){
         deleteBtn.removeAttribute('disabled');
     }
     else{
         deleteBtn.setAttribute('disabled',true);
     }
 })