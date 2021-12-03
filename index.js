const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('70.50.14.123', (error, coordinates) => {
  if (error) {
    console.log(error);
    return;
  }
  
  console.log(coordinates);
});