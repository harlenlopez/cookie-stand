var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log('js');

var Seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgSales: 6.3,
  hourlyArray: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },

  estimeSales: function () {
    for (var i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      Seattle.hourlyArray[i] = Math.floor(this.randomCustomer() * Seattle.avgSales);
    }
  }
};


var Tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgSales: 1.2,
  hourlyArray: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },

  estimeSales: function () {
    for (var i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      this.hourlyArray[i] = Math.floor(this.randomCustomer() * this.avgSales);
    }
  }
};

var Dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgSales: 3.7,
  hourlyArray: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },

  estimeSales: function () {
    for (var i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      this.hourlyArray[i] = Math.floor(this.randomCustomer() * this.avgSales);
    }
  }
};

var Paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgSales: 2.3,
  hourlyArray: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },

  estimeSales: function () {
    for (var i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      this.hourlyArray[i] = Math.floor(this.randomCustomer() * this.avgSales);
    }
  }
};

var Lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgSales: 4.6,
  hourlyArray: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },

  estimeSales: function () {
    for (var i = 0; i < hours.length; i++) {
      console.log(hours[i]);
      this.hourlyArray[i] = Math.floor(this.randomCustomer() * this.avgSales);
    }
  }
};

function hoursAppender(saleAmount) {
  var runningTotal = 0;
  for (var i = 0; i < saleAmount.length; i++) {
    var saleAmountHolder = document.getElementById('city-holder');
    var newLi = document.createElement('li');
    newLi.textContent = `${saleAmount}: ${Seattle} cookies`;
    console.log(saleAmount);
    var newLi1 = document.createElement('li');
    newLi1.textContent = `${hours[i]}: ${saleAmount[i]} cookies`;
    saleAmountHolder.appendChild(newLi1);
    runningTotal += saleAmount[i];
  }
  return runningTotal;
}
// console.log(Seattle);

function createHourlyLi(city) {
  var cityHolder = document.getElementById('city-holder');
  for (var i = 0; i < cities.length; i++) {
    var newLi = document.createElement('li');
    newLi.textContent = `${cities[i].name}`;
    cityHolder.appendChild(newLi);
    var total = hoursAppender(city.hourlyArray);
    var newLi1 = document.createElement('li');
    newLi1.textContent = `Total: ${total} cookies`;
    cityHolder.appendChild(newLi1);
  }
}

// Create City and Hourly List
Seattle.estimeSales();
createHourlyLi(Seattle);

Tokyo.estimeSales();
createHourlyLi(Tokyo);

Paris.estimeSales();
createHourlyLi(Paris);

Dubai.estimeSales();
createHourlyLi(Dubai);

Lima.estimeSales();
createHourlyLi(Lima);



// // constructor
// //tend to be a singular noun
// function Pet(breed, age, disposition) {
//   //set key b=vaue pairs on the new object
//   this.breed = 'breed';
//   this.age = 'age';
//   this.disposition = 'disposition';
// }

// Pet.prototype.getDisposition = function() {
//   var randomIndex = Math.floor(Math.random() * this.getDescription.length);
//   return this.descriptionWords[randomIndex];
// };

// Pet.prototype.render = function(){
//   var animalTable = document.getElementById('animal-table');
//   var petRow = document.createElement('tr');
//   var breedCell = document.createElement('td');
//   breedCell.textContent = this.breed;

  

//   var weigthCell = document.getElement('td'){
//     weightCell.textContent = this.breed;
//     petRow.appendChild(breedCell);
//   }

// var firstDog = new Pet('jindo', 35, 'good boy');
// var firstCt = new Pet('calico', 4, 'purrrrfect');
// var iguana = new Pet('green', 'cslly', 'cuddly');

// var pets = [firstCt, firstDog, iguana];
// pets[i] = 