//returning values
// const calcArea=function(radius)
// {
    
//     let area=3.14*radius**2;
//     console.log(area);
// }
// calcArea(5);///this function is for access the local variables 

const calcArea=function(radius)
{
    
    let area=3.14*radius**2;
    return area;
}
calcArea(5);
//for accessing this for global scope we create a glopbal variable 
const area=calcArea(5);//we can change the global var name also
console.log(area);//this code is for accesing the function methods in global also
