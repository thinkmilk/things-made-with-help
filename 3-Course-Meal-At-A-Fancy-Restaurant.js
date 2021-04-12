// menu object which simulates the items available
const menu = {
 

 // arrays holding all menu items, with courses
 // each array is accessed with a get and set function
  _courses: {
    
    appetizers: [],
     
    mains: [],
  
    desserts: [],
},


// get and set functions for menu's course items
  get desserts() {
      return this._courses.desserts;
    },    set desserts(x) {
      this.desserts.push(x);
    },

  get appetizers() {
      return this._courses.appetizers;
    },    set appetizers(x) {
      this.appetizers.push(x)
    },

  get mains() {
     return this._courses.mains;
    },    set mains(x) {
      this.mains.push(x);
    },


// displays the full menu
get courses() {
  return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts
  };
},


// puts a menu item into the correct section of the menu
addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    if (courseName === 'desserts') {
        this.desserts = dish;
    } else if (courseName === 'mains') {
        this.mains = dish;
    } else if (courseName === 'appetizers') {
        this.appetizers = dish;
    } else {
        return console.log('invalid course name: '+courseName);
    };
},


// returns a single (random) item from each course for a full-course meal
getRandomDishFromCourse (courseName) {  
  if (courseName === 'desserts') {
      let x = Math.floor(Math.random() * this.desserts.length);
        return this.desserts[x];
    } else if (courseName === 'mains') {
        let x = Math.floor(Math.random() * this.mains.length);
        return this.mains[x];
    } else if (courseName === 'appetizers') {
        let x = Math.floor(Math.random() * this.appetizers.length);
        return this.appetizers[x];
    } else {
        return console.log('invalid course name: '+courseName); }
},


// creates a full 3 course dinner from random menu items
// calculates the total for the entire dinner
// returns a string with the dinner and dinner total

generateRandomMeal () {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');

 let totalPrice = (appetizer.price + main.price + dessert.price);

return `To start, you will be having ${appetizer.name}, followed by ${main.name}. Your dessert today will be a lovely ${dessert.name}. My name is Eduardo, and I will be your server today. The bill total for tonight comes to ${totalPrice}\$. Is there anything else I can help you with?`;

}

};


// start menu items
menu.addDishToCourse('appetizers', 'Salmon Carpaccio', 8.00);
  menu.addDishToCourse('appetizers', 'Sweet Potato fries Antipasto', 14.00);
  menu.addDishToCourse('appetizers', 'Aged Cheddar and House crackers', 12.00);
  menu.addDishToCourse('appetizers', 'Ichiban Ramen', 1.00);
  menu.addDishToCourse('mains', 'Prime Ribeye Steak and frites', 30.00);
  menu.addDishToCourse('mains', 'Twin Braised Tuna burgers', 15.00);
  menu.addDishToCourse('mains', 'Chicken carbonara', 10.00);
  menu.addDishToCourse('mains', 'Convenience Store Sushi', 5.00);
  menu.addDishToCourse('desserts', 'Chocolate Cake', 10.00);
  menu.addDishToCourse('desserts', 'Affogato', 7.00);
  menu.addDishToCourse('desserts', 'New York style Cheesecake', 10.00);
  menu.addDishToCourse('desserts', 'House Gelato', 8.00);
  menu.addDishToCourse('desserts', 'Several Pieces of a Mango', 0.50);
// end menu items


// the 3 course meal..
let meal = menu.generateRandomMeal();


console.log(meal);