//Question 1 : How to compare two JSON have the same properties without order?
//a.) let obj1 = {name:"Person 1", age:5}
//b.) let obj2 = {age:5, name:"Person 1"}

// let obj1 = {name:"Person 1", age:5};
// let obj2 = {age:5, name:"Person 1"};
// //var result1 = JSON.loads(obj1);
// //var result2 = JSON.loads(obj2);
// var difference = isEquals(obj1,obj2)
// console.log(difference);

//Question 2 : Use the rest countries' API URL ->https://restcountries.com/v3.1/all
//and display all the countries flags in the console.
//Step 1 : CReate a XHR Object
var request = new XMLHttpRequest();
//Step 2 : Opening a connection to the server
request.open("GET","https://restcountries.com/v3.1/all",true);
//Step 3 : Initiating a bridge to the server/ sending a request/ sending a connection
request.send();
//Step 4 : Server response
request.onload = function(){
    var data = request.response;
    //console.log(data);
    var result = JSON.parse(data);
    //console.log(result);
    for(var i=0;i<result.length;i++){
    console.log(result[i].flags.png)
    }

}

//Question 3 : Use the same rest countries and print all countries name,
//regions,sub-region and population.
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
    var data1 = request1.response;
    var result1 = JSON.parse(data1);
    for(var i=0;i<result1.length;i++){
    console.log(result1[i].name.common, result1[i].region,result1[i].subregion,result1[i].population);
    }
}

