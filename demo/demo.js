//function myName(firstname, lastname){
//    return firstname +"" + lastname;
//}
//const myName = function() {
//    return firstname + "" + lastname;
//}
//const myName = (firstname, lastname) => {
//    return firstname = "" + lastname;
//}

//console.log(myName("Jessie", "Trevino"));

//const youareAwesome = function (string) {
//    return string;
//};

// myName = (firstname, lastname)=> {
//    return `You are Awesome ${firstname} ${lastname}`;
//};
//console.log(myName("Jennifer", "Jones"));
//console.log(youareAwesome("Your are Awesone Jennifer!"));

//const colors = ["red", "blue", "black"];

///const bicycle = {
//    color: "blue",
//    size: "small",
//    ride () {
// console.log("you began to pedal.");
//    }
//}

//class Dog {
//   constructor(name, color){
//    this.name = name;
//    this.color = color;
//   }
//   bark(){
//    console.log("the dog barked");
//   }
//}

//let dog1 = new Dog("Daisy", "Red")
//console.log(dog1); //

//const colors =["red", "blue", "black"]
//const cars = {
//    color: "black",
 //   model: "mustang",
//    drive (){
//        console.log("press the gas pedel down to the floor")
//    }
//}
//        console.log("the car went very fast!")

//class Cars{
//    constructor(model, color){
//        this.model = model;
//        this.color = color;
//    }
//    speed() {
//        console.log(`The ${this.color} ${this.model} went from 0 to 60 in one minute!`);

//    }
//}

//async function myFunction(){
//    console.log("Hello World!")
//}

//myFunction().then(
//    function(value){
        //code if successful
//    },
//    function(error){
//        //code if there is an error
 //   }
//);
//    const myPromise = new Promise(function(res, rej){
//        setTimeout(function(){
//            res("Keep up the good work");
//        }, 3000);
//    });    
//        myPromise.then(function(value){
//            console.log(value);
//              })
   // async function myDisplay(){
        //let myPromise = new Promise(function(resolve){
//          setTimeout(function (){
//            resolve("You are doing great!");
//           },5000);
//      })
     //console.log(await myPromise);
//      }
    
  async function myFunction(){
      console.log("I love Jennifer Estes Jones!");
  }
  myFunction().then(
        function(value){
            //code if successful
       },
       function(error){
            //code if there is an error
       })
       const myPromise = new Promise(function(res, rej){
                setTimeout(function(){
                    res("Keep up the good work"); 
                }, 3000);
        }); 
            myPromise.then(function(value){
                console.log(value);
        })   
        async function myDisplay(){
            let myPromise = new Promise(function(resolve){
              setTimeout(function (){
                resolve("You are doing great!");
              },5000);
        })
        console.log(await myPromise);
      };
      