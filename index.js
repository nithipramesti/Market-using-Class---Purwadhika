///////////////////////////////////////////////
//DEFINING CLASS
//Product class -- parent class
class Products {
  constructor(category, name, price, stock) {
    this.category = category;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

//FastFood class
class FastFood extends Products {
  constructor(category, name, price, stock, expired) {
    super(category, name, price, stock);
    this.expired = expired; //number: time range in year
  }
}

//Cloth class
class Cloth extends Products {
  constructor(category, name, price, stock, size) {
    super(category, name, price, stock);
    this.size = size; //string: S,M,XL
  }
}

//Electronic class
class Electronic extends Products {
  constructor(category, name, price, stock, warranty) {
    super(category, name, price, stock);
    this.warranty = warranty; //boolean: true, false
  }
}

//Fruits class
class Fruits extends Products {
  constructor(category, name, price, stock, sugarLevel) {
    super(category, name, price, stock);
    this.sugarLevel = sugarLevel; //string: Low, Medium, High
  }
}

///////////////////////////////////////////////
//LISTING PRODUCT
//Input products
let productList = [];
productList.push(new FastFood("Fast Food", "Sausage", 31, 13, 1));
productList.push(new Fruits("Fruits", "Mango", 2.75, 21, "Normal"));
productList.push(new Cloth("Cloth", "Yellow Shirt", 37, 9, "M"));
productList.push(new Cloth("Cloth", "Sweater", 68, 6, "S"));

productList.push(
  new Electronic("Electronic", "Mackbook Air 2020", 1249, 15, true)
);
productList.push(new Fruits("Fruits", "Grape", 7.25, 10, "High"));
productList.push(new Cloth("Cloth", "Leather Jacket", 104, 6, "M"));
productList.push(
  new Electronic("Electronic", "Lightning Cable", 19, 23, false)
);

productList.push(new Fruits("Fruits", "Banana", 3.5, 27, "Low"));
productList.push(new FastFood("Fast Food", "Nugget", 28, 15, 1));
productList.push(new Fruits("Fruits", "Apple", 5, 18, "High"));

//FILTERING PRODUCT
//Fast food products
let fastFoodProducts = productList.filter(
  (product) => product.category == "Fast Food"
);

//Cloth products
let clothProducts = productList.filter(
  (product) => product.category == "Cloth"
);

//Electronic products
let electronicProducts = productList.filter(
  (product) => product.category == "Electronic"
);

//Fruit products
let fruitProducts = productList.filter(
  (product) => product.category == "Fruit"
);

console.log(electronicProducts);

///////////////////////////////////////////////
//DISPLAY FUNCTION
//Displaying category
let categoryList = ["Fast Food", "Cloth", "Electronic", "Fruits"];
let categoryDisplay = "";
categoryList.forEach((category, index) => {
  categoryDisplay += `${index + 1}. ${category}\n`;
});

//Displaying product in each category
let displayingProduct = (category) => {
  let productDisplay = "";
  category.forEach((product, index) => {
    productDisplay += `${index + 1}. ${product.name}: $${product.price}\n`;
  });
};

///////////////////////////////////////////////
//MARKET APP
while (true) {
  //select menu
  let mainMenu = prompt(
    "Welcome! \nPlease select the menu below: \n1. Display products \n2. Add products \n3. Remove products \n4. Buy products \n5. Exit"
  );

  if (mainMenu == 1) {
    //Ask which category want to display
    let displayCategoryMenu = prompt(
      `Which product do you want to display? \n${categoryDisplay}`
    );

    if (displayCategoryMenu == 1) {
      let selectCategory = "";
      fastFoodProducts.forEach((product, index) => {
        selectCategory += `${index + 1}. ${product.name}: $${product.price}\n`;
      });

      alert(selectCategory);
    }
  }
}
