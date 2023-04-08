const drivers = ["Sally", "Bob", "Freddy", "Claudia"];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiply) {
    return function(fare){
        return fare * multiply;
    };

}

function fareDoubler(fare){
    const doubleFare = createFareMultiplier(2);
    return doubleFare(fare);
};

function fareTripler(fare){
    const TriplerFare = createFareMultiplier(3);
    return TriplerFare(fare);
};

function selectDifferentDrivers(drivers, selectorFunction) {
    return selectorFunction(drivers);
  }
console.log(fareDoubler(10));
console.log(fareTripler(10));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));