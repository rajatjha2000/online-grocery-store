const usericon = document.querySelector('#cart-icon');
const cartbox = document.querySelector('.cartbox');
// const regicon = document.querySelector('.register-user');
// const signupbox = document.querySelector('.signupbox');
const cartCloseBtn= document.querySelector('.fa-close');
usericon.addEventListener("click",function(){
    cartbox.classList.add('active');
});
// regicon.addEventListener("click",function(){
    // signupbox.classList.add('active');
// });
cartCloseBtn.addEventListener("click",function(){
    cartbox.classList.remove('active');
    // signupbox.classList.remove('active');
});


