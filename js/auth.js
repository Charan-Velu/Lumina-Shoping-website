let user = JSON.parse(localStorage.getItem('user'));

function login(email){
  user = { email };
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = 'checkout.html';
}

function logout(){
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}

function protect(){
  if(!user){
    window.location.href = 'login.html';
  }
}
