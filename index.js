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
class Fruit extends Products {
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
productList.push(new Fruit("Fruit", "Mango", 2.75, 21, "Normal"));
productList.push(new Cloth("Cloth", "Yellow Shirt", 37, 9, "M"));
productList.push(new Cloth("Cloth", "Sweater", 68, 6, "S"));

productList.push(
  new Electronic("Electronic", "Mackbook Air 2020", 1249, 15, true)
);
productList.push(new Fruit("Fruit", "Grape", 7.25, 10, "High"));
productList.push(new Cloth("Cloth", "Leather Jacket", 104, 6, "M"));
productList.push(
  new Electronic("Electronic", "Lightning Cable", 19, 23, false)
);

productList.push(new Fruit("Fruit", "Banana", 3.5, 27, "Low"));
productList.push(new FastFood("Fast Food", "Nugget", 28, 15, 1));
productList.push(new Fruit("Fruit", "Apple", 5, 18, "High"));

//FILTERING PRODUCT
//Product per category array
let allProductFiltered = {};

//Fast food products
allProductFiltered["Fast Food"] = productList.filter(
  (product) => product.category == "Fast Food"
);

//Cloth products
allProductFiltered["Cloth"] = productList.filter(
  (product) => product.category == "Cloth"
);

//Electronic products
allProductFiltered["Electronic"] = productList.filter(
  (product) => product.category == "Electronic"
);

//Fruit products
allProductFiltered["Fruit"] = productList.filter(
  (product) => product.category == "Fruit"
);

///////////////////////////////////////////////
//DISPLAY FUNCTION
//Displaying category
let categoryDisplay = "";
let numb = 1;
for (category in allProductFiltered) {
  categoryDisplay += `${numb}. ${category}\n`;
  numb += 1;
}

//Displaying product in each category
let displayingProduct = (category) => {
  let selectCategory = "";
  allProductFiltered[category].forEach((product, index) => {
    selectCategory += `${index + 1}. ${product.name}: $${product.price}\n`;
  });
  return selectCategory;
};

//Alert updated product in each category (add/remove product)
let displayUpdateProduct = (category) => {
  allProductFiltered[category] = productList.filter(
    (product) => product.category == category
  );
  alert(displayingProduct(category));
};

//Displaying cart
let cart = [];
let displayingCart = () => {
  let cartDisplay = "";
  cart.forEach((product) => {
    cartDisplay += `${product.name}: ${product.quantity} x $${
      product.price
    } = $${product.quantity * product.price}\n`;
  });
  return cartDisplay;
};

///////////////////////////////////////////////
//MARKET APP
while (true) {
  //select menu
  let mainMenu = prompt(
    "Welcome! \nPlease select the menu below:\n1. Display products \n2. Add products \n3. Remove products \n4. Buy products \n5. Exit"
  );

  if (mainMenu == 1) {
    //Ask which category want to display
    let displayCategoryMenu = prompt(
      `Which product do you want to display? \n${categoryDisplay}`
    );

    //Display product in selected category
    switch (Number(displayCategoryMenu)) {
      case 1:
        alert(displayingProduct("Fast Food"));
        break;
      case 2:
        alert(displayingProduct("Cloth"));
        break;
      case 3:
        alert(displayingProduct("Electronic"));
        break;
      case 4:
        alert(displayingProduct("Fruit"));
        break;
    }
  } else if (mainMenu == 2) {
    //Ask product category -> Show category list
    let displayCategoryMenu = prompt(
      `In which category the product will be? \n${categoryDisplay}`
    );

    //Ask product properties in common category
    let productName = prompt("What is the name of the product?");
    let productPrice = prompt("How much is the price of the product?");
    let productStock = prompt("How much stock of the product?");

    //Ask product properties in each category and insert product properties into product list
    //Also display product in the category
    switch (Number(displayCategoryMenu)) {
      //Fast Food
      case 1:
        let productExpired = prompt(
          "In how many years will the product expired?"
        );
        productList.push(
          new FastFood(
            "Fast Food",
            productName,
            productPrice,
            productStock,
            productExpired
          )
        );

        displayUpdateProduct("Fast Food");
        break;

      //Cloth
      case 2:
        let productSize = prompt("What is the size of the product? (S/M/XL)");
        productList.push(
          new Cloth(
            "Cloth",
            productName,
            productPrice,
            productStock,
            productSize
          )
        );

        displayUpdateProduct("Cloth");
        break;
      case 3:
        let productWarranty = prompt(
          "Is the product includes warranty? \n1. Yes \n2. No"
        );
        productList.push(
          new Electronic(
            "Electronic",
            productName,
            productPrice,
            productStock,
            productWarranty
          )
        );

        displayUpdateProduct("Electronic");
        break;
      case 4:
        let productSugarLevel = prompt(
          "What is the sugar level of the product? (Low/Medium/High)"
        );
        productList.push(
          new Fruit(
            "Fruit",
            productName,
            productPrice,
            productStock,
            productSugarLevel
          )
        );

        displayUpdateProduct("Fruit");
        break;
    }
  } else if (mainMenu == 3) {
    //Ask product category -> Show category list
    let displayCategoryMenu = prompt(
      `In which category is the removed product? \n${categoryDisplay}`
    );

    switch (Number(displayCategoryMenu)) {
      case 1:
        let removedProduct = prompt(displayingProduct("Fast Food"));
        productList.forEach((product, index) => {
          if (
            product.name ==
            allProductFiltered["Fast Food"][Number(removedProduct) - 1].name
          ) {
            productList.splice(index, 1);
          }
        });
        displayUpdateProduct("Fast Food");
        break;
    }
  } else if (mainMenu == 4) {
    //Choose products to buy
    while (true) {
      //Ask product category -> Show category list
      let displayCategoryMenu = prompt(
        `Please choose a category: \n${categoryDisplay}`
      );

      //Choose product in the category
      switch (Number(displayCategoryMenu)) {
        case 1:
          let buyProduct = prompt(displayingProduct("Fast Food"));
          productList.forEach((product, index) => {
            if (
              product.name ==
              allProductFiltered["Fast Food"][Number(buyProduct) - 1].name
            ) {
              let quantity = Number(
                prompt(
                  `How many ${productList[index].name} do you want to buy?`
                )
              );
              cart.push(product);
              product.quantity = quantity;
              let cartNext = prompt(
                `${displayingCart()} \nDo you want to continue shopping? \n1. Continue shopping \n2.Checkout`
              );

              if (cartNext == 2) {
                //Checkout
                let totalCheckout = 0;
                cart.forEach((product) => {
                  totalCheckout += product.price * product.quantity;
                });

                while (true) {
                  let payment = prompt(
                    `${displayingCart()}\n TOTAL = $${totalCheckout}\nPlease insert your payment:`
                  );

                  let margin = payment - totalCheckout;
                  if (margin < 0) {
                    alert(
                      `Your payment need $${Math.abs(
                        margin
                      )} more, please insert new amount.`
                    );
                  } else if (margin > 0) {
                    alert(
                      `Thank you for your order, your change is $${margin}.`
                    );
                    break;
                  } else {
                    alert("Thank you for your order!");
                    break;
                  }
                }

                //Empty the cart
                cart = [];
              }
            }
          });
      }
    }
  }
}
