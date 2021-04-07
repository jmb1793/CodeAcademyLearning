/*
This Script uses Advanced object construction with a getter, indexing, and random assignments.
Creates a menu and then calls a random meal based on the chosen Course
*/

//Create Menu Object with nested private object, a getter, and 2 methods
const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get courses(){
      return {
        courses: this._courses,
      }
    },
  
    //Will Add Checks and defaults later to make sure the dishes are being access properly

    addDishToCourse(courseName,dishName,dishPrice){ 
        // Takes in 3 parameters, courseName, dishName, dishPrice
        //Assigns the dishName and dishPrice to an object that gets pushed to this._courses
      const dish = {
        name: dishName,
        price: dishPrice,
      }
      this._courses[courseName].push(dish);    
    },

    getRandomDishFromCourse(courseName){
        // Takes 1 parameter and returns a random dish
      let dishes = this._courses[courseName];
      let randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    }
  
  }
  
  //console.log(menu.courses)
  
  menu.addDishToCourse('appetizers','chicken nuggets',9)
  menu.addDishToCourse('appetizers','fish sticks',10)
  menu.addDishToCourse('appetizers','french fries',8)
  
  menu.addDishToCourse('desserts','ice cream',4)
  menu.addDishToCourse('desserts','boba',3)
  menu.addDishToCourse('desserts','yogurt',3)
  
  menu.addDishToCourse('mains','pizza', 12)
  menu.addDishToCourse('mains','burrito', 11)
  menu.addDishToCourse('mains','tacos', 6)
  
  let meal = menu.getRandomDishFromCourse('appetizers')
  
  console.log(meal)