const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json')
};
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://api.freegeoip.app/json/${ip}?apikey=c6a5b650-53f0-11ec-8f3f-491354ee800d`);
};
const fetchISSFlyoverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
}
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyoverTimes)
  .then((data) => {
    const {response} = JSON.parse(data);
    return response;
  });
}

module.exports = {nextISSTimesForMyLocation};