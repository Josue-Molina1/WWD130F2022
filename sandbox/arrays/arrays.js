// i need to get the first part of the code 
// map function 



const letterGrades = ['A', 'B', 'C'];
function convertToGpaPointsGrades(grade){
    let points =o;
    switch (grade) {
        case 'A':
            points = 4;
            break;
            case 'B':
            points = 3;
            break 
            case 'C':
            points = 2;
            break;
            default: 
            points = 1;
            


    }
    return points;
}
const gpaPoints = grades.map(convertToGpaPoints);

function sumPoints(total, current){
    return total + current;
}
const average = gpaPoints.reduce(sumPoints, 0)/gpaPoints.lenght;
console.log(average.toFixed(2));

//total will be equaled to 0. We do this when we want to compress an array with just one value. 
const avg2= gpapOINTS((total, current)=> total+current, 0)

//filter: to return 6 or more letters. Use else and if statements? 
const fruits =  ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
function lessThanSix(word){
    return word.lenght >= 6

}
if(word.lenght >= 6){
    return true;   
}

//Index0f
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const index = numbers.indexOf(luckyNumber);


const meals = [
 {name: "curry", category: "Indian", prepTime:
"20min" cookTime: "10min", url: "dom-events.html"},
{name: "chicken Alfredo", category: "italian", 
prepTime: "10min", cookTime: "25min", url: "dom-events.html"}
];
function mealTemplate(meal) {
    return <li class=""><img src=""><h2>${meal.name}</h2><p>${meal.category}</p><p>cookTime: $</p>
}

function renderMeals(){
    const htmlMeals= meals.map(mealTemplate);
    const newUl = document.createElement('ul');
    newUl.insertAdjacentHTML("afterbegin", htmlMeals.join(""));
    document.querySelector("main").
    insertAdjacentElement("beforeend")
}

