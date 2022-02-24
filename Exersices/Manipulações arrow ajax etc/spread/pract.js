var numbers = [1,3,4,5,6,7,8,9];
console.log([...numbers, 10,11,12,13]);
 var productsdata = {
    products: {
        p1: "controlers",
        p2: "Home Charger",
        p3: "HeadSets",
        p4: "Action Figures"
    }
 };
 var company = {
     name: "New Wave Gaming Store",
     city: "Belo Horizonte",
     state: "MG",
     type: "Gaming Store",
     ...productsdata
 };
 console.log(company);
var programmer = {
    name: "",
    age: 28,
    gender: "Male",
    area: "Data-Science"
};
programmer.name = "Juizin";
var proggamer2 = {
    name: "Julia",
    age: 25,
    gender: "Female",
    area: "Mobile"
};
function verifydev() {
    if(programmer.name == "Juizin") {
        var course = {
            ...programmer,
            step1: "SQL",
            step2: "Data Engineer",
            step3: "Data Science",
            step4: "Data Visualization",
            Step5: "NoSQL",
            step6: "Math"
        };
    }else if(programmer.name == "Julia") {
        course = {
            ...proggamer2,
            step1: "React native",
            step2: "Flutter",
            step3: "IOS and Swift",
            step4: "Android",
            step5: "Kotlin"
        }
    }
    console.log(course);
};
verifydev();