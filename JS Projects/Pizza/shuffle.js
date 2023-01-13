const topics = ["De 1 a 5", "De 5 a 10", "10 a 15"];

const people = ["Gabriel", "Erick", "Djohanne"];
for(let i = 1; i <= 3; i++) {
    const speople = Math.floor(Math.random(people)*3);
    const shuffle = Math.floor(Math.random(topics)*3);
    console.log(topics[shuffle], people[speople])
};
