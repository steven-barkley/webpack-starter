// function sendCars(...allCarIds)
// {
//     allCarIds.forEach(id => console.log(id));
// }

// sendCars(100,200,555);

// function sendCats(day,...allCatIds)
// {
//     allCatIds.forEach(id => console.log(id));
// }

// sendCats("Sunday","Tom","Garfield","Lux");

// let dogIds = [100,200,301];
// let [dog2,...theRest] = dogIds;

// console.log(dog2);

// console.log(dogIds[0],dogIds[1], theRest);


// let boy = { id: 5000, style: 'convertible'};

// let id, style;

// ({id, style} = boy);

// console.log(id,style);


// function startCars(car1,car2,car3,...rest){
//     console.log(rest);
// }

// let carIds = [1,2,3,4,5,6];
// startCars(...carIds);

//Equality Operators

let var1=0;
let var2='0';


if(var1 == var2) 
    {
        console.log('Same Value');
    }

if(var1 === var2)
    {
        console.log("Same type and value");
    }

if(var1 != var2)
    {
        console.log("Not equal");
    }

if (var1 !== var2)
    {
        console.log("Not equal or Not same data type");
    }
