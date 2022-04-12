document.getElementById('login-submit').addEventListener('click',function(){
    //email
    const emailField =document.getElementById('user-email');
    const userEmail = emailField.value;
    // password
    const passwordFileld =document.getElementById('user-password');
    const userPassword = passwordFileld.value;
    
      // check email and password
    if(userEmail == 'sazal@' && userPassword == '123'){
        window.location.href = 'bank_login.html';   
    }

});
