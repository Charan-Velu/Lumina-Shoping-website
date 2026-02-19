let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id){
  const p = products.find(x=>x.id===id);
  const f = cart.find(x=>x.id===id);
  f ? f.qty++ : cart.push({...p,qty:1});
  saveCart();
  updateCartBadge();
}

function renderShop(){
  const box = document.getElementById('productBox');
  if(!box) return;
  box.innerHTML='';
  products.forEach(p=>{
    box.innerHTML+=`
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function renderCart(){
  const box = document.getElementById('cartBox');
  if(!box) return;
  box.innerHTML='';
  let total=0;
  cart.forEach(p=>{
    total+=p.price*p.qty;
    box.innerHTML+=`
      <div class="cart-item">
        <span>${p.name} × ${p.qty}</span>
        <span>$${p.price*p.qty}</span>
      </div>
    `;
  });
  box.innerHTML+=`<h3>Total: $${total}</h3>`;
}

function updateCartBadge(){
  const badge=document.getElementById('cartCount');
  if(badge) badge.innerText=cart.reduce((a,b)=>a+b.qty,0);
}

function toggleTheme(){
  document.body.classList.toggle('dark');
}

document.addEventListener('DOMContentLoaded',()=>{
  renderShop();
  renderCart();
  updateCartBadge();
});
