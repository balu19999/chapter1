//variables & block scope

//  let age=30;//global variable

//  if(true)
//  {
//      console.log('age is in inside block'+' '+age);
//  }
//  console.log('age is in inside block'+' '+age);
 // in global variable if we intialize any value it applicable to the whole body of the program 
 //if local variable is not there



 //local and global variables
//  let age=30;//global variable

//  if(true)
//  {
//      let age=40;//local variable 
//      console.log('age is in inside block'+' '+age);
//  }
//  console.log('age is in inside block'+' '+age);
 //in this the priority of the  inside block will goes to local variable because it is inside body
 //of the block or function

//  let age=30;//global variable

//  if(true)
//  {
//      let age=40;//local variable 
//      console.log('age is in 1st inside block'+' '+age);

//      if(true)//nested if loop
//      {
//         console.log('age is in 2nd inside block'+' '+age);//if and nested if block priority will goes to 
//         //1st block variable

//      }
//  }
//  console.log('age is in inside block'+' '+age);

let age=30;//global variable

 if(true)
 {
     let age=40;//local variable 
     console.log('age is in 1st inside block'+' '+age);

     if(true)//nested if loop
     {
         let age=60;
        console.log('age is in 2nd inside block'+' '+age);// nested if block priority will goes to 
        //2nd block variable because variable in there local block of code

     }
 }
 console.log('age is in inside block'+' '+age);

