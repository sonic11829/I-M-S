require('dotenv').config();
require('./database');

const Item = require('../models/item');

(async function() {
  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'White Construction Paper', category: categories[0], price: 2.99, cost: 1.19, quantity: 0},
    {name: 'Black Construction Paper', category: categories[0], price: 2.99, cost: 1.19, quantity: 0},
    {name: 'Red Construction Paper', category: categories[0], price: 3.99, cost: 1.49, quantity: 0},
    {name: 'Green Construction Paper', category: categories[0], price: 3.99, cost: 1.49, quantity: 0},
    {name: 'Blue Construction Paper', category: categories[0], price: 3.99, cost: 1.49, quantity: 0},
    {name: 'Yellow Construction Paper', category: categories[0], price: 3.99, cost: 1.49, quantity: 0},
    {name: 'Graph Paper', category: categories[0], price: 2.49, cost: 0.99, quantity: 0},
    {name: 'Line Paper', category: categories[0], price: 1.25, cost: 0.49, quantity: 0},
    {name: '8 x 11 Printer Paper', category: categories[0], price: 4.99, cost: 1.99, quantity: 0},
    {name: '4 #2 Graphite Pencils', category: categories[1], price: 1.99, cost: 0.49, quantity: 0},
    {name: '12 #2 Graphite Pencils', category: categories[1], price: 5.49, cost: 1.47, quantity: 0},
    {name: '10 Sketching Pencils', category: categories[1], price: 4.99, cost: 1.99, quantity: 0},
    {name: '24 Black Pens', category: categories[2], price: 7.99, cost: 3.49, quantity: 0},
    {name: '12 Multi-Colour Pens', category: categories[2], price: 4.99, cost: 2.49, quantity: 0},
    {name: '4 Blue Pens', category: categories[2], price: 2.99, cost: 1.49, quantity: 0},
    {name: '4 Green Pens', category: categories[2], price: 2.99, cost: 1.49, quantity: 0},
    {name: '4 Orange Pens', category: categories[2], price: 2.99, cost: 1.49, quantity: 0},
    {name: '4 Red Pens', category: categories[2], price: 2.99, cost: 1.49, quantity: 0},
    {name: '4 Yellow Pens', category: categories[2], price: 2.99, cost: 1.49, quantity: 0},
    {name: '5 Multi-Colour Highlighters', category: categories[3], price: 2.99, cost: 1.49, quantity: 0},
    {name: '4 Blue Highlighters', category: categories[3], price: 2.99, cost: 1.49, quantity: 0},
    {name: '4 Green Highlighters', category: categories[3], price: 2.99, cost: 1.49, quantity: 0},
    {name: '4 Orange Highlighters', category: categories[3], price: 2.99, cost: 1.49, quantity: 0},
    {name: '4 Red Highlighters', category: categories[3], price: 2.99, cost: 1.49, quantity: 0},
    {name: '4 Yellow Highlighters', category: categories[3], price: 2.99, cost: 2.49, quantity: 0},
    {name: 'Basic BlackStaplers', category: categories[4], price: 4.99, cost: 2.49, quantity: 0},
    {name: 'Basic RedStaplers', category: categories[4], price: 4.99, cost: 2.49, quantity: 0},
    {name: 'Basic BlueStaplers', category: categories[4], price: 4.99, cost: 2.49, quantity: 0},
    {name: 'Milton Waddams\' Red SwinglineStaplers', category: categories[4], price: 19.99, cost: 12.95, quantity: 0},
    {name: 'Dwight\'s Stapler encased in JelloStaplers', category: categories[4], price: 29.99, cost: 24.99, quantity: 0},
    {name: 'Box of Staples', category: categories[4], price: 2.99, cost: 1.49, quantity: 0},
    {name: 'Cube Weights', category: categories[5], price: 4.99, cost: 3.49, quantity: 0},
    {name: 'Sphere Weights', category: categories[5], price: 4.99, cost: 3.49, quantity: 0},
    {name: 'Pyramid Weights', category: categories[5], price: 4.99, cost: 3.49, quantity: 0},
    {name: 'Lego Brick Weights', category: categories[5], price: 4.99, cost: 3.49, quantity: 0},
    {name: 'Basic Black Scissors', category: categories[6], price: 2.99, cost: 1.49, quantity: 0},
    {name: 'Basic Red Scissors', category: categories[6], price: 2.99, cost: 1.49, quantity: 0},
    {name: 'Basic Blue Scissors', category: categories[6], price: 2.99, cost: 1.49, quantity: 0},
    {name: 'Heavy Duty Scissors', category: categories[6], price: 14.99, cost: 12.99, quantity: 0},
  ]);

  console.log(items)

  process.exit();

})();