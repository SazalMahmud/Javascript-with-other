document.getElementById('add-border').addEventListener('click',
function(){
     const container = document.getElementById('friend-container');
     container.style.border = '5px solid Salmon';
});

function AddbackgroundColor(){
    const friends =document.getElementsByClassName('friend');
    for(const friend of friends){
    friend.style.backgroundColor = 'ForestGreen'
   }
}
document.getElementById('AddFriend').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML =`<h3 class="friend-name"> New add friend</h3>
    <p>Est, quibusdam.</p>`;
    container.appendChild(friendDiv);
})

