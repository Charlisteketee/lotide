# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @charlisteketee/lotide`

**Require it:**

`const _ = require('@charlisteketee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: compares two arrays and sends a message whether or not they match
* `function2(assertEqual)`: compares two values and sends a message whether or not they match
* `function3(assertObjectsEqual)`: compares two objects and sends a message whether or not they match
* `function4(countLetters)`: returns a count of each of the letters in a sentence
* `function5(countOnly)`: returns an object containing counts of everything that the input object listed
* `function6(eqArrays)`: determines if two arrays are equal
* `function7(eqObjects)`: determines if two objects are equal
* `function8(findKey)`: returns the first key that is truthy
* `function9(findKeyByValue)`: returns the first key that is truthy of a predicate value
* `function10(flatten)`: flattens array 
* `function11(head)`: gets the first element of array
* `function12(letterPositions)`: returns all indices in a string where each character is found
* `function13(map)`: returns a new array based on results of a callback function
* `function14(middle)`: returns the middle-most element of an array
* `function15(tail)`: gets all elements except the first of an array
* `function16(takeUntil)`: elements of array are taken until predicate returns falsey
* `function17(without)`: creates an array excluding a specific value
