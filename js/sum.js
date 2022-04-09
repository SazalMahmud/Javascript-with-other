console.log('hello');
const blogs = document.getElementsByTagName('p');
for(const blog of blogs){
    console.log(blog);
    blog.style.backgroundColor = 'green';
    blog.style.color = 'black';

}
const change = document.getElementById('two');
change.innerHTML = `
<h2> HI i Am </h2>
<div>
     <ul>
         <li> Sazal Mahmud</li>
     </ul>
</div>
`
// remove 
const friends =document.getElementById('list');
const change_list= friends.children[0];
friends.removeChild(change_list);
// create element
const friend = document.createElement('li');
friend.innerText ='rofiq';
friends.appendChild(friend);