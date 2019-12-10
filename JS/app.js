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
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },

  estimeSales: function () {
    return this.estimeSales() * this.avgSales;
  }
};

var Dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgSales: 3.7,
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },

  estimeSales: function () {
    return this.estimeSales() * this.avgSales;
  }
};

var Paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgSales: 2.3,
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },

  estimeSales: function () {
    return this.estimeSales() * this.avgSales;
  }
};

var Lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgSales: 4.6,
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },

  estimeSales: function () {
    return this.estimeSales() * this.avgSales;
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
console.log(Seattle);

function createHourlyLi(hourlyArray) {
  var cities = [Seattle, Tokyo, Dubai, Paris, Lima];
  var cityHolder = document.getElementById('city-holder');
  for (var i = 0; i < cities.length; i++) {
    var newLi = document.createElement('li');
    var newLi1 = document.createElement('li');
    newLi.textContent = `${cities[i].name}`;
    cityHolder.appendChild(newLi);
    var total = hoursAppender(hourlyArray);
    newLi1.textContent = `Total: ${total} cookies`;
    cityHolder.appendChild(newLi1);
  }
}

// Create City and Hourly List
Seattle.estimeSales();

createHourlyLi(Seattle.hourlyArray);

