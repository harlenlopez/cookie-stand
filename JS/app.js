var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// console.log('js');
function City(cityName, minCustomer1, maxCustomer1, avgSales) {
  this.city = cityName;
  this.minCustomer = minCustomer1;
  this.maxCustomer = maxCustomer1;
  this.avgSales = avgSales;
  this.hourlyArray = [];
  this.total = 0;
  var randomCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  return randomCustomer;
}

var seattle = new City('Seattle', 23, 65, 6.3);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);

City.prototype.randomCustomer = function () {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
};

City.prototype.averageCookiesPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    console.log(hours[i]);
    this.hourlyArray[i] = Math.floor(this.randomCustomer() * this.avgSales);
    console.log(this.hourlyArray[i]);
  }
};

City.prototype.render = function () {
  var cityTable = document.getElementById('city-table');
  var row = document.createElement('tr');
  for (var i = 0; i < hours.length; i++) {
    var column = document.createElement('td');
    var data = this.randomCustomer();
    column.textContent = data;
    this.total += data;
    this.hourlyArray.push(data);
    row.appendChild(column);
  }
  var totalColumn = document.createElement('td');
  totalColumn.textContent = this.total;
  row.appendChild(totalColumn);
  cityTable.appendChild(row);

};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();




// var totalColumn = document.createElement('td');
// totalColumn.textContent = 'total:' + this.total;
// HTMLTableRowElement.appendChild(row);

//   cityTable.appendChild(Cities);
// };
// //   var weigthCell = document.getElement('td'){
// //     weightCell.textContent = this.breed;
// //     petRow.appendChild(breedCell);
// //   }

// //   }
// // function hoursAppender(saleAmount) {
// //   var runningTotal = 0;
//   for (var i = 0; i < saleAmount.length; i++) {
//     var saleAmountHolder = document.getElementById('city-holder');
//     var newLi = document.createElement('li');
//     newLi.textContent = `${saleAmount}: ${Seattle} cookies`;
//     console.log(saleAmount);
//     var newLi1 = document.createElement('li');
//     newLi1.textContent = `${hours[i]}: ${saleAmount[i]} cookies`;
//     saleAmountHolder.appendChild(newLi1);
//     runningTotal += saleAmount[i];
//   }
//   return runningTotal;
// }
// console.log(Seattle);

// function createHourlyLi(city) {
//   var cityHolder = document.getElementById('city-holder');
//   for (var i = 0; i < city.length; i++) {
//     var newLi = document.createElement('li');
//     newLi.textContent = `${city[i].name}`;
//     cityHolder.appendChild(newLi);
//     var total = hoursAppender(city.hourlyArray);
//     var newLi1 = document.createElement('li');
//     newLi1.textContent = `Total: ${total} cookies`;
//     cityHolder.appendChild(newLi1);
//   }
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

