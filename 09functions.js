function add(a, b) {
    console.log(a,b)
    return a+b;
  }
  var result = add(3, 4);  //replace this as return valuie // result = undefined
  console.log(result)
  
//arrow function
  let g = () => {
    return "Hello, world! It's a Arrow Function";
  }
  console.log(g()); 


//   settimeout asynchronous function
function a(){
    console.log("he");
}
a();
setTimeout(a,10000);

// setInterval asynchronous function

let a=0;
function incrementCounter(){
    a++;
    console.log(a);
}
setInterval(incrementCounter,1000);