//* Map() Reduce() filter() sort() some() every() *//

//**** Map Method ************//

/*
    1) Get an array of all names
    2) Get an array of all heights
    3) Get an array of objects with just name and height properties
    4) Get an array of all first names
*/


const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

/*1) Get an array of all names */

var result=characters.map(function(val,index){
   return val.name;
});
//console.log(result);

/*2) Get an array of all heights */

var result=characters.map(function(val,index){
   return val.height;
});
//console.log(result);

/*3) Get an array of objects with just name and height properties */
var result=characters.map(function(val,index){
    var new_obj={};
    new_obj.name=val.name;
    new_obj.height=val.height;
    return new_obj;
});
//console.log(result);

/*4) Get an array of all first names */
var result=characters.map((val,index)=>{
   var namee=val.name;
    var fname=namee.split(" ");
    return fname[0];
});
//console.log(result);

//**** REDUCE ************//

/*
   
    1) Get the total mass of all characters
    2) Get the total height of all characters
    3) Get the total number of characters in all the character names
    4) Get the total number of characters by eye color (hint. a map of eye color to count)
*/

/*1) Get the total mass of all characters */

var result1=characters.reduce((acc,val,index)=>{
   
    acc = acc + parseInt(val.mass);
   return acc;
},0);
//console.log(result1);

/*2) Get the total height of all characters */

var result1=characters.reduce((acc,val,index)=>{
   
    acc = acc + parseInt(val.height);
   return acc;
},0);
//console.log(result1);

/*3) Get the total number of characters in all the character names */


var result1=characters.reduce((acc,val,index)=>{
   var value=val.name.split("").filter((val,index)=>val!=" ");
   acc=acc+value.length;
    return acc;
},0);
//console.log(result1);

/*4) Get the total number of characters by eye color (hint. a map of eye color to count) */
var result1=characters.reduce((acc,val,index)=>{
    var associated_index=val.eye_color;
    if(acc[associated_index]==null){
        acc[associated_index]=1;
    }
    else{
        acc[associated_index]=acc[associated_index]+1;
    }
    return acc;
},[]);
//console.log(result1);

//**** FILTER ************//

/*
   
    1) Get characters with mass greater than 100
    2) Get characters with height less than 200
    3) Get all male characters
    4) Get all female characters
*/

/*1) Get characters with mass greater than 100*/

var result = characters.filter((val,index)=>{
    return val.mass > 100;
});
//console.log(result);

/*2) Get characters with height less than 200*/

var result = characters.filter((val,index)=>{
    return val.height < 200;
});
//console.log(result);

/*3) Get all male characters*/

var result = characters.filter((val,index)=>{
    return val.gender === "male";
});
//console.log(result);

/*4) Get all female characters*/

var result = characters.filter((val,index)=>{
    return val.gender === "female";
});
//console.log(result);

//**** Sort ************//

/* 
    1) Sort by name
    2) Sort by mass
    3) Sort by height
    4) Sort by gender
*/

/*1) Sort by name */

const characters1 = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

characters1.sort((a,b)=>{
   var nameA=a.name.toUpperCase();
   var nameB=b.name.toUpperCase();
   if(nameA<nameB){
       return -1;
   }
    if(nameA>nameB){
       return 1;
   }
    return 0;
});
//console.log(characters1);

/*2) Sort by mass */

const characters2 = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
characters2.sort((a,b)=>{
   return parseInt(a.mass)-parseInt(b.mass);
});
//console.log(characters2);

/*3) Sort by height in descending order*/

const characters3 = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

characters3.sort((a,b)=>{
   return parseInt(b.height)-parseInt(a.height);
});
//console.log(characters3);

/*4) Sort by Sort by gender*/

const characters4 = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

characters4.sort((a,b)=>{
   var genderA=a.gender;
    var genderB=b.gender;
    
    if(genderA < genderB){
        return -1;
    }
    if(genderA>genderB){
        return 1;
    }
    return 0;
});
//console.log(characters4);

//**** EVERY ************//

/* 
    1) Does every character have blue eyes?
    2) Does every character have mass more than 40?
    3) Is every character shorter than 200?
    4) Is every character male?
*/

/*1) Does every character have blue eyes? */

var result=characters.every((val,index)=>{
    return val.eye_color=='blue';
});
//console.log(result);

/*2) Does every character have mass more than 40? */

var result=characters.every((val,index)=>{
    return parseInt(val.mass) > 40;
});
//console.log(result);

/*2) Does every character have mass more than 40? */

var result=characters.every((val,index)=>{
    return parseInt(val.mass) > 40;
});
//console.log(result);

/*3) Is every character shorter than 200? */

var result=characters.every((val,index)=>{
    var a=parseInt(val.height) < 200;
    return a;
});
//console.log(result);

/*4) Is every character male? */

var result=characters.every((val,index)=>{
    return val.gender==='male';
});
//console.log(result);

//**** Some ************//

/* 
    1) Is there at least one male character?
    2) Is there at least one character with blue eyes?
    3) Is there at least one character taller than 200?
    4) Is there at least one character that has mass less than 50?
*/

/*1) Is there at least one male character? */

var result=characters.some((val,index)=>{
    return val.gender==='male';
});
//console.log(result);

/*2) Is there at least one character with blue eyes? */

var result=characters.some((val,index)=>{
    return val.eye_color==='blue';
});
//console.log(result);

/*3) Is there at least one character taller than 200*/

var result=characters.some((val,index)=>{
    return parseInt(val.height) > 200;
});
//console.log(result);

/*4) Is there at least one character that has mass less than 50?*/

var result=characters.some((val,index)=>{
    return parseInt(val.mass) < 50;
});
console.log(result);