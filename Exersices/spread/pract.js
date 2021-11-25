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