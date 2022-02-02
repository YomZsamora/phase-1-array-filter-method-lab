// Returns all drivers that match the passed in name even if case does not match but letters do
let findMatching = (listOfDrivers, searchedDriver) => {
   return listOfDrivers.filter( driverName => {  return driverName.toLowerCase() === searchedDriver.toLowerCase() });
}