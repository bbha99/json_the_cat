const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log(typeof body);
    // console.log(data)
  
    // Edge Case: Request Failed
    if (error) {
      // console.log(error.message)
      callback(error.message, null);
      return;
    }
  
    // Edge Case: Breed Not Found
    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      // console.log("breed not found");
      callback("breed not found", null);
      return;
    }
    // console.log(breed.description)
    return callback(null, breed.description);
  
    
  });
};

module.exports = {
  fetchBreedDescription
};
