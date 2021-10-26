let date = new Date();

date.setFullYear(2033);
date.setMonth(07);
date.setDate( date.getDate() + 5 );
date.setHours(date.getHours() - 42);

console.log(date);