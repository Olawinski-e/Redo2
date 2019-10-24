import "./styles.css";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getOdds(arr) {
  let odds = [];

  for (let i = 0; i < arr.length + 1; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}

console.log(getOdds(arr));

function getOdds2(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log(getOdds2(arr));

const getOdds3 = arr => arr.filter(num => num % 2 !== 0);
console.log(getOdds3(arr));

var arrayNames = ["Pedro", "Jake", "Joan"];
arrayNames.forEach(name => console.log(name));

const raceResults = ["Helen", "John", "Peter", "Merry"];
raceResults.forEach(function(elem, index) {
  console.log(elem + " finished the race in " + (index + 1) + " position!");
});

raceResults.forEach(elem => console.log(`${elem} finished the race in `));

function printStars(howMany) {
  console.log("*".repeat(howMany));
}

[1, 2, 3, 4, 5].forEach(function(num) {
  printStars(num);
});

[1, 2, 3, 4, 5].forEach(num => printStars(num));

var phrase = "This is long enough for a string to count it words";

var words = phrase.split(" ");

console.log(words);
console.log(words[0]);
console.log(words.length);

document.getElementById("app").innerHTML = `
<h1>Hello You!</h1>
<div>
</div>
`;
