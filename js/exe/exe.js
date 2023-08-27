/* let courseName='web development';
let coursePrize=5000;
let courseGoals=['web developer' ,'fun' ,'job'];
alert(courseName);
alert(coursePrize);
alert(courseGoals); */

let course={name:'web development' ,prize:5000 , goals:['web developer' ,'fun' ,'job'] };
alert(course.name);
alert(course.goals);
alert(course.prize);
function listItem(array,arrayIndex){
    let arrayElement=array[arrayIndex];
    return arrayElement;
}
let secondGoal=listItem(course.goals ,1);
alert(secondGoal);
console.log(secondGoal);
console.log('hello');
console.log(10+45);
let a="fhgbgjhghg";
console.log(a.length);
console.log(a.toUpperCase());
