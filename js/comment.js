document.getElementById('Send').addEventListener('click',function(){
    const commentBox = document.getElementById('submit');
    // create comment
    const p = document.createElement('p');
    p.innerText =commentBox.value;
    // add comment
   const commentList = document.getElementById('container');
    commentList.appendChild(p);
    // clean the comment box
    commentBox.value ='';

})