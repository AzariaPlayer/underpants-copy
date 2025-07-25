// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

 _.identity = function(value){
    return value;
}




/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// if else statement for the collections

_.typeOf = function(value){
    if(Array.isArray(value)){
        return "array";
    } else if (value === null){
        return "null";
    } else {
        return typeof value;
    }
}




/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/


_.first = function(array, number){
    if(!Array.isArray(array) || number < 0){
      return [];
    } else if (number === undefined || number === NaN ){
      return array[0];
    } else {
     // using slice and number to return a certain part of the array
      return array.slice(0, number);
      }
    }



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
    if(!Array.isArray(array) || number < 0){
      return [];
    } else if (number === undefined || number === NaN ){
      return array[array.length - 1];
    } else if(number > array.length){
      return array;
    } else {
      return array.slice(-number);
    }
  }





/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
  for(var i = 0; i < array.length; i++){
    if(array[i] === value){
      return i;
    }
  }
  return -1;
}





/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
  for(var i = 0; i < array.length; i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
  if(Array.isArray(collection)){
    // so its saying for each element in the array - so we can use a for loop
    for(var i = 0; i < collection.length; i++){
      func(collection[i], i, collection); // function and its argument that runs
    } 
  } else if (typeof collection === 'object') {
      // else if object - for key in since we need to iterate through an object
      for(var key in collection){
        func(collection[key], key, collection)
      }
    }
  }




/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
  // return a new array - so we need a storage array 
  let newArr = [];
  // loop through the array
  for(var i = 0; i < array.length; i++){
    // every iteration push i to the newArr if its not there already 
    if(array.indexOf(array[i]) === i){
      newArr.push(array[i]);
    }
  }
  // make sure to return the newArr after the loop ends 
 return newArr;
}



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
  // storage 
  let result = [];
  // check if array is an array first 
  if(Array.isArray(array)){
    // loop through the array
    for(var i = 0; i < array.length; i++){
      // call the function on each index
      // for true
      if(func(array[i], i, array)) {
        // push the value to the storage array
         result.push(array[i]);
         }
       }
     }
  return result;
    }




/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
  // return a new array - storage
  let rejectStorage = [];
  if(Array.isArray(array)){
    // loop through the array
    for(var i = 0; i < array.length; i++){
      // call the function on each index
      // for FALSE
      if(!func(array[i], i, array)) {
        // push the value to the storage array
         rejectStorage.push(array[i]);
         }
       }
     }
  return rejectStorage;
   }




/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
  // im thinking three arrays? one for tru, one for false, and then add them together in another array
  // might be a little extra but thats all i can think of right now
  let trueArr = [];
  let falseArr = [];
  let bothArr = [];
  // lets check if its an array first 
  if(Array.isArray(array)){
    // iterate through it 
    for(var i = 0; i < array.length; i++){
      // if else if statement for true and false
      if(func(array[i], i, array)){
        trueArr.push(array[i]);
        // now for false
      } else if (!func(array[i], i, array)){
        falseArr.push(array[i]);
      }
    }
  }
  // outside the code block of the first if statement 
  bothArr.push(trueArr)
  bothArr.push(falseArr);
  return bothArr;
}




/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    const output = [];
    if(Array.isArray(collection)){
      for(var i = 0; i < collection.length; i++){
        // call back function to modify the current index 
        const result = func(collection[i], i , collection);
        output.push(result);
      }  
    } else if(typeof collection === 'object') {
      for(var key in collection){
        const objectResult = func(collection[key], key, collection);
        output.push(objectResult);
      }
    }
    return output;
}




/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = function(array, property){
  // remember that map takes the object and adds its keys to an array 
  return _.map(array, function(obj){
    // returning the objects(key) value
    return obj[property];
  });
  };

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
  // checking if collection is an array
  if(Array.isArray(collection)){
    // loop
    for(var i = 0; i < collection.length; i++){
      // also checking if func is a function
      if(typeof func === 'function'){
        // if something is not true in the function
        if(!func(collection[i], i, collection)) {
          // return false
          return false;
        }
      } else { 
        // if not provided - also counts falsey
        if(!collection[i]){
          return false;
        }
      }
    }
  } else {
    // loop through if its an array
    for (var key in collection){
      // again checking if func is a function
      if(typeof func === 'function'){
        if(!func(collection[key], key, collection)) {
          return false;
        }
      } else {
        if(!collection[key]) {
          return false;
        }
      }
    }
  }
  return true;
};


 

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/



_.some = function(collection, func){
  // literally the opposite of  _.every 
  // checking if collection is an array
  
  if(Array.isArray(collection)){
    // loop
    for(var i = 0; i < collection.length; i++){
      // also checking if func is a function
      if(typeof func === 'function'){
        // if fcuntion runs fully true return true
        if(func(collection[i], i, collection)) {
          // return false
          return true;
        }
        } else { 
        // if  that one index is true also return true
        if(collection[i]){
          return true;
        }
      }
     }
  } else {
    // loop through if its an array
    for (var key in collection){
      // again checking if func is a function
      if(typeof func === 'function'){
        // same this as above
        if(func(collection[key], key, collection)) {
          return true;
          }
      } else {
        if(collection[key]) {
          return true;
        }
      }
    }
  }
  return false;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


_.reduce = function(array, func, seed){
  // storage to return later 
  let output;
   if(seed === undefined){ // no seed value provided
    output = array[0]; // starting at the first item of the array
     for(var i = 1; i < array.length; i++){
       output = func(output , array[i], i);
     }
   } else { // seed value provided
      output = seed;
     for(var i = 0; i < array.length ; i++){
       output = func(output, array[i], i)
     }
   }
  return output;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object , ...objects){ // using the spread operator 
  // we can use the word argument to represent the objects we will pass in the function
  // loop through those
  for(var i = 0; i < arguments.length; i++){
    var copy = arguments[i]; // var copy because we are copying the properties of whatever iteration we are on for the object
    // now we need a loop through the actual Object itself
    for(var key in copy){ // notice how we use copy because we are talking about object we are on
      object[key] = copy[key]; 
    }
  }
  // return the updated object 
  return object;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}