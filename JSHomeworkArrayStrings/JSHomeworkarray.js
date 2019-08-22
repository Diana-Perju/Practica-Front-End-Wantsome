function string_to_array(str) {
    return str.split(" ");
};
console.log(string_to_array("Ana are mere"));


/*function truncateString(str, num) {
    if (num <= 4) {
    return str.slice(0, num) + "...";
    } else if (str.length <= num){
    return str;
    } return str.slice(0, num + 4);
    }

console.log(truncateString("Abcdef", 4))
console.log(truncateString("Abcdef", 8))


//var list = Array(50).fill(0, 0, 49);

//console.log(Object.getOwnPropertyNames(list));
//console.log(list.length);

//var list10 = list.slice(0, 9);
//console.log(Object.getOwnPropertyNames(list10));

//var listname = list.push({name:"Diana Perju"});
//console.log(listname);

//var elements = ['Cat', 'Dog', 'Mouse', 'Horse', 'Cow'];
//console.log(list.concat(elements));

//list[2] = ['Hello'];
//console.log(list);
*/