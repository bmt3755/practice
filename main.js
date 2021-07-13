const companies = [
    {name: "comp1", category: "Finance", start: 1981, end: 2003},
    {name: "comp2", category: "Retail", start: 1992, end: 2008},
    {name: "comp3", category: "Auto", start: 1999, end: 2007},
    {name: "comp4", category: "Retail", start: 1989, end: 2010},
    {name: "comp5", category: "Technology", start: 2009, end: 2014},
    {name: "comp6", category: "Finance", start: 1987, end: 2010},
    {name: "comp7", category: "Auto", start: 1986, end: 1996},
    {name: "comp8", category: "Technology", start: 2011, end: 2016},
    {name: "comp9", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

console.log("@@@@@@@@@@@@@@@@@@--- THIS IS FOR LOOP ----@@@@@@@@@@@@@@@@@@@")
for(let i=0;i < companies.length; i++)
console.log(companies[i]);

console.log("@@@@@@@@@@@@@@@@@@--- THIS IS FOR-EACH LOOP ----@@@@@@@@@@@@@@@@@@@");
companies.forEach(function(company) {
    console.log(company.name);
});

console.log("@@@@@@@@@@@@@@@@@@--- FILTER PRACTICE ----@@@@@@@@@@@@@@@@@@@");
console.log("   ~~~~~~~~~~~~~~THIS IS FOR LOOP TO FILTER THE AGE ABOVE 21~~~~~~~~~~~~~~");
let canDrink = [];
for(let i=0; i<= ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING FILTER METHOD~~~~~~~~~~~~~~");
canDrink = ages.filter(function(age) {
    if(age >= 21) {
        return true;
    }
});
console.log(canDrink);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING FILTER ARROW FUNCTION~~~~~~~~~~~~~~");
canDrink = ages.filter(age => age>=21);
console.log(canDrink);

console.log("    ~~~~~~~~~~~~~~FILTER RETAIL COMPANIES~~~~~~~~~~~~~~");
let retailCompanies = companies.filter(function(company) {
    if(company.category === "Retail") {
        return true;
    }
});
console.log(retailCompanies);

console.log("   ~~~~~~~~~~~~~~FILTER RETAIL COMPANIES WITH ARROW FUNCTION~~~~~~~~~~~~~~");
retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);

console.log("   ~~~~~~~~~~~~~~FILTER 80'S COMPANIES~~~~~~~~~~~~~~");
let eightyCompanies = companies.filter(function(company) {
    if(company.start >=1980 && company.start <=1989) {
        return true;
    }
});
console.log(eightyCompanies);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING ARROW FUNCTION~~~~~~~~~~~~~~");
eightyCompanies = companies.filter(company => (company.start >=1980 && company.start <=1989));
console.log(eightyCompanies);

console.log("   ~~~~~~~~~~~~~~GET COMPANIES THAT LASTED 10 YEARS OR MORE~~~~~~~~~~~~~~");
let tenYearCompanies = companies.filter(function(company) {
    if((company.end - company.start)>=10) { 
        return true;
    }
});
console.log(tenYearCompanies);
console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING ARROW FUNCTION~~~~~~~~~~~~~~");
tenYearCompanies = companies.filter(company => (company.end - company.start) >= 10);
console.log(tenYearCompanies);


console.log("@@@@@@@@@@@@@@@@@@--- MAP PRACTICE ----@@@@@@@@@@@@@@@@@@@");
console.log("   ~~~~~~~~~~~~~~CREATE ARRAY OF COMPANY NAMES~~~~~~~~~~~~~~");
let companyNames = companies.map(function(company) {
    return company.name;
});
console.log(companyNames);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING ARROW FUNCTION~~~~~~~~~~~~~~");
companyNames = companies.map(company => company.name);
console.log(companyNames);

console.log("   ~~~~~~~~~~~~~~COMPANIES WITH THEIR START AND END DATES~~~~~~~~~~~~~~");
companyNames = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(companyNames);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING ARROW FUNCTION~~~~~~~~~~~~~~");
companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyNames);

console.log("   ~~~~~~~~~~~~~~GET THE SQUARE OF AGES~~~~~~~~~~~~~~");
let squareAges = ages.map(function(age) {
    return Math.floor(Math.sqrt(age));
});
console.log(squareAges);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING ARROW FUNCTION~~~~~~~~~~~~~~");
squareAges = ages.map(age => Math.floor(Math.sqrt(age)));
console.log(squareAges);

console.log("@@@@@@@@@@@@@@@@@@--- SORT PRACTICE ----@@@@@@@@@@@@@@@@@@@");
console.log("   ~~~~~~~~~~~~~~SORT THE COMPANIES BY START YEAR~~~~~~~~~~~~~~");
let sortedCompanies = companies.sort(function(a, b) {
    if(a.start > b.start) return 1;
    else return -1;
});
console.log(sortedCompanies);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING ARROW FUNCTION~~~~~~~~~~~~~~");
sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

console.log("   ~~~~~~~~~~~~~~SORT AGES~~~~~~~~~~~~~~");
let sortedAges = ages.sort(function(a, b) {
    if(a > b) return 1;
    else return -1;
});
console.log(sortedAges);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING ARROW FUNCTION~~~~~~~~~~~~~~");
let sortedAges1 = ages.sort((a,b) => (a>b ? 1 : -1));
console.log(sortedAges1);

console.log("@@@@@@@@@@@@@@@@@@--- REDUCE PRACTICE ----@@@@@@@@@@@@@@@@@@@");
console.log("   ~~~~~~~~~~~~~~ADD ALL AGES USING FOR LOOP~~~~~~~~~~~~~~");
let addAges = 0;
for(let i=0; i<ages.length; i++) addAges += ages[i];
console.log(addAges);
console.log("   ~~~~~~~~~~~~~~ADD ALL THE AGES USING REDUCE~~~~~~~~~~~~~~");
addAges = ages.reduce(function(total, age) {
    return total + age;
},0);
console.log(addAges);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING ARROW FUNCTION~~~~~~~~~~~~~~");
addAges = ages.reduce((total, age) => total + age, 0);
console.log(addAges);

console.log("   ~~~~~~~~~~~~~~GET TOTAL YEARS FOR ALL COMPANIES~~~~~~~~~~~~~~");
let totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
}, 0);
console.log(totalYears);

console.log("   ~~~~~~~~~~~~~~SAME FUNCTIONALITY ABOVE USING ARROW FUNCTION~~~~~~~~~~~~~~");
totalYears = companies.reduce((total, company) => total+(company.end - company.start), 0);
console.log(totalYears);

console.log("@@@@@@@@@@@@@@@@@@--- COMBINATIONS ----@@@@@@@@@@@@@@@@@@@");

let combo = ages
.filter(age => age>15)
.sort((a,b) => a > b? 1 : -1)
.map(age => age*2)
.reduce((total, age) => total+age, 0);
console.log(combo);
