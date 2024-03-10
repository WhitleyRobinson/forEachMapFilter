// forEach
function doubleValues(array) {
    let newArr = [];
        array.forEach(function(val) {
            newArr.push(val * 2);
        });
        return newArr;
    }

//const result= doubleValues([5, 1, 2, 3, 10])
//console.log(...result);

// onlyEvenValues

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}
    //const result = onlyEvenValues([5, 1, 2, 3, 10, 8])
    //console.log(...result);

// showFirstAndLast

    function showFirstAndLast(arr) {
        let newArr = [];
        arr.forEach(function(val) {
            newArr.push(val[0] + val[val.length - 1]);
        });
        return newArr;
    }
    //const result = showFirstAndLast(['hi', 'goodbye', 'smile'])
    //console.log(...result);

// addKeyAndValue

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
}

//const result = addKeyAndValue(
    //[
        //{name: 'Elie'},
        //{name: 'Tim'},
        //{name: 'Matt'},
        //{name: 'Colt'}
    //],
    //'title',
    //'instuctor'
//)
//console.log(...result);

// vowelCount

function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";

    splitArr.forEach(function(letter) {
        let lowerCasedLetter = letter.toLowerCase()
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if(obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}

   // const result = vowelCount['Elie', 'Tim', 'Matt', 'Hmmm' ];

// map

// doubleValuesWithMap

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

//const result= doubleValuesWithMap([-1, -2, 3])
//console.log(...result);

// valTimesIndex

function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
        return val * idx;
    });
}

//const result= valTimesIndex([1, 2, -3, -4])
//console.log(...result);

// extractKey

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

//const result= extractKey(
  //  [
        //{name: 'Elie'},
        //{name: 'Tim'},
        //{name: 'Matt'},
        //{name: 'Colt'},
    //],
    //'name'
//)

//console.log(...result);

// filter

// filterByValue

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
    });
}

//const result = filterByValue(
   // [
        //{first: 'Elie', last: "Schoppik"},
        //{first: 'Tim', last: "Garcia", isCatOwner: true},
        //{first: 'Matt', last: "Lane"},
        //{first: 'Colt', last: "Steele", isCatOwner: true}
    //],
    //'isCatOwner'
//)

//console.log(...result)

// find

function find(arr, searchValue) {
    return arr.filter(function(val) {
        return val === searchValue;
    })[0];
}

//const result = find([1,2,3,4,5], 3)

//console.log(result)

// findInObj

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
    })[0];
}

//const result = findInObj(
    //[
        //{first: 'Elie', last: "Schoppik"},
        //{first: 'Tim', last: "Garcia", isCatOwner: true},
        //{first: 'att', last: "Lane"},
        //{first: 'Colt', last: "Steele", isCatOwner: true},
    //],
    //'isCatOwner',
    //true
//)

//console.log(result)

// removeVowels

function removeVowels(str) {
    const vowels = "aeiou";
    return str
        .toLowerCase()
        .split("")
        .filter(function(val) {
            return vowels.indexOf(val) === -1;
        })
        .join("");
}

//const result = removeVowels(['Elie', 'TIM', 'ZZZZZZ'])

//console.log(result)

//doubleOddNumbers

function doubleOddNumbers(arr) {
    return arr
    .filter(function(val) {
        return val % 2 !== 0;
    })
    .map(function(val) {
        return val * 2;
    });
}

const result = doubleOddNumbers([1,2,3,4,5])

console.log(...result)