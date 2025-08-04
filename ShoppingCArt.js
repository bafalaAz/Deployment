const storeProducts = {
  apples: 8.50,
  bananas: 3.75,
  milk: 9.25,
  bread: 4.50,
};
const shoppingCart = [
  'apples',
  'bananas',
  'milk',
  'bread'
];
function calculateCartTotal(cart, products) {
  let total = 0; 

  
  for (let i = 0; i < cart.length; i++) {
    const itemName = cart[i]; 
    const itemPrice = products[itemName];

    
    total += itemPrice;
  }

  return total;
}
