let products = JSON.parse(localStorage.getItem('products')) || [
  {id:1,name:"Minimal Watch",price:120,img:"watch.avif"},
  {id:2,name:"Sneakers",price:90,img:"sneakers.jpg"},
  {id:3,name:"Headphones",price:150,img:"headphones.jpg"}
];

function saveProducts(){
  localStorage.setItem('products', JSON.stringify(products));
}
