var shopper = {
    firstName: 'Shelby',
    lastName: 'Murdock'
    canAdd: true,
}

var item = function(name, price, count) {
    this.name = name
    this.price = price
    this.count = count
};

shoppingcart = []

function addItemToShoppingcart(name, price, count) {
    item = new item(name, price, count);
    shoppingcart.push(item);
}
addItemToShoppingcart("Apple", 2.11, 6);


console.log('Shopping Cart'); 