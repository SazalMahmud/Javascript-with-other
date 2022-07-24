
/*const displayLocalStorage =() =>{
    const cart =getCart();
    for(const name in cart){
        display(name);
    }

}*/

const addmember = () =>{
    const nameField = document.getElementById('member-name');
    const name = nameField.value;
    
    //display ui
    display(name);
    // local storage
    addmembers(name);
    
    nameField.value ='';


}
const display = name =>{
    const ul = document.getElementById('members');
    const li = document.createElement('li')
    li.innerText =name;
    ul.appendChild(li);
}

const getCart =() =>{
    const cart = localStorage.getItem('cart');
    let cartobj;
    if(cart){
        cartobj =JSON.parse(cart);
    }
    else{
        cartobj ={};
    }
    return cartobj;
}
 const addmembers =name =>{
    const cart = getCart;
    cart[name] =1;
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart',cartString);
 }
 //displayLocalStorage();