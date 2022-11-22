function sales(carsSold) {
    let carMakeAndPrice = {};
    for (let car of carsSold) {
      if (carMakeAndPrice[car.make]) {
        carMakeAndPrice[car.make] += car.price;
      } else {
        carMakeAndPrice[car.make] = car.price;
      }
    }
    return carMakeAndPrice;
}

module.exports = sales;
