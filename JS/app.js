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
    // console.log(this.hourlyArray);
    // return this.estimeSales() * this.avgSales;
  }
};
Seattle.estimeSales();


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

function hoursAppender(hours) {
  for (var i = 0; i < hours.length; i++) {
    var hoursHolder = document.getElementById('hours');
    var newLi = document.createElement('li');
    newLi.textContent = `${hours}: ${Seattle} cookies`;   
    console.log(hours);
    var newLi1 = document.createElement('li');
    newLi1.textContent = `${hours[i]}`;
    hoursHolder.appendChild(newLi1);
  }
}
console.log(Seattle);

var cities = [Seattle, Tokyo, Dubai, Paris, Lima];
var cityHolder = document.getElementById('city-holder');
for (var i = 0; i < cities.length; i++) {
  // console.log(cities);
  var newLi = document.createElement('li');
  newLi.textContent = `${cities[i].name}`;
  //console.log(cities[i]);
  cityHolder.appendChild(newLi);
  hoursAppender(Seattle.hourlyArray);



}
console.log(cities);

// console.log('working');
// firstDog = {
//   weight: 35,
//   breed: jindo,
//   name: boog,
//   imgUrl: 'https:',
//   descriptionWords: ['hungry', 'blue eyes'],
//   getDescription: function () {
//     return this.descriptionWords[Math.floor(Math.random) * this.descriptionWords.length];
//   }
// };
// firstcat = {
//   weight: 4,
//   breed: calico,
//   name: mew,
//   imgUrl: 'https'
//   descriptionWords: ['small', 'meowy'],
//   getDescription: function () {
//     this.descriptionWords[Math.floor(math.random * this.descriptionWords.lenght)]
//   }
// };
