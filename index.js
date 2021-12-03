const request = require('request');
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyoverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('70.50.14.123', (error, coordinates) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
  
//   console.log(coordinates);
// });
const exampleCoords = { latitude: 43.8841, longitude: -79.0607 };

fetchISSFlyoverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(passTimes);
});