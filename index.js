// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, nameQuery) {
    const lowercaseQuery = nameQuery.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowercaseQuery);
  }
  function fuzzyMatch(drivers, nameQuery) {
    return drivers.filter(driver => driver.startsWith(nameQuery));
  }
  function matchName(drivers, nameQuery) {
    return drivers.filter(driver => driver.name === nameQuery);
  }