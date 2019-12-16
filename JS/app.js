var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allCities = [];
var cityTable = document.getElementById('city-table');
var cityTableFooter = document.getElementById('city-table-footer');
// console.log('js');
function City(cityName, minCustomer1, maxCustomer1, avgSales) {
  this.city = cityName;
  this.minCustomer = minCustomer1;
  this.maxCustomer = maxCustomer1;
  this.avgSales = avgSales;
  this.hourlyArray = [];
  this.total = 0;
  allCities.push(this);


  // var randomCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  // return randomCustomer;
}

var seattle = new City('Seattle', 23, 65, 6.3);
var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);

var cityArray = [];
cityArray.push(seattle);
cityArray.push(tokyo);
cityArray.push(dubai);
cityArray.push(paris);
cityArray.push(lima);




City.prototype.randomCustomer = function () {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
};

City.prototype.averageCookiesPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyArray[i] = Math.floor(this.randomCustomer() * this.avgSales);
  }
};

City.prototype.render = function () {
  var row = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.city;
  row.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    var column = document.createElement('td');
    var data = Math.floor(this.randomCustomer()*this.avgSales);
    console.log(this.randomCustomer(), this.minCustomer, this.maxCustomer);
    column.textContent = data;
    this.total += data;
    this.hourlyArray.push(data);
    row.appendChild(column);
    console.log(cityTable);
  }
  var totalrow = document.createElement('td');
  totalrow.textContent = this.total;
  row.appendChild(totalrow);
  cityTable.appendChild(row);
  console.log(totalrow);

  for (var j = 0; j < allCities.length; j++);
  var totalColumn = document.createElement('td');
  totalColumn.textContent = this.totalData;
  row.appendChild(totalColumn);
  console.log('works');
};
// debugger;

function totalCityHours() {

  var masterTotal = 0;
  // var cityTableGrab = document.getElementById('city-table');
  // var totalsFooter = document.createElement('tfoot');
  var TotalCookiesRow = document.createElement('tr');
  var TotalCookiesRowName = document.createElement('td');
  TotalCookiesRowName.textContent = 'Totals';
  TotalCookiesRow.appendChild(TotalCookiesRowName);

  for (var h = 0; h < hours.length; h++) {
    var hourlyTotal = 0;
    for (var i = 0; i < allCities.length; i++) {
      hourlyTotal += allCities[i].hourlyArray[h];

    }
    var eachTd = document.createElement('td');
    eachTd.textContent = hourlyTotal;
    TotalCookiesRow.appendChild(eachTd);
    masterTotal = masterTotal + hourlyTotal;
    console.log('working');
    // debugger;
  }
  var grandTotal = document.createElement('td');
  grandTotal.textContent = masterTotal;
  TotalCookiesRow.appendChild(grandTotal);
  cityTableFooter.appendChild(TotalCookiesRow);
  //cityTableGrab.appendChild(totalsFooter);
  // document.getElementById('New-Location').addEventListener('submit', function(e){
  //   e.preventDefault();
  //   var cityName = e.target.City.value;
  //   var minCustomer = e.target.Minimum_Customers.value;
  //   var maxCustomer = e.target.Max_Customers.value;
  //   var avgSales = e.target.Average_Customers.value;
  //   console.log(cityName);
  //   var newCity = new City(cityName, minCustomer, maxCustomer, avgSales);
  //   cityArray.push(newCity);
  //   newCity.averageCookiesPerHour();
  //   newCity.render();

  //   totalCityHours();
  //   //find a way to get the last index number, var length is = t array -1
  // });
}

document.getElementById('New-Location').addEventListener('submit', function(e){
  e.preventDefault();
  var cityName = e.target.City.value;
  var minCustomer = e.target.Minimum_Customers.value;
  var maxCustomer = e.target.Max_Customers.value;
  var avgSales = e.target.Average_Customers.value;
  var newCity = new City(cityName, parseInt(minCustomer), parseInt(maxCustomer), parseInt(avgSales));
  cityArray.push(newCity);
  //newCity.averageCookiesPerHour();
  cityTableFooter.innerHTML = '';
  newCity.render();
  totalCityHours();
  //find a way to get the last index number, var length is = t array -1
});

function renderAllCities(){
  for (var i = 0; i < cityArray.length; i++) {
    cityArray[i].render();
  }
}

renderAllCities();
totalCityHours();

//evnt listeners: where, whatevent , an what to do
// var clickabale = document.getElementById('clickable');
// clickabale.addEventListener('click', function(event)){
// console.log('clicked it');

// event.preventDefault();
