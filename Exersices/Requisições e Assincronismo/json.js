let employee = {
    name: "Gabriel",
    age: 17,
    characteristics: ["Sorridente", "Engraçado", "Alegre", "top"]
};
console.log(employee.characteristics);

let streamer = {name: "Alanzoka",age: 40,content: "Games",viewers: 5000000,
recentplayed: {race: "Rocket League",horror: "Resident Evil Village",action: "Warzone"}};

console.log(`
Streamer name: ${streamer.name};
Streamer age: ${streamer.age};
Kind of content: ${streamer.content};
How many viewers: ${streamer.viewers};
     Recent Creations: 
      Race Game: ${streamer.recentplayed.race} 
      Horror Game: ${streamer.recentplayed.horror} 
      Action Game: ${streamer.recentplayed.action} 
`)