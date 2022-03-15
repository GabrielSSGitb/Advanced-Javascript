function getinfo() {
  return new Promise(function(result, reject) {
      console.log("Getting your information....");

      setTimeout(function() {
          result('$400 dollars of ticket!');
      }, 2000);
  })
};
//Using Promise:
let time = getinfo();
//When everything is okay:
time.then((result) => console.log(`You need to pay: ${result}`));
// If something go wrong:
time.catch((error) => console.log("Something went wrong!!!"));