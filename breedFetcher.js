const request = require("request");
let input = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  // console.log(typeof body);
  // console.log(data)

  // Edge Case: Request Failed
  if (error) {
    console.log(error.message)
    return;
  } 

  // Edge Case: Breed Not Found
  const data = JSON.parse(body);
  const breed = data[0];
  if (!breed) {
    console.log("breed not found");
    return
  }
  
  console.log(breed.description); 

  
});